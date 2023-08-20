import type {DeezerAlbum, DeezerArtist, DeezerTrack} from "$lib/DeezerApiModel";
import {DeezerCache} from "$lib/DeezerCache";
import {callDeezer} from "$lib/DeezerCall";
import {getRemainingPages} from "$lib/PaginationUtils";

const deezerArtistCache = new DeezerCache<number, DeezerArtist>("ARTIST", 3600 * 1000)
const deezerArtistDiscographyCache = new DeezerCache<number, DeezerAlbumWithTracks[]>("ARTIST-DISCOGRAPHY", 3600 * 1000)

export async function getDeezerArtist(artistId: number, accessToken?: string): Promise<DeezerArtist> {
    const fromCache = deezerArtistCache.get(artistId);
    if (fromCache) {
        return fromCache
    }
    const artist = await callDeezer<DeezerArtist>({
        apiPath: "/artist/" + artistId,
        accessToken: accessToken,
    });
    deezerArtistCache.put(artistId, artist)
    return artist;
}


export interface DeezerAlbumWithTracks extends DeezerAlbum {
    tracks: DeezerTrack[]
}

export async function getDeezerArtistDiscography(artistId: number, accessToken?: string): Promise<DeezerAlbumWithTracks[]> {
    const fromCache = deezerArtistDiscographyCache.get(artistId);
    if (fromCache) {
        return fromCache
    }

    const allArtistAlbums = await getRemainingPages<DeezerAlbum>({
        apiPath: "/artist/" + artistId + "/albums",
        accessToken: accessToken,
        index: 0,
        limit: 100
    })

    const albums = await Promise.all(allArtistAlbums.data.map(async album => {
        const tracks = await getRemainingPages<DeezerTrack>({
            apiPath: "/album/" + album.id + "/tracks",
            accessToken: accessToken,
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