import type {DeezerAlbum, DeezerArtist, DeezerTrack} from "$lib/DeezerApiModel";
import {callDeezer} from "$lib/DeezerCall";
import {getRemainingPages} from "$lib/PaginationUtils";

export async function getDeezerArtist(artistId: number, accessToken?: string): Promise< DeezerArtist>
{

    const artist = await callDeezer<DeezerArtist>({
        apiPath: "/artist/" + artistId,
        accessToken: accessToken,
    });

    return artist;
}


export interface DeezerAlbumWithTracks extends DeezerAlbum {
    tracks: DeezerTrack[]
}

export async function getDeezerArtistDiscography(artistId: number, accessToken?: string): Promise<DeezerAlbumWithTracks[]> {


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
    return albums;
}