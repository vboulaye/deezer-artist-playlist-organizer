<script lang="ts">

    import RemoveIcon from '~icons/ph/minus-circle-bold';
    import AddIcon from '~icons/ph/plus-circle-bold';
    import SortAscendingIcon from '~icons/ph/sort-ascending-bold';
    import SortDescendingIcon from '~icons/ph/sort-descending-bold';

    import {addArtistTracks, getTrackCount, removeArtistTracks} from "./trackSelection";
    import type {TrackSelection} from "./trackSelection";
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import type {PlaylistArtistsSort} from "./artistsSorter";
    import { sortArtistsWithNewSort} from "./artistsSorter";
    import type {Writable} from "svelte/store";
    import type {DeezerArtist} from "$lib/DeezerApiModel";


    export let playlistArtists: Writable<DeezerArtist[]>

    export let trackSelections: Writable<TrackSelection[]>

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

</script>


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
