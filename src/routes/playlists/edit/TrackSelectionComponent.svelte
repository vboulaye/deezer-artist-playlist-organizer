<script lang="ts">
    import RemoveIcon from '~icons/ph/minus-circle-bold';
    import AddIcon from '~icons/ph/plus-circle-bold';

    interface Props {
        addTitle?: string;
        removeTitle?: string;
        onAdd: () => void;
        onRemove: () => void;
        children?: import('svelte').Snippet;
    }

    let {
        addTitle = "add all album titles to the playlist",
        removeTitle = "deselect all album titles from the playlist",
        onAdd,
        onRemove,
        children
    }: Props = $props();

    let mode = $state("")
</script>

<span class="flex flex-row justify-between w-full items-center py-1 gap-x-2 {mode}">
   {@render children?.()}
    <span class="btn-group-vertical btn btn-sm gap-y-1">
        <button class="!p-0 "
                title={addTitle}
                onclick={onAdd}
                onpointerenter={()=>mode="variant-ghost-success"}
                onpointerleave={()=>mode=""}
        >
            <AddIcon/>
        </button>
        <button class="!p-0"
                title={removeTitle}
                onclick={onRemove}
                onpointerenter={()=>mode="variant-ghost-error"}
                onpointerleave={()=>mode=""}>
            <RemoveIcon/>
        </button>
    </span>
</span>