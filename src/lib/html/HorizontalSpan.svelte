<script lang="ts">
    import type {Snippet} from "svelte";

    interface Props {
        readonly children?: Snippet;
    }

    let { children }: Props = $props();

</script>

<span class="flex gap-x-2 items-center mx-2">
    {@render children?.()}
</span>