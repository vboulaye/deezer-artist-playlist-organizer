import type {DeezerPlaylistDetails} from "$lib/DeezerApiModel";
import type {TrackSelection} from "./trackSelection";

export const playlistState: {
    playlist: DeezerPlaylistDetails | undefined;
    trackSelections: TrackSelection[],
    isUpdatable: boolean;
} = $state({
    playlist: undefined,
    isUpdatable: false,
    trackSelections: []
});