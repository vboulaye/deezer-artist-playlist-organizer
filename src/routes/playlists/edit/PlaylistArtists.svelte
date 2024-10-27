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
    import type {ToastStore} from "@skeletonlabs/skeleton";


    interface Props {
        playlistArtists: Writable<DeezerArtist[]>;
        trackSelections: Writable<TrackSelection[]>;
        toastStore: ToastStore;
    }

    let { playlistArtists, trackSelections, toastStore }: Props = $props();
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
        playlistArtists.update(playlistArtists => sortArtistsWithNewSort(playlistArtists, playlistArtistsSort, $trackSelections))
    }

</script>


{#if $playlistArtists?.length > 0}
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
        {#each $playlistArtists as topArtist}
            <PlaylistArtistsElement {topArtist} {trackSelections} {toastStore}/>
        {/each}
    </ul>
{/if}
