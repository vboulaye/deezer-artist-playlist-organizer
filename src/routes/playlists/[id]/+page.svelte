<script context="module" lang="ts">
    import {enableBodyScroll, disableBodyScroll} from 'body-scroll-lock'
</script>

<script lang="ts">
    import {invalidateAll} from "$app/navigation";
    import AudioPlayer from "$lib/AudioPlayer.svelte";
    import type {DeezerArtist, DeezerTrack} from "$lib/DeezerApiModel";
    import {getDeezerArtistDiscography} from "$lib/DeezerApiQuery";
    import type {DeezerSearchParams} from "$lib/DeezerCall";
    import {callDeezer} from "$lib/DeezerCall";
    import DeezerAutocomplete from "$lib/html/DeezerAutocomplete.svelte";
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import Td from "$lib/html/Td.svelte";
    import type {PaginatedResult} from "$lib/PaginationUtils";
    import type {AutocompleteOption} from '@skeletonlabs/skeleton';
    import {getToastStore, Paginator, Ratings, SlideToggle} from '@skeletonlabs/skeleton';

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
    import ArtistSelectionComponent from "./ArtistSelectionComponent.svelte";
    import type {TrackSelection} from "./trackSelection";
    import {addAlbumTracks, addArtistTracks, removeAlbumTracks, removeArtistTracks} from "./trackSelection";
    import TrackSelectionComponent from "./TrackSelectionComponent.svelte";
    import {sortable} from 'svelte-agnostic-draggable'

    import mapTouchToMouseFor from 'svelte-touch-to-mouse'

    mapTouchToMouseFor('.sortable > tr')

    const toastStore = getToastStore();

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

    interface PlaylistArtistsSort {
        ascending: boolean
        orderBy: "trackCount" | "alphabetical"
    }

    const playlistArtistsSort: PlaylistArtistsSort = {
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
        playlistArtists.update(playlistArtists => {
            const direction = playlistArtistsSort.ascending ? 1 : -1;


            type Comparison = (a1: DeezerArtist, a2: DeezerArtist) => number
            const compareTrackCount = (a1: DeezerArtist, a2: DeezerArtist) => (getTrackCount(a1.id) - getTrackCount(a2.id))
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
        })
    }

    async function savePlaylist() {
        const searchParams: DeezerSearchParams = {
            request_method: "POST",
        };
        if (data.playlist.title) {
            searchParams.title = data.playlist.title
        }
        if (data.playlist.description) {
            searchParams.description = data.playlist.description
        }
        if (data.playlist.public !== undefined) {
            searchParams.public = data.playlist.public
        }

        try {
            const updateResult = await callDeezer({
                apiPath: `/playlist/${data.playlist.id}`,
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

        await saveTracks()
    }

    function window<T>(arr: T[], size: number) {
        const groupedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            groupedArray.push(arr.slice(i, i + size));
        }
        return groupedArray;
    }

    interface UpdateTracksProgress {
        message: string
        value: number
        max: number
    }

    let updateTracksProgress = writable<UpdateTracksProgress | undefined>(undefined)

    async function updateTracks(trackIds: number[], requestMethod: "POST" | "DELETE", param: string) {
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
                apiPath: `/playlist/${data.playlist.id}/tracks`,
                searchParams: searchParams
            });
            console.log({updateResult})
            if (!updateResult) {
                throw new Error(`unable to send ${requestMethod} ${param}=${JSON.stringify(w)}`)
            }
        }
    }

    async function saveTracks() {

        try {
            const addedTrackIds = $trackSelections
                .filter(trackSelection => trackSelection.selected && !trackSelection.inPlaylist)
                .map(trackSelection => trackSelection.track.id)
            await updateTracks(addedTrackIds, "POST", "songs")

            const deletedTrackIds = $trackSelections
                .filter(trackSelection => !trackSelection.selected && trackSelection.inPlaylist)
                .map(trackSelection => trackSelection.track.id)
            await updateTracks(deletedTrackIds, "DELETE", "songs")

            if (addedTrackIds.length > 0) {
                const orderedTrackIds = $trackSelections
                    .filter(trackSelection => trackSelection.selected)
                    .map(trackSelection => trackSelection.track.id)
                await updateTracks(orderedTrackIds, "POST", "order")
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

    async function getAlternativeTrack(unreadableTrack: DeezerTrack): Promise<DeezerTrack | undefined> {
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

    async function relinkNonReadableTracks() {
        const trackSelectionsList: TrackSelection[] = get(trackSelections);
        const readableBefore = trackSelectionsList.filter(x => x.selected && x.track.readable).length;
        const unreadableTracks = trackSelectionsList.filter(x => x.selected && !x.track.readable);

        try {
            for (let i = 0; i < unreadableTracks.length; i++) {
                const trackSelection = unreadableTracks[i]
                updateTracksProgress.set({message: `trying to fix track ${i} / ${unreadableTracks.length}`, value: i, max: unreadableTracks.length})

                const unreadableTrack = trackSelection.track;
                const alternativeTrack = await getAlternativeTrack(unreadableTrack);
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
            trackSelections.set(trackSelectionsList)
        } finally {
            updateTracksProgress.set(undefined)
        }


    }

    function purgePlaylist() {
        trackSelections.update(trackSelectionsList => {
            const clearedSelections = trackSelectionsList
                .filter(trackSelection => trackSelection.selected || trackSelection.inPlaylist);
            toastStore.trigger({
                message: `Removed ${trackSelectionsList.length - clearedSelections.length} track(s) from the playlist`,
                timeout: 3000
            });
            return clearedSelections
        })
    }


    let debug = false


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

    function getTrackCount(artistId: number): number {
        return $trackSelections.filter(t => t.track.artist.id === artistId && t.selected).length
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


    function onSortableActivate(e) {
        console.log('Sortable was activated', e);
        disableBodyScroll(document.body)
    }

    function onSortableDeactivate(e) {
        console.log('Sortable was deactivated', e);
        enableBodyScroll(document.body)
    }

    function onSortableReceive(e) {
        console.log('list element was added', e)
    }

    function onSortableChange(e) {
        console.log('sort order was changed', e)


    }

    function onSortableUpdate(e) {
        console.log($trackSelections.map(x => x.track.title_short))
        console.log(paginatedSource.map(x => x.track.title_short))
        console.log('list onSortableUpdate', e)
        const movedItem = paginatedSource[e.detail.previousIndex];
        console.log({movedItem, paginatedSource, idx: e.detail.previousIndex})
        trackSelections.update($trackSelections => {
            console.log($trackSelections.map(x => x.track.title_short))
            $trackSelections.splice($trackSelections.indexOf(movedItem), 1)
            console.log($trackSelections.map(x => x.track.title_short))
            // if (e.detail.newIndex > 0) {
            const previousItem = paginatedSource[e.detail.newIndex];
            console.log({previousItem, idx: e.detail.newIndex, paginatedSource})
            $trackSelections.splice($trackSelections.indexOf(previousItem), 0, movedItem)
            // } else {
            //     const nextItem = paginatedSource[1];
            //     console.log({nextItem})
            //     $trackSelections.splice($trackSelections.indexOf(nextItem), 0, movedItem)
            // }
            console.log($trackSelections.map(x => x.track.title_short))
            return $trackSelections
        })
        console.log(paginatedSource.map(x => x.track.title_short))

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
                    {@const trackCount=getTrackCount(topArtist.id)}
                    <li>
                    <span class="flex flex-row justify-between w-full items-center gap-x-2">
                        <a href={topArtist.link} title="open artist in Deezer web interface">
                              <HorizontalSpan>
                                <img src={topArtist.picture_small} alt="{topArtist.name}"/>
                                <span> {topArtist.name}</span>
                                   <small title="artist has {trackCount} tracks in the playlist ">(#{trackCount})</small>
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
            <button class="btn variant-filled-primary" on:click|preventDefault={savePlaylist}>
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

            <!--        <a href="#showDebug" on:click={()=>debug=!debug}>{debug ? 'hide debug' : 'show debug'}</a>-->

        </div>
    </svelte:fragment>

    <form class="mb-10 space-y-2">

        <div class="grid grid-cols-6">
            <div class="col-span-5">
                <label class="label">
                    <span>Title</span>
                    <input class="input" type="text" placeholder="title" bind:value={data.playlist.title}/>
                </label>
            </div>
            <div>
                <SlideToggle name="slider-label" bind:checked={data.playlist.public}>
                    {#if data.playlist.public}Public{:else }Private{/if} playlist
                </SlideToggle>
            </div>
        </div>


        <label class="label">
            <span>Description</span>
            <textarea class="textarea" rows="4" placeholder="description" bind:value={data.playlist.description}/>
        </label>

    </form>

    <span class="table-container">
            <table class="table table-compact my-4">
                <thead>
                <tr>
                    <td colspan="3">
                        <span>{$trackSelections?.filter(x => x.selected).length} Tracks ({data.playlist.tracks.data.length}
                            in playlist)</span>
                    </td>
                    <td colspan="4"><input bind:value={search} class="input" title="Input (search)" type="search" placeholder="Search..."/></td>
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
                <tbody use:sortable={{cursor:'grabbing',handle:".sortHandle"}} class="sortable"
                       on:sortable:activate={onSortableActivate}
                       on:sortable:deactivate={onSortableDeactivate}
                       on:sortable:receive={onSortableReceive}
                       on:sortable:update={onSortableUpdate}
                       on:sortable:change={onSortableChange}
                >
                {#each paginatedSource as trackSelection(trackSelection.track.id)}
                    {@const row=trackSelection.track}
                    <tr class={computeRowClass(trackSelection)}
                        class:!text-red-500={!row.readable}
                    >
                        <Td>
                            <input type="checkbox" class="checkbox" bind:checked={trackSelection.selected}/>
                        </Td>
                        <Td><span class="sortHandle">{trackSelection.track.id}</span></Td>
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