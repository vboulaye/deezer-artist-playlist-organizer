import type {DeezerArtist} from "$lib/DeezerApiModel";
import {getTrackCount} from "./trackSelection";
import type {TrackSelection} from "./trackSelection";

export interface PlaylistArtistsSort {
    ascending: boolean
    orderBy: "trackCount" | "alphabetical"
}

export function sortArtistsWithNewSort(
    playlistArtists: DeezerArtist[],
    playlistArtistsSort: PlaylistArtistsSort,
    trackSelections: TrackSelection[],
) {

    const direction = playlistArtistsSort.ascending ? 1 : -1;


    type Comparison = (a1: DeezerArtist, a2: DeezerArtist) => number
    const compareTrackCount = (a1: DeezerArtist, a2: DeezerArtist) => (getTrackCount(a1.id, trackSelections) - getTrackCount(a2.id, trackSelections))
    const compareName = (a1: DeezerArtist, a2: DeezerArtist) => (a1.name.localeCompare(a2.name))

    const compare = (main: Comparison, second: Comparison) => (a1: DeezerArtist, a2: DeezerArtist) => {
        const mainCompare = main(a1, a2);
        if (mainCompare === 0) {
            return second(a1, a2);
        }
        return mainCompare
    }

    const deezerArtists = playlistArtists.sort((a1, a2) => {
        switch (playlistArtistsSort.orderBy) {
            case "trackCount":
                return direction * compare(compareTrackCount, compareName)(a1, a2)
            case "alphabetical":
                return direction * compare(compareName, compareTrackCount,)(a1, a2)
        }
    });
    return deezerArtists
}
