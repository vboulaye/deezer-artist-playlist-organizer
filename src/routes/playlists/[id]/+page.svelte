<script lang="ts">
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
    import {derived, writable} from "svelte/store";
    import IconDeezer from '~icons/jam/deezer-circle'
    import IconSave from '~icons/ph/cloud-check-bold'
    import RemoveIcon from '~icons/ph/minus-circle-bold';
    import AddIcon from '~icons/ph/plus-circle-bold';
    import SortAscendingIcon from '~icons/ph/sort-ascending-bold';
    import SortDescendingIcon from '~icons/ph/sort-descending-bold';
    import PlaylistApplicationShell from "../PlaylistApplicationShell.svelte";
    import type {PageData} from "./$types";

    export let data: PageData

    const playlistArtists = writable(data.topArtists)

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

    interface TrackSelection {
        track: DeezerTrack
        inPlaylist: boolean
        selected: boolean
    }

    const trackSelections: Writable<TrackSelection[]> = writable(data.playlist.tracks.data.map(track => ({track, inPlaylist: true, selected: true})))

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
                const existingTrack = data.playlist.tracks.data.find(playlistTrack => playlistTrack.id === track.id);
                if (!existingTrack) {
                    trackSelectionsList.push({
                        track,
                        inPlaylist: false,
                        selected: true,
                    })
                } else {
                    existingTrack.album = track.album
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
        const artistId = event.detail.value
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

</script>


<PlaylistApplicationShell>
    <svelte:fragment slot="sidebarLeft">

        <span class=" my-4">
            <span class="mb-2">
                <HorizontalSpan><h4>Search Artist </h4></HorizontalSpan>
            </span>

            <input class="input" type="search" name="demo" bind:value={$artistSearch} placeholder="Search..."/>
            <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
                <Autocomplete bind:input={$artistSearch} options={$artistsFound} on:selection={onArtistSelection}/>
            </div>

        </span>

        <span class="flex justify-between w-full items-center space-x-2 my-4">
            <HorizontalSpan><h4>Playlists Artists             </h4></HorizontalSpan>
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
            {#each $playlistArtists as topArtist, i}
                {@const trackCount=getTrackCount(topArtist.id)}
                <li>
                    <span class="flex flex-row justify-between w-full items-center space-x-2">
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
                                    title="remove all artist titles to the playlist"
                                    on:click={()=> removeArtistTracks(topArtist.id)}><RemoveIcon/></button>
                        </HorizontalSpan>
                    </span>
                </li>
            {/each}
        </ul>


    </svelte:fragment>
    <svelte:fragment slot="sidebarRight">
        <div class="flex place-content-end">
            <button class="btn variant-filled-primary" on:click|preventDefault={savePlaylist}>
                <IconSave/>
                <span>Update playlist</span>
            </button>
        </div>
        <button class="btn variant-filled-secondary">
            <IconSave/>
            <span>Update Tracks</span>
        </button>
        <a href="#showDebug" on:click={()=>debug=!debug}>{debug ? 'hide debug' : 'show debug'}</a>
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

    </form>

    <label class="label">
        <div class="flex place-content-between">
            <span>Tracks ({data.playlist.tracks.data.length})</span>

            <span><!-- empty box to the right --></span>
        </div>
        <div class="table-container">
            <table class="table">
                <thead>
                <tr class="center">
                    <th><input type="checkbox" class="checkbox"/></th>
                    <th>Pos.</th>
                    <th class="w-1/3">Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>rank</th>
                    <th>duration</th>
                </tr>
                </thead>
                <tbody>
                {#each $trackSelections as trackSelection, i}
                    {@const row=trackSelection.track}
                    <tr class={computeRowClass(trackSelection)}
                        class:!text-red-500={!row.readable}
                    >
                        <Td><input type="checkbox" class="checkbox" bind:checked={trackSelection.selected}/></Td>
                        <Td><span>{i + 1}</span></Td>
                        <Td justify="start">
                            <span>{row.title}</span>
                            <a href={row.link} title="open track in Deezer web interface">
                                <IconDeezer/>
                            </a>

                        </Td>
                        <Td justify="start">
                            <img src={row.album.cover_small} alt="album cover"/>
                            <span class="m-2">{row.album.title}</span>
                            <a href="https://www.deezer.com/album/{row.album.id}"
                               title="open album in Deezer web interface">
                                <IconDeezer/>
                            </a>
                        </Td>
                        <td>

                            <HorizontalSpan>
                                <span class="m-2"> {row.artist.name}</span>
                                <a href={row.artist.link} title="open artist in Deezer web interface">
                                    <IconDeezer/>
                                </a>
                                <button class=" "
                                        title="add all artist titles to the playlist"
                                        on:click={()=> addArtistTracks(row.artist.id)}><AddIcon/></button>
                                <button class=" "
                                        title="remove all artist titles to the playlist"
                                        on:click={()=> removeArtistTracks(row.artist.id)}><RemoveIcon/></button>
                            </HorizontalSpan>
                        </td>

                        <Td>{row.album.release_date}</Td>
                        <Td>{humanizeDuration(row.duration * 1000, {units: ["m", "s"], largest: 2,})}
                            <span class="grow"></span>
                            <AudioPlayer src={row.preview} enabled={row.readable}/>
                        </Td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>

    </label>


    <pre id="showDebug">
            { JSON.stringify({topArtists: $playlistArtists}, null, 2)}
        {#if debug}
                { JSON.stringify({playlist: data.playlist}, null, 2)}
            {/if}
        </pre>
</PlaylistApplicationShell>

<style>
    tr.center > td, tr.center > th {
        text-align: left;
        vertical-align: middle;
    }

    :global(.h-100vh) {
        height: 100vh
    }

    :global(.w-100vw) {
        width: 100vw
    }
</style>