<script lang="ts">
    import AudioPlayer from "$lib/AudioPlayer.svelte";
    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import Td from "$lib/html/Td.svelte";
    import {getToastStore, Paginator, Ratings} from '@skeletonlabs/skeleton';

    import humanizeDuration from "humanize-duration";
    import {get, writable} from "svelte/store";
    import ClearPlaylistIcon from '~icons/ph/backspace-bold';
    import IconSave from '~icons/ph/cloud-check-bold'
    import RelinkTracksIcon from '~icons/ph/link-bold';
    import IconStarEmpty from '~icons/ph/star-bold';
    import IconStarHalf from '~icons/ph/star-duotone';
    import IconStarFull from '~icons/ph/star-fill';
    import PlaylistApplicationShell from "../PlaylistApplicationShell.svelte";
    import type {PageData} from "./$types";
    import {relinkNonReadableTrackSelections} from "./alternativeTrackGetter";
    import ArtistsFinder from "./ArtistsFinder.svelte";
    import PlaylistInfo from "./PlaylistInfo.svelte";
    import {savePlaylist} from "./playlistUpdater";
    import type {TrackSelection} from "./trackSelection";
    import {
        addAlbumTracks,
        addArtistTracks,
        purgePlaylistTrackSelections,
        removeAlbumTracks,
        removeArtistTracks
    } from "./trackSelection";
    import TrackSelectionComponent from "./TrackSelectionComponent.svelte";
    import type {UpdateTracksProgress} from "./updateTracksProgress";
    import PlaylistArtists from "./PlaylistArtists.svelte";

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


    function computeRowClass(trackSelection: TrackSelection): string {
        if (!trackSelection.inPlaylist && trackSelection.selected) {
            return '!text-lime-500'
        }
        if (trackSelection.inPlaylist && !trackSelection.selected) {
            return '!line-through'
        }
        return ""
    }


    let tracksPage = {
        page: 0,
        limit: 10,
        size: 10,
        amounts: [10, 20, 50, 100],
    };

    $: {
        tracksPage.size = $trackSelections.length
    }
    let search = ""
    $: paginatedSource = $trackSelections
        .filter(x => !search || JSON.stringify(x.track).toLowerCase().includes(search.toLowerCase()))
        .slice(
            tracksPage.page * tracksPage.limit,             // start
            tracksPage.page * tracksPage.limit + tracksPage.limit // end
        );

    $: maxRank = $trackSelections.reduce((pre, cur) => Math.max(pre, cur.track.rank), 0)

    function addArtist(artist: DeezerArtist) {
        if ($trackSelections.length === 0) {
            data.playlist.title = artist.name + " - Full Discography"
        }
        addArtistTracks(artist.id, trackSelections)
    }
</script>


<PlaylistApplicationShell>

    <svelte:fragment slot="sidebarLeft">
        <ArtistsFinder on:artistSelection={e=> addArtist(e.detail)}/>
        <PlaylistArtists {playlistArtists} {trackSelections}/>
    </svelte:fragment>

    <svelte:fragment slot="sidebarRight">
        <div class="flex flex-col gap-y-4 w-4/5">
            <h3>Save to Deezer</h3>
            <button class="btn variant-filled-primary"
                    on:click|preventDefault={()=>savePlaylist(data.playlist, $trackSelections, toastStore, updateTracksProgress)}>
                <IconSave/>
                <span>Update playlist</span>
            </button>

            {#if $updateTracksProgress}
                <span>{$updateTracksProgress.message}</span>
                <progress value={$updateTracksProgress.value} max={$updateTracksProgress.max}/>
            {/if}

            <h3>Prepare playlist</h3>
            <button class="btn variant-filled-tertiary" on:click|preventDefault={relinkNonReadableTracks}
                    disabled={$trackSelections.filter(x=>x.selected && !x.track.readable).length===0}
                    title="try to find an equivalent of tracks that are not readable anymore in deezer (colored in red in the table)">
                <RelinkTracksIcon/>
                <span>fix non readable tracks</span>
            </button>
            <button class="btn variant-filled-tertiary" on:click|preventDefault={purgePlaylist}
                    disabled={$trackSelections.filter(x=>!x.selected && !x.inPlaylist).length===0}
                    title="remove de-selected new tracks"
            >
                <ClearPlaylistIcon/>
                <span>remove de-selected tracks</span>
            </button>


        </div>
    </svelte:fragment>


    <PlaylistInfo playlist={data.playlist}/>

    <span class="table-container">
            <table class="table table-compact my-4">
                <thead>
                <tr>
                    <td colspan="3">
                        <span>{$trackSelections?.filter(x => x.selected).length}
                            Tracks ({data.playlist.tracks.data.length}
                            in playlist)</span>
                    </td>
                    <td colspan="4"><input bind:value={search} class="input" title="Input (search)" type="search"
                                           placeholder="Search..."/></td>
                </tr>
                <tr class="">
                    <th>
                        <input type="checkbox" class="checkbox"
                               checked={paginatedSource.filter(x=>x.selected).length===paginatedSource.length && paginatedSource.length>0}
                               indeterminate={paginatedSource.filter(x=>x.selected).length!==paginatedSource.length && paginatedSource.filter(x=>x.selected).length>0}
                               on:change={(e)=> {paginatedSource.forEach(x=>x.selected=e.target.checked); trackSelections.update(x=>x)}}
                        />
                    </th>
                    <th>Pos.</th>
                    <th class=".fitwidth">Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>rank</th>
                    <th>duration</th>
                </tr>
                </thead>
                <tbody>
                {#each paginatedSource as trackSelection, i}
                    {@const row=trackSelection.track}
                    <tr class={computeRowClass(trackSelection)}
                        class:!text-red-500={!row.readable}
                    >
                        <Td>
                            <input type="checkbox" class="checkbox" bind:checked={trackSelection.selected}/>
                        </Td>
                        <Td><span>{i + 1}</span></Td>
                        <Td justify="start">
                            <AudioPlayer src={row.preview} enabled={row.readable}/>
                            <a href={row.link} title="open track in Deezer web interface">
                                <span>{row.title}</span>
                            </a>
                        </Td>
                        <Td justify="start">
                            <TrackSelectionComponent
                                    addTitle="add all album titles to the playlist"
                                    removeTitle="deselect all album titles from the playlist"
                                    on:add={()=> addAlbumTracks(row.album, trackSelections)}
                                    on:remove={()=> removeAlbumTracks(row.album.id, trackSelections)}>
                               <a href="https://www.deezer.com/album/{row.album.id}"
                                  title="open album in Deezer web interface">
                                    <HorizontalSpan>
                                        <img src={row.album.cover_small} alt="album cover"/>
                                        <span>{row.album.title}</span>
                                    </HorizontalSpan>
                               </a>
                            </TrackSelectionComponent>
                        </Td>
                        <Td justify="start">
                           <TrackSelectionComponent
                                   addTitle="add all artist titles to the playlist"
                                   removeTitle="deselect all artist titles from the playlist"
                                   on:add={()=> addArtistTracks(row.artist.id, trackSelections)}
                                   on:remove={()=> removeArtistTracks(row.artist.id, trackSelections)}>
                                <a href={row.artist.link} title="open artist in Deezer web interface">
                                    <span> {row.artist.name}</span>
                                </a>
                            </TrackSelectionComponent>

                        </Td>

                        <Td title={row.rank}>
                            <Ratings value={5*row.rank/maxRank} max={5}>
                                <svelte:fragment slot="empty"><IconStarEmpty/></svelte:fragment>
                                <svelte:fragment slot="half"><IconStarHalf/></svelte:fragment>
                                <svelte:fragment slot="full"><IconStarFull/></svelte:fragment>
                            </Ratings>
                        </Td>
                        <Td>{humanizeDuration(row.duration * 1000, {units: ["m", "s"], largest: 2,})}
                            <span class="grow"></span>

                        </Td>
                    </tr>
                {/each}

                </tbody>
            </table>
            <Paginator
                    bind:settings={tracksPage}
                    showFirstLastButtons="{true}"
                    showPreviousNextButtons="{true}"
            />
        </span>

</PlaylistApplicationShell>

<style>

    :global(.h-100vh) {
        height: 100vh
    }

    .fitwidth {
        width: 1px;
        white-space: nowrap;
    }

</style>