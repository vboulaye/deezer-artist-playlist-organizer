import type {DeezerAlbum, DeezerArtist, DeezerPlaylistDetails} from "$lib/DeezerApiModel";
import {getDeezerArtist, getDeezerArtistDiscography} from "$lib/DeezerApiQuery";
import {callDeezer} from "$lib/DeezerCall";
import {getRemainingPages} from "$lib/PaginationUtils";
import type {PaginatedResult} from "$lib/PaginationUtils";
import {error} from "@sveltejs/kit";
import type {PageLoadEvent} from "./$types";


export const ssr = false

export async function load({parent, params}: PageLoadEvent) {
    const {session} = await parent();
    const accessToken = session?.token?.access_token;
    if (!accessToken) {
        throw error(500, "no access token in session")
    }

    const playlistId = params.id;

    const playlist = await callDeezer<DeezerPlaylistDetails>({
        apiPath: `/playlist/${playlistId}`,
        accessToken: accessToken
    });
    const artistsById = playlist.tracks.data
        .reduce((accumulator, track) => {
            if (!accumulator[track.artist.id]) {
                accumulator[track.artist.id] = {artist: track.artist, count: 0}
            }
            accumulator[track.artist.id].count++
            return accumulator
        }, {} as { [k: number]: { artist: DeezerArtist, count: number } });

    const playlistTopArtists = Object.values(artistsById)
       // .filter(artist => artist.count >= playlist.tracks.data.length / 3)
        .sort((a, b) => b.count - a.count)

    // const topArtists = Promise.all(playlistTopArtists.map(async topArtist => {
    //     const artist = await getDeezerArtist(topArtist.artist.id, accessToken);
    //     const albums = await getDeezerArtistDiscography(topArtist.artist.id, accessToken);
    //     return {artist, albums, count: topArtist.count}
    // }));


    return {
        playlist: playlist,
        topArtists: playlistTopArtists,
    }

}
