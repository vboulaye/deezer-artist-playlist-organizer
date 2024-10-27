<script lang="ts">

    import type {DeezerArtist, DeezerPlaylistDetails} from "$lib/DeezerApiModel";
    import {getToastStore, Tab, TabGroup} from '@skeletonlabs/skeleton';
    import {onDestroy, onMount} from "svelte";
    import {writable} from "svelte/store";
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
    import {addArtistTracks, purgePlaylistTrackSelections} from "./trackSelection";
    import type {UpdateTracksProgress} from "./updateTracksProgress";
    import {playlistState} from "./playlistState.svelte";

    const toastStore = getToastStore();

    const updateTracksProgress = writable<UpdateTracksProgress | undefined>(undefined)

    interface Props {
        data: PageData;
    }

    let {data}: Props = $props();

    const playlistArtists = writable<DeezerArtist[]>([])
    $effect(() => {
        playlistArtists.set(data.topArtists)
    });

    function updatePlaylist(playlist: DeezerPlaylistDetails) {
        playlistState.isUpdatable = data.currentUser?.id === playlist?.creator?.id
        playlistState.playlist = playlist
        playlistState.trackSelections = playlist.tracks.data
            .map(track => ({track, inPlaylist: true, selected: true}))
    }

    $effect(() => {
        updatePlaylist(data.playlist)
    })

    async function relinkNonReadableTracks() {
        try {
            await relinkNonReadableTrackSelections(playlistState.trackSelections, toastStore, updateTracksProgress);
        } finally {
            updateTracksProgress.set(undefined)
        }
    }

    function purgePlaylist() {
        purgePlaylistTrackSelections(playlistState.trackSelections, toastStore)
    }


    function addArtist(artist: DeezerArtist) {
        if (playlistState.trackSelections.length === 0 && playlistState.playlist) {
            playlistState.playlist.title = artist.name + " - Full Discography"
        }
        playlistArtists.update(artists => {
            const existingArtistIndex = artists.findIndex(a => a.id === artist.id);
            if (existingArtistIndex < 0) {
                artists.push(artist)
            }
            return artists
        })
        addArtistTracks(artist, playlistState.trackSelections, toastStore)
    }

    const TabIndex = {
        DESCRIPTION: 0,
        TRACKS: 1,
        PLAYLIST_ARTISTS: 2,
        SEARCH_ARTISTS: 3,
    }

    let tabIndex = $state(TabIndex.TRACKS)

    const toolbarStore = getToolbarStore();

    //prepare the list of action icons to add to the main toolbar
    const playlistIcons: ToolbarLink[] = [
        {
            onclick: () => savePlaylist(playlistState.playlist, playlistState.trackSelections, toastStore, updateTracksProgress),
            title: "Update playlist",
            icon: IconSave,
        },
        {
            onclick: () => relinkNonReadableTracks(),
            title: "Fix missing tracks",
            icon: RelinkTracksIcon,
            disabled: () => playlistState.trackSelections.filter(x => x.selected && !x.track.readable).length === 0
        },
        {
            onclick: () => purgePlaylist(),
            title: "Clear deselected tracks",
            icon: ClearPlaylistIcon,
            disabled: () => playlistState.trackSelections.filter(x => !x.selected && !x.inPlaylist).length === 0
        },
    ]

    // triggers a toolbar update on selection changes
    // const unsubscribeToolbarUpdate = playlistState.trackSelections.subscribe(() => toolbarStore.update(toolbar => toolbar));

    $effect(() => {
        console.log("changes", playlistState.trackSelections.length)
        toolbarStore.update(toolbar => toolbar)
    })


    onMount(() => {
        if (playlistState.isUpdatable) {
            toolbarStore.update(toolbar => [...toolbar, ...playlistIcons,])
        }
        if (!playlistState.playlist?.tracks.data.length) {
            tabIndex = TabIndex.SEARCH_ARTISTS
        }
    })


    onDestroy(() => {
        toolbarStore.update(toolbarIcons => toolbarIcons.filter(toolbarIcon => !playlistIcons.includes(toolbarIcon)))
        // unsubscribeToolbarUpdate()
    })

</script>


{#if playlistState.playlist}

    <PlaylistApplicationShell>

        {#snippet pageHeader()}
            <ProgressBar {updateTracksProgress}/>
        {/snippet}

        <span class:opacity-50={$updateTracksProgress}>
        <span class="h3">
            {playlistState.playlist.title}
        </span>
        <TabGroup>
            <Tab bind:group={tabIndex} name="tabTracks" value={TabIndex.TRACKS}>tracks</Tab>
            <Tab bind:group={tabIndex} name="tabMain" value={TabIndex.DESCRIPTION}>details</Tab>
            <Tab bind:group={tabIndex} name="tabPlaylistArtists"
                 value={TabIndex.PLAYLIST_ARTISTS}>playlist artists</Tab>
            {#if playlistState.isUpdatable}
                <Tab bind:group={tabIndex} name="tabSearchArtists"
                     value={TabIndex.SEARCH_ARTISTS}>search new artists</Tab>
            {/if}
            <!-- Tab Panels --->
            {#snippet panel()}

                    {#if tabIndex === TabIndex.DESCRIPTION}
                        <PlaylistInfo/>
                    {:else if tabIndex === TabIndex.TRACKS}
                        <PlaylistTracks artists={$playlistArtists}
                                        {toastStore}/>
                    {:else if tabIndex === TabIndex.PLAYLIST_ARTISTS}
                        <p><i>
                            you can add/remove all tracks from a playlist artist from here
                        </i></p>
                        <PlaylistArtists {playlistArtists} trackSelections={playlistState.trackSelections}
                                         {toastStore}/>
                    {:else if tabIndex === TabIndex.SEARCH_ARTISTS}
                        <p class="my-4"><i>
                            you can add all tracks from a new artist from here
                        </i></p>
                        <ArtistsFinder onArtistSelection={artist=> addArtist(artist)}/>
                    {/if}

            {/snippet}
        </TabGroup>
    </span>

    </PlaylistApplicationShell>
{/if}

<style>

</style>