import {invalidateAll} from "$app/navigation";
import type {DeezerPlaylistDetails} from "$lib/DeezerApiModel";
import {callDeezer} from "$lib/DeezerCall";
import type {DeezerSearchParams} from "$lib/DeezerCall";
import type {ToastStore} from "@skeletonlabs/skeleton";
import type {Writable} from "svelte/store";
import type {TrackSelection} from "./trackSelection";
import type {UpdateTracksProgress} from "./updateTracksProgress";

export async function savePlaylist(
    playlist: DeezerPlaylistDetails,
    trackSelections: TrackSelection[],
    toastStore: ToastStore,
    updateTracksProgress: Writable<UpdateTracksProgress| undefined>,
) {
    const searchParams: DeezerSearchParams = {
        request_method: "POST",
    };
    if (playlist.title) {
        searchParams.title = playlist.title
    }
    if (playlist.description) {
        searchParams.description = playlist.description
    }
    if (playlist.public !== undefined) {
        searchParams.public = playlist.public
    }

    try {
        const updateResult = await callDeezer({
            apiPath: `/playlist/${playlist.id}`,
            searchParams: searchParams
        });

        toastStore.trigger({
            message: `Updated playlist: ${updateResult ? "OK" : "KO"}`,
            timeout: 3000
        });

    } catch (e) {
        toastStore.trigger({
            message: `Updated playlist: error ${e}`,
            timeout: 3000
        });
    }

    await saveTracks(playlist, trackSelections, toastStore, updateTracksProgress)
}


async function saveTracks(
    playlist: DeezerPlaylistDetails,
    trackSelections: TrackSelection[],
    toastStore: ToastStore,
    updateTracksProgress: Writable<UpdateTracksProgress| undefined>,
) {

    try {
        const addedTrackIds = trackSelections
            .filter(trackSelection => trackSelection.selected && !trackSelection.inPlaylist)
            .map(trackSelection => trackSelection.track.id)
        await updateTracks(playlist, addedTrackIds, "POST", "songs", updateTracksProgress)

        const deletedTrackIds = trackSelections
            .filter(trackSelection => !trackSelection.selected && trackSelection.inPlaylist)
            .map(trackSelection => trackSelection.track.id)
        await updateTracks(playlist, deletedTrackIds, "DELETE", "songs", updateTracksProgress)

        if (addedTrackIds.length > 0) {
            const orderedTrackIds = trackSelections
                .filter(trackSelection => trackSelection.selected)
                .map(trackSelection => trackSelection.track.id)
            await updateTracks(playlist, orderedTrackIds, "POST", "order", updateTracksProgress)
        }

        updateTracksProgress.set(undefined)

        if (addedTrackIds.length || deletedTrackIds.length) {
            const refreshToastId = toastStore.trigger({
                message: `Updated playlist tracks, refreshing playlist data`,
            });
            await invalidateAll()
            toastStore.close(refreshToastId)
        }
    } catch (e) {
        toastStore.trigger({
            message: `Updated playlist tracks: error ${e}`,
            timeout: 3000
        });
    } finally {
        updateTracksProgress.set(undefined)
    }
}


async function updateTracks(
    playlist: DeezerPlaylistDetails,
    trackIds: number[],
    requestMethod: "POST" | "DELETE",
    param: string,
    updateTracksProgress: Writable<UpdateTracksProgress| undefined>,
) {
    if (!trackIds.length) {
        return
    }
    updateTracksProgress.set({message: `sending 0/${trackIds.length} ${requestMethod} ${param} `, value: 0, max: trackIds.length})
    let count = 0
    const windowSize = 100;
    for (const w of window(trackIds, windowSize)) {
        count += windowSize
        updateTracksProgress.set({message: `sending ${count} / ${trackIds.length} ${requestMethod} ${param} `, value: count, max: trackIds.length})
        console.log(`sending ${requestMethod} ${param}=${JSON.stringify(w)}`)
        const searchParams: DeezerSearchParams = {
            request_method: requestMethod,
        };
        searchParams[param] = w.join(',')
        const updateResult = await callDeezer({
            apiPath: `/playlist/${playlist.id}/tracks`,
            searchParams: searchParams
        });
        console.log({updateResult})
        if (!updateResult) {
            throw new Error(`unable to send ${requestMethod} ${param}=${JSON.stringify(w)}`)
        }
    }
}


function window<T>(arr: T[], size: number) {
    const groupedArray = [];
    for (let i = 0; i < arr.length; i += size) {
        groupedArray.push(arr.slice(i, i + size));
    }
    return groupedArray;
}
