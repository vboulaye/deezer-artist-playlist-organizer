<script lang="ts">
    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import {getToastStore, Tab, TabGroup} from '@skeletonlabs/skeleton';
    import {onDestroy, onMount} from "svelte";
    import {get, writable} from "svelte/store";
    import ClearPlaylistIcon from '~icons/ph/backspace-bold';

    import IconSave from '~icons/ph/cloud-check-bold'
    import RelinkTracksIcon from '~icons/ph/link-bold';
    import {getToolbarStore, type ToolbarLink} from "../../contextKeys";
    import PlaylistApplicationShell from "../PlaylistApplicationShell.svelte";
    import type {PageData} from "./$types";
    import {relinkNonReadableTrackSelections} from "./alternativeTrackGetter";
    import ArtistsFinder from "./ArtistsFinder.svelte";
    import PlaylistArtists from "./PlaylistArtists.svelte";
    import PlaylistInfo from "./PlaylistInfo.svelte";
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
        playlistArtists.update(artists => {
            const existingArtistIndex = artists.findIndex(a => a.id === artist.id);
            if (existingArtistIndex < 0) {
                artists.push(artist)
            }
            return artists
        })
        addArtistTracks(artist, trackSelections, toastStore)
    }

    const TabIndex = {
        DESCRIPTION:0,
        TRACKS:1,
        PLAYLIST_ARTISTS:2,
        SEARCH_ARTISTS:3,
    }

    let tabIndex = TabIndex.TRACKS

    const toolbarStore = getToolbarStore();

    //prepare the list of action icons to add to the main toolbar
    const playlistIcons:ToolbarLink[] = [
        {
            onclick: () => savePlaylist(data.playlist, $trackSelections, toastStore, updateTracksProgress),
            title: "Update playlist",
            icon: IconSave,
        },
        {
            onclick: () => relinkNonReadableTracks(),
            title: "Fix missing tracks",
            icon: RelinkTracksIcon,
            disabled: () => $trackSelections.filter(x => x.selected && !x.track.readable).length === 0
        },
        {
            onclick: () => purgePlaylist(),
            title: "Clear deselected tracks",
            icon: ClearPlaylistIcon,
            disabled: () => $trackSelections.filter(x => !x.selected && !x.inPlaylist).length === 0
        },
    ]

    // triggers a toolbar update on selection changes
    const unsubscribeToolbarUpdate = trackSelections.subscribe(() => toolbarStore.update(toolbar => toolbar));

    onMount(() => {
        toolbarStore.update(toolbar => [...toolbar, ...playlistIcons,])
        if (!data.playlist.tracks.data.length) {
            tabIndex = TabIndex.SEARCH_ARTISTS
        }
    })

    onDestroy(() => {
        toolbarStore.update(toolbarIcons => toolbarIcons.filter(toolbarIcon => !playlistIcons.includes(toolbarIcon)))
        unsubscribeToolbarUpdate()
    })

</script>


<PlaylistApplicationShell>


    <svelte:fragment slot="pageHeader">
        <ProgressBar {updateTracksProgress}/>
    </svelte:fragment>

    <span class:opacity-50={$updateTracksProgress}>
        <span class="h3">
            {data.playlist.title}
        </span>
        <TabGroup>
            <Tab bind:group={tabIndex} name="tabTracks" value={TabIndex.TRACKS}>tracks</Tab>
            <Tab bind:group={tabIndex} name="tabMain" value={TabIndex.DESCRIPTION}>
                <!--            <svelte:fragment slot="lead">(icon)</svelte:fragment>-->
                details
            </Tab>
            <Tab bind:group={tabIndex} name="tabPlaylistArtists"
                 value={TabIndex.PLAYLIST_ARTISTS}>playlist artists</Tab>
            <Tab bind:group={tabIndex} name="tabSearchArtists" value={TabIndex.SEARCH_ARTISTS}>search new artists</Tab>
            <!-- Tab Panels --->
            <svelte:fragment slot="panel">
                {#if tabIndex === TabIndex.DESCRIPTION}
                    <PlaylistInfo playlist={data.playlist}/>
                {:else if tabIndex === TabIndex.TRACKS}
                    <PlaylistTracks {trackSelections} artists={$playlistArtists} {toastStore} />
                {:else if tabIndex === TabIndex.PLAYLIST_ARTISTS}
                    <p><i>
                        you can add/remove all tracks from a playlist artist from here
                    </i></p>
                    <PlaylistArtists {playlistArtists} {trackSelections} {toastStore}/>
                {:else if tabIndex === TabIndex.SEARCH_ARTISTS}
                    <p class="my-4"><i>
                        you can add all tracks from a new artist from here
                    </i></p>
                    <ArtistsFinder on:artistSelection={e=> addArtist(e.detail)}/>
                {/if}
            </svelte:fragment>
        </TabGroup>
    </span>

</PlaylistApplicationShell>

<style>

</style>