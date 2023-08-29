import type {DeezerAlbum, DeezerTrack} from "$lib/DeezerApiModel";
import {getAlbumTracks, getDeezerArtistDiscography} from "$lib/DeezerApiQuery";
import type {Writable} from "svelte/store";

export interface TrackSelection {
    track: DeezerTrack
    inPlaylist: boolean
    selected: boolean
}

export function removeArtistTracks(artistId: number, trackSelections: Writable<TrackSelection[]>) {
    trackSelections.update(trackSelectionsList => {
        trackSelectionsList
            .forEach(trackSelection => {
                if (trackSelection.track.artist.id === artistId) {
                    trackSelection.selected = false
                }
            })
        return trackSelectionsList
    })
}

export async function addArtistTracks(artistId: number, trackSelections: Writable<TrackSelection[]>) {
    const albums = await getDeezerArtistDiscography(artistId);

    trackSelections.update(trackSelectionsList => {

        const allTracks = albums
            .sort((a1, a2) => a1.release_date.localeCompare(a2.release_date))
            .flatMap(album => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const {tracks: _, ...parentAlbum} = album
                return album.tracks.map(track => ({...track, album: parentAlbum}));
            });

        allTracks.forEach(track => {
            const existingTrack = trackSelectionsList.find(playlistTrack => playlistTrack.track.id === track.id);
            if (!existingTrack) {
                trackSelectionsList.push({
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

        trackSelectionsList.sort((t1, t2) => {
            const pos1 = getIndex(t1)
            const pos2 = getIndex(t2)
            return pos1 - pos2
        })

        return trackSelectionsList
    })
}

export function removeAlbumTracks(albumId: number, trackSelections: Writable<TrackSelection[]>) {
    trackSelections.update(trackSelectionsList => {
        trackSelectionsList
            .forEach(trackSelection => {
                if (trackSelection.track.album.id === albumId) {
                    trackSelection.selected = false
                }
            })
        return trackSelectionsList
    })
}


export async function addAlbumTracks(album: DeezerAlbum, trackSelections: Writable<TrackSelection[]>) {
    const allTracks = await getAlbumTracks(album.id);

    trackSelections.update(trackSelectionsList => {

        allTracks.data.forEach(track => {
            const existingTrack = trackSelectionsList.find(playlistTrack => playlistTrack.track.id === track.id);
            track.album = album
            if (!existingTrack) {
                trackSelectionsList.push({
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
            return trackSelectionsList.findIndex(x => x.track.id === t.track.id) + 1
        }

        const startIndex = trackSelectionsList.findIndex(x => x.track.album.id === album.id);

        function getIndex(t: TrackSelection) {
            const trackIndex = getTrackIndex(t);
            if (trackIndex === 0) {
                return getRawIndex(t) * 10000
            }
            return startIndex * 10000 + trackIndex;
        }

        console.log({startIndex})
        trackSelectionsList.sort((t1, t2) => {
            const pos1 = startIndex * 10000 + getIndex(t1)
            const pos2 = startIndex * 10000 + getIndex(t2)
            return pos1 - pos2
        })

        return trackSelectionsList
    })
}