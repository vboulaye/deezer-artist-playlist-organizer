<script lang="ts">
    import AudioPlayer from "$lib/AudioPlayer.svelte";
    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import {callDeezer} from "$lib/DeezerCall";
    import DeezerAutocomplete from "$lib/html/DeezerAutocomplete.svelte";
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import Td from "$lib/html/Td.svelte";
    import type {PaginatedResult} from "$lib/PaginationUtils";
    import type {AutocompleteOption} from '@skeletonlabs/skeleton';
    import {getToastStore, Paginator, Ratings} from '@skeletonlabs/skeleton';

    import humanizeDuration from "humanize-duration";
    import type {Writable} from "svelte/store";
    import {derived, get, writable} from "svelte/store";
    import ClearPlaylistIcon from '~icons/ph/backspace-bold';
    import IconSave from '~icons/ph/cloud-check-bold'
    import RelinkTracksIcon from '~icons/ph/link-bold';
    import RemoveIcon from '~icons/ph/minus-circle-bold';
    import AddIcon from '~icons/ph/plus-circle-bold';
    import SortAscendingIcon from '~icons/ph/sort-ascending-bold';
    import SortDescendingIcon from '~icons/ph/sort-descending-bold';
    import IconStarEmpty from '~icons/ph/star-bold';
    import IconStarHalf from '~icons/ph/star-duotone';
    import IconStarFull from '~icons/ph/star-fill';
    import PlaylistApplicationShell from "../PlaylistApplicationShell.svelte";
    import type {PageData} from "./$types";
    import {relinkNonReadableTrackSelections} from "./alternativeTrackGetter";
    import ArtistSelectionComponent from "./ArtistSelectionComponent.svelte";
    import type {PlaylistArtistsSort} from "./artistsSorter";
    import {sortArtistsWithNewSort} from "./artistsSorter";
    import PlaylistInfo from "./PlaylistInfo.svelte";
    import {savePlaylist} from "./playlistUpdater";
    import type {TrackSelection} from "./trackSelection";
    import {
        addAlbumTracks,
        addArtistTracks,
        getTrackCount, purgePlaylistTrackSelections,
        removeAlbumTracks,
        removeArtistTracks
    } from "./trackSelection";
    import TrackSelectionComponent from "./TrackSelectionComponent.svelte";
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

    export const playlistArtistsSort: PlaylistArtistsSort = {
        ascending: false,
        orderBy: "trackCount"
    }

    function sortArtists(newSort: Partial<PlaylistArtistsSort>) {
        if (newSort.ascending !== undefined) {
            playlistArtistsSort.ascending = newSort.ascending
        }
        if (newSort.orderBy !== undefined) {
            playlistArtistsSort.orderBy = newSort.orderBy
        }
        playlistArtists.update(playlistArtists => sortArtistsWithNewSort(playlistArtists, playlistArtistsSort, newSort, $trackSelections))
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

    let artistSearch = writable("")

    const artistsFound = derived<Writable<string>, AutocompleteOption[]>(artistSearch, ($artistSearch, set) => {
        if (!$artistSearch) {
            set([])
            return
        }
        callDeezer<PaginatedResult<DeezerArtist>>({
            apiPath: `/search/artist`,
            searchParams: {q: $artistSearch}
        }).then(searchResult => {
            const options = searchResult.data.map(artist => ({
                label: `<span class="flex justify-between w-full items-center">
<span class="flex items-center"> <img src="${artist.picture_small}" class="mx-2"/>${artist.name}</span>
 <button class="btn-icon btn-icon-sm variant-outline-tertiary" title="add all artist titles to the playlist">add</button></span>`,
                value: artist.id,
                meta: artist
            }));
            set(options)
        });
    })


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

        <span class=" my-4">
            <span class="mb-2">
                <HorizontalSpan><h4>Search Artist </h4></HorizontalSpan>
            </span>

            <input class="input" type="search" name="demo" bind:value={$artistSearch} placeholder="Search..."/>
            <span class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto inline-block" tabindex="-1">
                <DeezerAutocomplete bind:input={$artistSearch} options={$artistsFound}>
                    <svelte:fragment slot="optionButton" let:option={artistOption}>
                        <ArtistSelectionComponent artist={artistOption.meta}
                                                  on:click={()=>addArtist(artistOption.meta)}/>
                    </svelte:fragment>
                </DeezerAutocomplete>
            </span>

        </span>

        {#if $playlistArtists?.length > 0}
        <span class="flex justify-between w-full items-center gap-x-2 my-4">
            <HorizontalSpan><h4>Playlists Artists</h4></HorizontalSpan>
            <HorizontalSpan>
                {#if playlistArtistsSort.orderBy === "trackCount"}
                    <button on:click={()=> sortArtists({orderBy:"alphabetical"})}>
                        # tracks
                    </button>
                  {:else if playlistArtistsSort.orderBy === "alphabetical" }
                    <button on:click={()=> sortArtists({orderBy:"trackCount"})}>
                        alphabetical
                    </button>
                {/if}
                {#if playlistArtistsSort.ascending}
                    <button on:click={()=> sortArtists({ascending:false})}>
                        <SortAscendingIcon/>
                    </button>
                {:else}
                    <button on:click={()=> sortArtists({ascending:true})}>
                        <SortDescendingIcon/>
                    </button>
                {/if}
            </HorizontalSpan>
           </span>
            <ul class="list">
                {#each $playlistArtists as topArtist}
                    {@const trackCount=getTrackCount(topArtist.id, $trackSelections)}
                    <li>
                    <span class="flex flex-row justify-between w-full items-center gap-x-2">
                        <a href={topArtist.link} title="open artist in Deezer web interface">
                              <HorizontalSpan>
                                <img src={topArtist.picture_small} alt="{topArtist.name}"/>
                                <span> {topArtist.name}</span>
                                   <small title="artist has {trackCount} tracks in the playlist ">(#{trackCount}
                                       )</small>
                              </HorizontalSpan>
                        </a>
                        <div class="btn-group-vertical btn btn-sm gap-y-1">
                            <button class="!p-0 "
                                    title="add all artist titles to the playlist"
                                    on:click={()=> addArtistTracks(topArtist.id, trackSelections)}>
                                <AddIcon/>
                            </button>
                            <button class="!p-0"
                                    title="deselect all artist titles from the playlist"
                                    class:text-gray-500={trackCount===0}
                                    on:click={()=> removeArtistTracks(topArtist.id, trackSelections)}>
                                <RemoveIcon/>
                            </button>
                        </div>
                    </span>
                    </li>
                {/each}
            </ul>
        {/if}

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