<script lang="ts">
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import {addAlbumTracks, removeAlbumTracks} from "./trackSelection";
    import RemoveIcon from '~icons/ph/minus-circle-bold';
    import AddIcon from '~icons/ph/plus-circle-bold';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
    export let addTitle = "add all album titles to the playlist"
    export let removeTitle = "deselect all album titles from the playlist"

    let mode=""
</script>

<span class="flex flex-row justify-between w-full items-center py-1 gap-x-2 {mode}" >
   <slot/>
   <span class="btn-group-vertical btn btn-sm gap-y-1">
        <button class="!p-0 "
                title={addTitle}
                on:click={()=> dispatch("add")}
                on:pointerenter={()=>mode="variant-ghost-success"}
                on:pointerleave={()=>mode=""}
        >
            <AddIcon/>
        </button>
        <button class="!p-0"
                title={removeTitle}
                on:click={()=> dispatch("remove")}
                on:pointerenter={()=>mode="variant-ghost-error"}
                on:pointerleave={()=>mode=""}>
            <RemoveIcon/>
        </button>
    </span>
</span>