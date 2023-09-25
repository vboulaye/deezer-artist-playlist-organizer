<script lang="ts">

    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import type {Writable} from "svelte/store";
    import SortAscendingIcon from '~icons/ph/sort-ascending-bold';
    import SortDescendingIcon from '~icons/ph/sort-descending-bold';
    import type {PlaylistArtistsSort} from "./artistsSorter";
    import {sortArtistsWithNewSort} from "./artistsSorter";
    import PlaylistArtistsElement from "./PlaylistArtistsElement.svelte";

    import type {TrackSelection} from "./trackSelection";


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
            <PlaylistArtistsElement {topArtist} {trackSelections}/>
        {/each}
    </ul>
{/if}
