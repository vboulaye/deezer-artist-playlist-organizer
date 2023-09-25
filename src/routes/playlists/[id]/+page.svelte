<script lang="ts">
    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import {getToastStore, Tab, TabGroup} from '@skeletonlabs/skeleton';
    import {get, writable} from "svelte/store";
    import PlaylistApplicationShell from "../PlaylistApplicationShell.svelte";
    import type {PageData} from "./$types";
    import {relinkNonReadableTrackSelections} from "./alternativeTrackGetter";
    import ArtistsFinder from "./ArtistsFinder.svelte";
    import PlaylistArtists from "./PlaylistArtists.svelte";
    import PlaylistCleanButton from "./PlaylistCleanButton.svelte";
    import PlaylistInfo from "./PlaylistInfo.svelte";
    import PlaylistRelinkButton from "./PlaylistRelinkButton.svelte";
    import PlaylistSaveButton from "./PlaylistSaveButton.svelte";
    import PlaylistTracks from "./PlaylistTracks.svelte";
    import {savePlaylist} from "./playlistUpdater";
    import ProgressBar from "./ProgressBar.svelte";
    import type {TrackSelection} from "./trackSelection";
    import {addArtistTracks, purgePlaylistTrackSelections} from "./trackSelection";
    import type {UpdateTracksProgress} from "./updateTracksProgress";

    const toastStore = getToastStore();

    const updateTracksProgress = writable<UpdateTracksProgress | undefined>(undefined)

    export let data: PageData

    const playlistArtists = writable<DeezerArtist[]>([])
    $: {
        playlistArtists.set(data.topArtists)
    }

    const trackSelections = writable<TrackSelection[]>([])
    $: {
        const newTrackSelections = data.playlist.tracks.data
            .map(track => ({track, inPlaylist: true, selected: true}));
        trackSelections.set(newTrackSelections)
    }

    async function relinkNonReadableTracks() {
        try {
            const trackSelectionsList: TrackSelection[] = get(trackSelections);
            await relinkNonReadableTrackSelections(trackSelectionsList, toastStore, updateTracksProgress);
            trackSelections.set(trackSelectionsList)
        } finally {
            updateTracksProgress.set(undefined)
        }
    }

    function purgePlaylist() {
        trackSelections.update(trackSelectionsList => purgePlaylistTrackSelections(trackSelectionsList, toastStore))
    }


    function addArtist(artist: DeezerArtist) {
        if ($trackSelections.length === 0) {
            data.playlist.title = artist.name + " - Full Discography"
        }
        addArtistTracks(artist.id, trackSelections)
    }

    enum TabIndex {
        DESCRIPTION,
        TRACKS,
        PLAYLIST_ARTISTS,
        SEARCH_ARTISTS,
    }

    let tabIndex: TabIndex = TabIndex.TRACKS
</script>


<PlaylistApplicationShell>


    <svelte:fragment slot="pageHeader">

        <div class="btn-group variant-filled">
            <PlaylistSaveButton
                    on:click={()=>savePlaylist(data.playlist, $trackSelections, toastStore, updateTracksProgress)}/>

            <PlaylistRelinkButton on:click={relinkNonReadableTracks}
                                  disabled={$trackSelections.filter(x=>x.selected && !x.track.readable).length===0}/>

            <PlaylistCleanButton on:click={purgePlaylist}
                                 disabled={$trackSelections.filter(x=>!x.selected && !x.inPlaylist).length===0}/>
        </div>


        <ProgressBar {updateTracksProgress}/>
    </svelte:fragment>

    <TabGroup>
        <Tab bind:group={tabIndex} name="tabTracks" value={TabIndex.TRACKS}>tracks</Tab>
        <Tab bind:group={tabIndex} name="tabMain" value={TabIndex.DESCRIPTION}>
            <!--            <svelte:fragment slot="lead">(icon)</svelte:fragment>-->
            description
        </Tab>
        <Tab bind:group={tabIndex} name="tabPlaylistArtists" value={TabIndex.PLAYLIST_ARTISTS}>playlist artists</Tab>
        <Tab bind:group={tabIndex} name="tabSearchArtists" value={TabIndex.SEARCH_ARTISTS}>search new artists</Tab>
        <!-- Tab Panels --->
        <svelte:fragment slot="panel">
            {#if tabIndex === TabIndex.DESCRIPTION}
                <PlaylistInfo playlist={data.playlist}/>
            {:else if tabIndex === TabIndex.TRACKS}
                <PlaylistTracks {trackSelections} artists={$playlistArtists}/>
            {:else if tabIndex === TabIndex.PLAYLIST_ARTISTS}
                <p><i>
                    you can add/remove all tracks from a playlist artist from here
                </i></p>
                <PlaylistArtists {playlistArtists} {trackSelections}/>
            {:else if tabIndex === TabIndex.SEARCH_ARTISTS}
                <p class="my-4"><i>
                    you can add all tracks from a new artist from here
                </i></p>
                <ArtistsFinder on:artistSelection={e=> addArtist(e.detail)}/>
            {/if}
        </svelte:fragment>
    </TabGroup>


</PlaylistApplicationShell>

<style>

    :global(.h-100vh) {
        height: 100vh
    }

</style>