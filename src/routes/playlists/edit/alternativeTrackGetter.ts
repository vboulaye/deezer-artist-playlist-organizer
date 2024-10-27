import type {DeezerTrack} from "$lib/DeezerApiModel";
import {getDeezerArtistDiscography} from "$lib/DeezerApiQuery";
import type {ToastStore} from "@skeletonlabs/skeleton";
import type {Writable} from "svelte/store";
import type {TrackSelection} from "./trackSelection";
import type {UpdateTracksProgress} from "./updateTracksProgress";


export async function relinkNonReadableTrackSelections(
    trackSelectionsList: TrackSelection[],
    toastStore: ToastStore,
    updateTracksProgress: Writable<UpdateTracksProgress | unknown>,
) {
    const readableBefore = trackSelectionsList.filter(x => x.selected && x.track.readable).length;
    const unreadableTracks = trackSelectionsList.filter(x => x.selected && !x.track.readable);

    for (let i = 0; i < unreadableTracks.length; i++) {
        const trackSelection = unreadableTracks[i]
        updateTracksProgress.set({message: `trying to fix track ${i} / ${unreadableTracks.length}`, value: i, max: unreadableTracks.length})

        const unreadableTrack = trackSelection.track;
        const alternativeTrack = await getAlternativeTrack(unreadableTrack, toastStore);
        if (alternativeTrack) {
            // trackSelection.track = alternativeTrack
            console.log("adding alternative to " + trackSelection.track.id + " : " + alternativeTrack.title)
            trackSelection.selected = false
            const insertionPoint = trackSelectionsList.indexOf(trackSelection);
            trackSelectionsList.splice(insertionPoint + 1, 0, {
                selected: true,
                inPlaylist: false,
                track: alternativeTrack
            });
        }
    }
    const readableAfter = trackSelectionsList.filter(x => x.selected && x.track.readable).length;
    toastStore.trigger({
        message: `Reattached ${readableAfter - readableBefore} track(s) to readable equivalents.<br/>(${trackSelectionsList.filter(x => x.selected).length - readableAfter} unreadable track remaining)`,
        timeout: 10000
    });
}

  async function getAlternativeTrack(unreadableTrack: DeezerTrack, toastStore: ToastStore): Promise<DeezerTrack | undefined> {


    const deezerArtistDiscography = await getDeezerArtistDiscography(unreadableTrack.artist.id);
    if (!deezerArtistDiscography) {
        toastStore.trigger({
            message: `Could not find artist ${unreadableTrack.artist.name}`,
            timeout: 3000
        });
        return undefined
    }


    const artistTracks = deezerArtistDiscography
        .flatMap(album => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {tracks: _, ...parentAlbum} = album
            return album.tracks
                .map(track => ({...track, album: parentAlbum}));
        })
        .filter(x => x.id !== unreadableTrack.id && x.readable);

    const comparisonOptions = {sensitivity: "base", ignorePunctuation: true, numeric: false, usage: "search"} as Intl.CollatorOptions;

    const matchingTracksByTitle = artistTracks
        .filter(track => track.title.localeCompare(unreadableTrack.title, undefined, comparisonOptions) === 0)


    switch (matchingTracksByTitle.length) {
        case 0:
            console.log("no match by title", {unreadableTrack})
            toastStore.trigger({
                message: `Could not find matching track for '${unreadableTrack.title}' in album '${unreadableTrack.album.title}' by '${unreadableTrack.artist.name}'`,
                timeout: 3000
            });
            return undefined
        case 1:
            return matchingTracksByTitle[0]

        default: {
            const tracksByIsrc = Object.values(matchingTracksByTitle.reduce((acc, track) => {
                acc[track.isrc] = track;
                return acc
            }, {} as { [k: string]: DeezerTrack }));
            if (tracksByIsrc.length === 1) {
                return tracksByIsrc[0]
            }
            const matchingTracksByTitleAndAlbum = matchingTracksByTitle
                .filter(track => track.album.title.localeCompare(unreadableTrack.album.title, undefined, comparisonOptions) === 0)
            switch (matchingTracksByTitleAndAlbum.length) {
                case 0:
                    console.log("no match by title and album", {unreadableTrack})
                    toastStore.trigger({
                        message: `Could not find matching track for '${unreadableTrack.title}' in album '${unreadableTrack.album.title}' by '${unreadableTrack.artist.name}'`,
                        timeout: 3000
                    });
                    return undefined
                case 1:
                    return matchingTracksByTitleAndAlbum[0]

                default: {
                    const tracksByIsrc = Object.values(matchingTracksByTitleAndAlbum.reduce((acc, track) => {
                        acc[track.isrc] = track;
                        return acc
                    }, {} as { [k: string]: DeezerTrack }));
                    if (tracksByIsrc.length === 1) {
                        return tracksByIsrc[0]
                    }
                    console.log("multiple match by title", {unreadableTrack, matchingTracksByTitleAndAlbum})

                    toastStore.trigger({
                        message: `Found multiple matching tracks for '${unreadableTrack.title}' in album '${unreadableTrack.album.title}' : ${matchingTracksByTitleAndAlbum.map(x => x.id)}`,
                        timeout: 3000
                    });
                    return undefined;

                }
            }
        }

    }

}
