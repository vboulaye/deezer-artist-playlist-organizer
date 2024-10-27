import type {DeezerAlbum, DeezerArtist, DeezerTrack} from "$lib/DeezerApiModel";
import {getAlbumTracks, getDeezerArtistDiscography} from "$lib/DeezerApiQuery";
import type {ToastStore} from "@skeletonlabs/skeleton";

export interface TrackSelection {
    track: DeezerTrack
    inPlaylist: boolean
    selected: boolean
}

export function removeArtistTracks(artistId: number, trackSelections: TrackSelection[]) {
    trackSelections
            .forEach(trackSelection => {
                if (trackSelection.track.artist.id === artistId) {
                    trackSelection.selected = false
                }
            })
}

export async function addArtistTracks(artist: DeezerArtist, trackSelections: TrackSelection[], toastStore: ToastStore) {
    const artistId = artist.id
    const albums = await getDeezerArtistDiscography(artistId);


    const allTracks = albums
        .toSorted((a1, a2) => a1.release_date.localeCompare(a2.release_date))
        .flatMap(album => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {tracks: _, ...parentAlbum} = album
            return album.tracks.map(track => ({...track, album: parentAlbum}));
        });

    allTracks.forEach(track => {
        const existingTrack = trackSelections.find(playlistTrack => playlistTrack.track.id === track.id);
        if (!existingTrack) {
            trackSelections.push({
                track,
                inPlaylist: false,
                selected: true,
            })
        } else {
            // update the existing track with the detailled album info
            existingTrack.track.album = track.album
            existingTrack.selected = true
        }
    })

    function getIndex(t: TrackSelection): number {
        return allTracks.findIndex(x => x.id === t.track.id)
    }

    trackSelections.sort((t1, t2) => {
        const pos1 = getIndex(t1)
        const pos2 = getIndex(t2)
        return pos1 - pos2
    })

    toastStore.trigger({
        message: `Added ${allTracks.length} tracks from ${artist.name}`,
        timeout: 3000
    });


}

export function removeAlbumTracks(albumId: number, trackSelections: TrackSelection[]) {
    trackSelections
            .forEach(trackSelection => {
                if (trackSelection.track.album.id === albumId) {
                    trackSelection.selected = false
                }
            })
}


export async function addAlbumTracks(album: DeezerAlbum, trackSelections: TrackSelection[]) {
    const allTracks = await getAlbumTracks(album.id);


        allTracks.data.forEach(track => {
            const existingTrack = trackSelections.find(playlistTrack => playlistTrack.track.id === track.id);
            track.album = album
            if (!existingTrack) {
                trackSelections.push({
                    track,
                    inPlaylist: false,
                    selected: true,
                })
            } else {
                // update the existing track with the detailled album info
                existingTrack.track.album = track.album
                existingTrack.selected = true
            }
        })

        function getTrackIndex(t: TrackSelection): number {
            return allTracks.data.findIndex(x => x.id === t.track.id) + 1
        }

        function getRawIndex(t: TrackSelection): number {
            return trackSelections.findIndex(x => x.track.id === t.track.id) + 1
        }

        const startIndex = trackSelections.findIndex(x => x.track.album.id === album.id);

        function getIndex(t: TrackSelection) {
            const trackIndex = getTrackIndex(t);
            if (trackIndex === 0) {
                return getRawIndex(t) * 10000
            }
            return startIndex * 10000 + trackIndex;
        }

        // console.log({startIndex})
        trackSelections.sort((t1, t2) => {
            const pos1 = startIndex * 10000 + getIndex(t1)
            const pos2 = startIndex * 10000 + getIndex(t2)
            return pos1 - pos2
        })

        // return trackSelections
}


export function getTrackCount(artistId: number, trackSelections: TrackSelection[]): number {
    const trackCount = trackSelections
        .filter(t => t.track.artist.id === artistId && t.selected)
        .length;
    // console.debug(`Track count for artist ${artistId}: ${trackCount}`)
    return trackCount
}


export function purgePlaylistTrackSelections(trackSelections: TrackSelection[], toastStore: ToastStore): void {
    const clearedSelections = trackSelections
        .filter(trackSelection => trackSelection.selected || trackSelection.inPlaylist);
    trackSelections.splice(0, trackSelections.length, ...clearedSelections);
    toastStore.trigger({
        message: `Removed ${trackSelections.length - clearedSelections.length} track(s) from the playlist`,
        timeout: 3000
    });
}
