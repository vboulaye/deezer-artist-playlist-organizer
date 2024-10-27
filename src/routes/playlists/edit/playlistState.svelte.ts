import type {DeezerArtist, DeezerPlaylistDetails} from "$lib/DeezerApiModel";
import type {TrackSelection} from "./trackSelection";

export const playlistState: {
    playlist: DeezerPlaylistDetails | undefined;
    trackSelections: TrackSelection[],
    playlistArtists: DeezerArtist[],
    isUpdatable: boolean;
} = $state({
    playlist: undefined,
    isUpdatable: false,
    trackSelections: [],
    playlistArtists: [],
});