<script lang="ts">
    import {invalidateAll} from "$app/navigation";
    import AudioPlayer from "$lib/AudioPlayer.svelte";
    import type {DeezerArtist, DeezerTrack} from "$lib/DeezerApiModel";
    import {getDeezerArtistDiscography} from "$lib/DeezerApiQuery";
    import type {DeezerSearchParams} from "$lib/DeezerCall";
    import {callDeezer} from "$lib/DeezerCall";
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import Td from "$lib/html/Td.svelte";
    import type {PaginatedResult} from "$lib/PaginationUtils";
    import type {AutocompleteOption} from '@skeletonlabs/skeleton';
    import {Autocomplete, toastStore} from '@skeletonlabs/skeleton';

    import humanizeDuration from "humanize-duration";
    import type {Writable} from "svelte/store";
    import {derived, get, writable} from "svelte/store";
    import IconDeezer from '~icons/jam/deezer-circle'
    import IconSave from '~icons/ph/cloud-check-bold'
    import RemoveIcon from '~icons/ph/minus-circle-bold';
    import AddIcon from '~icons/ph/plus-circle-bold';
    import SortAscendingIcon from '~icons/ph/sort-ascending-bold';
    import SortDescendingIcon from '~icons/ph/sort-descending-bold';
    import ClearPlaylistIcon from '~icons/ph/backspace-bold';
    import RelinkTracksIcon from '~icons/ph/link-bold';
    import PlaylistApplicationShell from "../PlaylistApplicationShell.svelte";
    import type {PageData} from "./$types";


    import {Paginator} from '@skeletonlabs/skeleton';


    export let data: PageData

    const playlistArtists = writable<DeezerArtist[]>([])

    $: {
        playlistArtists.set(data.topArtists)
    }


    interface TrackSelection {
        track: DeezerTrack
        inPlaylist: boolean
        selected: boolean
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
        if (data.playlist.public) {
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

    updateTracksProgress.subscribe(w => console.log(w))

    async function updateTracks(trackIds: number[], requestMethod: "POST" | "DELETE", param: string) {
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
            const selectedTrackIds = $trackSelections
                .filter(trackSelection => trackSelection.selected && !trackSelection.inPlaylist)
                .map(trackSelection => trackSelection.track.id)
            await updateTracks(selectedTrackIds, "POST", "songs")

            const deletedTrackIds = $trackSelections
                .filter(trackSelection => !trackSelection.selected && trackSelection.inPlaylist)
                .map(trackSelection => trackSelection.track.id)
            await updateTracks(deletedTrackIds, "DELETE", "songs")

            const orderedTrackIds = $trackSelections
                .filter(trackSelection => trackSelection.selected )
                .map(trackSelection => trackSelection.track.id)
            await updateTracks(orderedTrackIds, "POST", "order")

            toastStore.trigger({
                message: `Updated playlist tracks`,
                timeout: 3000
            });
            updateTracksProgress.set(undefined)

            await new Promise((next) => setTimeout(next, 1000))
            toastStore.trigger({
                message: `refresh`,
                timeout: 3000
            });
            await invalidateAll()

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
            });

        const comparisonOptions = {sensitivity: "base", ignorePunctuation: true, numeric: false, usage: "search"} as Intl.CollatorOptions;

        const matchingTracksByTitle = artistTracks
            .filter(track => track.title.localeCompare(unreadableTrack.title, undefined, comparisonOptions) === 0)


        switch (matchingTracksByTitle.length) {
            case 0:
                console.log("no match by title", {unreadableTrack})
                toastStore.trigger({
                    message: `Could not find matching track for '${unreadableTrack.title}' in album '${unreadableTrack.album.title}'`,
                    timeout: 3000
                });
                return undefined
            case 1:
                return matchingTracksByTitle[0]

            default: {
                const tracksByIsrc = Object.values(matchingTracksByTitle.reduce((acc, track) => {
                    acc[track.isrc] = track;
                    return acc
                }, {} as any));
                if (tracksByIsrc.length === 1) {
                    return tracksByIsrc[0]
                }
                const matchingTracksByTitleAndAlbum = matchingTracksByTitle
                    .filter(track => track.album.title.localeCompare(unreadableTrack.album.title, undefined, comparisonOptions) === 0)
                switch (matchingTracksByTitleAndAlbum.length) {
                    case 0:
                        console.log("no match by title and album", {unreadableTrack})
                        toastStore.trigger({
                            message: `Could not find matching track for '${unreadableTrack.title}' in album '${unreadableTrack.album.title}'`,
                            timeout: 3000
                        });
                        return undefined
                    case 1:
                        return matchingTracksByTitleAndAlbum[0]

                    default: {
                        const tracksByIsrc = Object.values(matchingTracksByTitleAndAlbum.reduce((acc, track) => {
                            acc[track.isrc] = track;
                            return acc
                        }, {} as any));
                        if (tracksByIsrc.length === 1) {
                            return tracksByIsrc[0]
                        }
                        console.log("multple match by title", {unreadableTrack, matchingTracksByTitleAndAlbum})

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
        const readableBefore = trackSelectionsList.filter(x => x.track.readable).length;
        const unreadable = trackSelectionsList.filter(x => !x.track.readable);
        for (const trackSelection of unreadable) {
            const unreadableTrack = trackSelection.track;
            const alternativeTrack = await getAlternativeTrack(unreadableTrack);
            if (alternativeTrack) {
                // trackSelection.track = alternativeTrack
                trackSelection.selected = false
                const insertionPoint = trackSelectionsList.indexOf(trackSelection);
                trackSelectionsList.splice(insertionPoint + 1, 0, {
                    selected: true,
                    inPlaylist: false,
                    track: alternativeTrack
                });
            }
        }
        const readableAfter = trackSelectionsList.filter(x => x.track.readable).length;
        toastStore.trigger({
            message: `Reattached ${readableAfter - readableBefore} track(s) to readable equivalents.<br/>(${trackSelectionsList.length - readableAfter} unreadable track remaining)`,
            timeout: 10000
        });
        trackSelections.set(trackSelectionsList)

    }

    function purgePlaylist() {
        trackSelections.update(trackSelectionsList => {
            const clearedSelections = trackSelectionsList
                .filter(trackSelection => trackSelection.selected);
            toastStore.trigger({
                message: `Removed ${trackSelectionsList.length - clearedSelections.length} track(s) from the playlist`,
                timeout: 3000
            });
            return clearedSelections
        })
    }


    let debug = false

    function removeArtistTracks(artistId: number) {
        trackSelections.update(trackSelectionsList => {
            trackSelectionsList
                .forEach(trackSelection => {
                    if (trackSelection.track.artist.id === artistId) {
                        trackSelection.selected = false
                    }
                })
            return trackSelectionsList
        })
    }

    async function addArtistTracks(artistId: number) {
        const albums = await getDeezerArtistDiscography(artistId);

        trackSelections.update(trackSelectionsList => {
            const allTracks = albums
                .sort((a1, a2) => a1.release_date.localeCompare(a2.release_date))
                .flatMap(album => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const {tracks: _, ...parentAlbum} = album
                    return album.tracks.map(track => ({...track, album: parentAlbum}));
                });

            allTracks.forEach(track => {
                const existingTrack = trackSelectionsList.find(playlistTrack => playlistTrack.track.id === track.id);
                if (!existingTrack) {
                    trackSelectionsList.push({
                        track,
                        inPlaylist: false,
                        selected: true,
                    })
                } else {
                    // update the existing track with the detailled album info
                    existingTrack.track.album = track.album
                }
            })

            function getIndex(t: TrackSelection): number {
                return allTracks.findIndex(x => x.id === t.track.id)
            }

            trackSelectionsList.sort((t1, t2) => {
                const pos1 = getIndex(t1)
                const pos2 = getIndex(t2)
                return pos1 - pos2
            })

            return trackSelectionsList
        })
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

    function onArtistSelection(event: CustomEvent<AutocompleteOption>) {
        const artistId = event.detail.value as number
        addArtistTracks(artistId)
    }

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
        offset: 0,
        limit: 20,
        size: 10,
        amounts: [10, 20, 50, 100],
    };

    $: {
        tracksPage.size = $trackSelections.length
    }

    $: paginatedSource = $trackSelections.slice(
        tracksPage.offset * tracksPage.limit,             // start
        tracksPage.offset * tracksPage.limit + tracksPage.limit // end
    );
</script>


<PlaylistApplicationShell>
    <svelte:fragment slot="sidebarLeft">

        <span class=" my-4">
            <span class="mb-2">
                <HorizontalSpan><h4>Search Artist </h4></HorizontalSpan>
            </span>

            <input class="input" type="search" name="demo" bind:value={$artistSearch} placeholder="Search..."/>
            <span class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto inline-block" tabindex="-1">
                <Autocomplete bind:input={$artistSearch} options={$artistsFound} on:selection={onArtistSelection}/>
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
                        <HorizontalSpan>
                            <img src={topArtist.picture_small} alt="{topArtist.name}"/>
                            <span>{topArtist.name}</span>
                            <small title="artist has {trackCount} tracks in the playlist ">(#{trackCount})</small>
                            <a href={topArtist.link} title="open artist in Deezer web interface">
                                <IconDeezer/>
                            </a>
                        </HorizontalSpan>
                        <HorizontalSpan>
                            <button class=""
                                    title="add all artist titles to the playlist"
                                    on:click={()=> addArtistTracks(topArtist.id)}><AddIcon/></button>
                            <button class=""
                                    class:text-gray-500={trackCount===0}
                                    title="deselect all artist titles from the playlist"
                                    on:click={()=> removeArtistTracks(topArtist.id)}><RemoveIcon/></button>
                        </HorizontalSpan>
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
                <span>Update playlist info</span>
            </button>

            <button class="btn variant-filled-secondary" on:click|preventDefault={saveTracks}>
                <IconSave/>
                <span>Update Tracks</span>
            </button>
            {#if $updateTracksProgress}
                <span>{$updateTracksProgress.message}</span>
                <progress value={$updateTracksProgress.value} max={$updateTracksProgress.max}/>
            {/if}

            <h3>Prepare playlist</h3>
            <button class="btn variant-filled-tertiary" on:click|preventDefault={relinkNonReadableTracks}
                    title="trye to find equivalent of tracks that are not readable anymore">
                <RelinkTracksIcon/>
                <span>retrieve non readable tracks</span>
            </button>
            <button class="btn variant-filled-tertiary" on:click|preventDefault={purgePlaylist}
                    title="clear de-selected tracks">
                <ClearPlaylistIcon/>
                <span>clear de-selected tracks</span>
            </button>

            <!--        <a href="#showDebug" on:click={()=>debug=!debug}>{debug ? 'hide debug' : 'show debug'}</a>-->

        </div>
    </svelte:fragment>

    <form class="mb-10 space-y-2">

        <label class="label">
            <span>Title</span>
            <input class="input" type="text" placeholder="title" bind:value={data.playlist.title}/>
        </label>

        <label class="label">
            <span>Description</span>
            <textarea class="textarea" rows="4" placeholder="description" bind:value={data.playlist.description}/>
        </label>
        <div class="flex place-content-start">
            <!--            <button class="btn variant-filled-primary" on:click|preventDefault={savePlaylist}>-->
            <!--                <IconSave/>-->
            <!--                <span>Update playlist info</span>-->
            <!--            </button>-->
        </div>
    </form>

    <div class="flex justify-between w-full items-center gap-x-2 my-4">

        <span>{$trackSelections?.filter(x => x.selected).length} Tracks ({data.playlist.tracks.data.length}
            in playlist)</span>
        <span>
<!--                <button class="btn variant-filled-secondary">-->
            <!--                    <IconSave/>-->
            <!--                    <span>Update Tracks</span>-->
            <!--                </button>-->
            <!--                <button class="btn variant-filled-tertiary" on:click|preventDefault={purgePlaylist} title="clear de-selected tracks">-->
            <!--                    <ClearPlaylistIcon/>-->
            <!--                    <span>clear</span>-->
            <!--                </button>-->
            </span>
    </div>
    <span class="table-container">
            <table class="table  my-4">
                <thead>
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
                            <a href="https://www.deezer.com/album/{row.album.id}"
                               title="open album in Deezer web interface">
                                <HorizontalSpan>
                                    <img src={row.album.cover_small} alt="album cover"/>
                                    <span>{row.album.title}</span>
                                </HorizontalSpan>
                            </a>
                        </Td>
                        <Td>

                            <HorizontalSpan>
                                <a href={row.artist.link} title="open artist in Deezer web interface">
                                    <span> {row.artist.name}</span>
                                </a>
                                <button class=" "
                                        title="add all artist titles to the playlist"
                                        on:click={()=> addArtistTracks(row.artist.id)}>
                                    <AddIcon/>
                                </button>
                                <button class=" "
                                        title="deselect all artist titles from the playlist"
                                        on:click={()=> removeArtistTracks(row.artist.id)}>
                                    <RemoveIcon/>
                                </button>
                            </HorizontalSpan>
                        </Td>

                        <Td>{row.rank}</Td>
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