<script lang="ts">
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import {addAlbumTracks, removeAlbumTracks} from "./trackSelection";
    import RemoveIcon from '~icons/ph/minus-circle-bold';
    import AddIcon from '~icons/ph/plus-circle-bold';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let addTitle="add all album titles to the playlist"
    export let removeTitle="deselect all album titles from the playlist"
</script>

<span class="flex flex-row justify-between w-full items-center gap-x-2">
   <slot/>
   <span class="btn-group-vertical btn btn-sm gap-y-1">
        <button class="!p-0 "
                title= {addTitle}
                on:click={()=> dispatch("add")}>
            <AddIcon/>
        </button>
        <button class="!p-0"
                title="deselect all album titles from the playlist"
                on:click={()=> dispatch("remove")}>
            <RemoveIcon/>
        </button>
    </span>
</span>