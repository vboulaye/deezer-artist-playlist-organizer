import type {DeezerAlbum, DeezerArtist, DeezerTrack} from "$lib/DeezerApiModel";
import {DeezerCache} from "$lib/DeezerCache";
import {callDeezer} from "$lib/DeezerCall";
import {getRemainingPages} from "$lib/PaginationUtils";

const deezerArtistCache = new DeezerCache<number, DeezerArtist>("ARTIST", 3600 * 1000)
const deezerArtistDiscographyCache = new DeezerCache<number, DeezerAlbumWithTracks[]>("ARTIST-DISCOGRAPHY", 3600 * 1000)

export async function getDeezerArtist(artistId: number): Promise<DeezerArtist> {
    const fromCache = deezerArtistCache.get(artistId);
    if (fromCache) {
        return fromCache
    }
    const artist = await callDeezer<DeezerArtist>({
        apiPath: "/artist/" + artistId,
    });
    deezerArtistCache.put(artistId, artist)
    return artist;
}


export interface DeezerAlbumWithTracks extends DeezerAlbum {
    tracks: (DeezerTrack & {
        isrc: string
    })[]
}

export async function getDeezerArtistDiscography(artistId: number): Promise<DeezerAlbumWithTracks[]> {
    const fromCache = deezerArtistDiscographyCache.get(artistId);
    if (fromCache) {
        return fromCache
    }

    const allArtistAlbums = await getRemainingPages<DeezerAlbum>({
        apiPath: "/artist/" + artistId + "/albums",
        index: 0,
        limit: 100
    })

    const albums = await Promise.all(allArtistAlbums.data.map(async album => {
        const tracks = await getRemainingPages<DeezerTrack & {
            isrc:string
        }>({
            apiPath: "/album/" + album.id + "/tracks",
            index: 0,
            limit: 100,
        })
        return {
            ...album,
            tracks: tracks.data
        }
    }))

    deezerArtistDiscographyCache.put(artistId, albums)
    return albums;
}