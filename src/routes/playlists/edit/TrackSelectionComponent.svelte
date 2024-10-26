<script lang="ts">
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import {addAlbumTracks, removeAlbumTracks} from "./trackSelection";
    import RemoveIcon from '~icons/ph/minus-circle-bold';
    import AddIcon from '~icons/ph/plus-circle-bold';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
   interface Props {
      addTitle?: string;
      removeTitle?: string;
      children?: import('svelte').Snippet;
   }

   let { addTitle = "add all album titles to the playlist", removeTitle = "deselect all album titles from the playlist", children }: Props = $props();

    let mode=$state("")
</script>

<span class="flex flex-row justify-between w-full items-center py-1 gap-x-2 {mode}" >
   {@render children?.()}
   <span class="btn-group-vertical btn btn-sm gap-y-1">
        <button class="!p-0 "
                title={addTitle}
                onclick={()=> dispatch("add")}
                onpointerenter={()=>mode="variant-ghost-success"}
                onpointerleave={()=>mode=""}
        >
            <AddIcon/>
        </button>
        <button class="!p-0"
                title={removeTitle}
                onclick={()=> dispatch("remove")}
                onpointerenter={()=>mode="variant-ghost-error"}
                onpointerleave={()=>mode=""}>
            <RemoveIcon/>
        </button>
    </span>
</span>