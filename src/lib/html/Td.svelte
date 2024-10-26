<script lang="ts">

    interface Props {
        justify?: "center" | "start" | "end";
        title?: string;
        class?: string;
        children?: import('svelte').Snippet;
    }

    let {
        justify = "center",
        title = "",
        class: clazz = "",
        children
    }: Props = $props();
    // creates a `class` property, even
    // though it is a reserved word
    
</script>

<td style="vertical-align:middle" {title} class={clazz}>
    <div class="flex items-center justify-{justify} gap-x-2 h-full">
        {@render children?.()}
    </div>
</td>