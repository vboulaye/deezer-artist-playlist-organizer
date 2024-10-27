<script lang="ts">

    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import SortAscendingIcon from '~icons/ph/sort-ascending-bold';
    import SortDescendingIcon from '~icons/ph/sort-descending-bold';
    import type {PlaylistArtistsSort} from "./artistsSorter";
    import {sortArtistsWithNewSort} from "./artistsSorter";
    import PlaylistArtistsElement from "./PlaylistArtistsElement.svelte";

    import type {ToastStore} from "@skeletonlabs/skeleton";
    import {playlistState} from "./playlistState.svelte";


    interface Props {
        toastStore: ToastStore;
    }

    let {   toastStore }: Props = $props();
    export const playlistArtistsSort: PlaylistArtistsSort = $state({
        ascending: false,
        orderBy: "trackCount"
    })

    function sortArtists(newSort: Partial<PlaylistArtistsSort>) {
        if (newSort.ascending !== undefined) {
            playlistArtistsSort.ascending = newSort.ascending
        }
        if (newSort.orderBy !== undefined) {
            playlistArtistsSort.orderBy = newSort.orderBy
        }
        sortArtistsWithNewSort(playlistState.playlistArtists, playlistArtistsSort, playlistState.trackSelections)
    }

</script>


{#if playlistState.playlistArtists?.length > 0}
        <span class="flex justify-between w-full items-center gap-x-2 my-4">
            <HorizontalSpan><h4>Playlists Artists</h4></HorizontalSpan>
            <HorizontalSpan>
                {#if playlistArtistsSort.orderBy === "trackCount"}
                    <button onclick={()=> sortArtists({orderBy:"alphabetical"})}>
                        # tracks
                    </button>
                  {:else if playlistArtistsSort.orderBy === "alphabetical" }
                    <button onclick={()=> sortArtists({orderBy:"trackCount"})}>
                        alphabetical
                    </button>
                {/if}
                {#if playlistArtistsSort.ascending}
                    <button onclick={()=> sortArtists({ascending:false})}>
                        <SortAscendingIcon/>
                    </button>
                {:else}
                    <button onclick={()=> sortArtists({ascending:true})}>
                        <SortDescendingIcon/>
                    </button>
                {/if}
            </HorizontalSpan>
           </span>
    <ul class="list">
        {#each playlistState.playlistArtists as topArtist}
            <PlaylistArtistsElement {topArtist} {toastStore}/>
        {/each}
    </ul>
{/if}
