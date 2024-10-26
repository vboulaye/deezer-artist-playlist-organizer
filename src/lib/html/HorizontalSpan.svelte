<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

</script>

<span class="flex gap-x-2 items-center mx-2">
    {@render children?.()}
</span>