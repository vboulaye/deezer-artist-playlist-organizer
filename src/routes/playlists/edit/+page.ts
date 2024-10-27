import type {DeezerArtist, DeezerPlaylistDetails, DeezerTrack} from "$lib/DeezerApiModel";
import {getDeezerArtist} from "$lib/DeezerApiQuery";
import {callDeezer} from "$lib/DeezerCall";
import {getRemainingPages} from "$lib/PaginationUtils";
import {redirect} from "@sveltejs/kit";
import type {PageLoadEvent} from "./$types";


export const ssr = false

async function getPlaylistId(playlistId: string): Promise<string> {
    if (playlistId === 'NEW') {
        const timestamp = new Date().toISOString();
        const newPlaylist = await callDeezer<DeezerPlaylistDetails>({
            apiPath: `/user/me/playlists`,
            searchParams: {
                request_method: "POST",
                title: `New Playlist ${timestamp}`,
                description: `Playlist created with deezer-artist-playlist-organizer on the ${timestamp}`,
                public: true
            }
        });
        redirect(302, "?id=" + newPlaylist.id);
    }
    return playlistId;
}

export async function load({url, parent}: PageLoadEvent) {

    // we use a search param rather than a pat param because we deploy a version  client side only
    const playlistId = await getPlaylistId(url.searchParams.get("id") ?? "")

    const playlist = await callDeezer<DeezerPlaylistDetails>({
        apiPath: `/playlist/${playlistId}`,
    });


    if (playlist.nb_tracks > 400) {
        const lastTracks = await getRemainingPages<DeezerTrack>({apiPath: `/playlist/${playlistId}/tracks`, limit: 100, index: playlist.tracks.data.length});
        playlist.tracks.data = [...playlist.tracks.data, ...lastTracks.data]
    }

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
        .toSorted((a, b) => b.count - a.count)

    const topArtists = Promise.all(playlistTopArtists.map(async topArtist => {

        //just to get the pictures!
        const artist = await getDeezerArtist(topArtist.artist.id);
        // const albums = await getDeezerArtistDiscography(topArtist.artist.id, accessToken);
        return artist// {artist, albums, count: topArtist.count}
    }));


    const parentData= await parent()
    return {
        ...parentData,
        playlist: await playlist,
        topArtists: await topArtists,
    }

}
