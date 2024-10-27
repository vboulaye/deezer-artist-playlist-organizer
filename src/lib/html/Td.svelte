<script lang="ts">

    import type {Snippet} from "svelte";

    interface Props {
        justify?: "center" | "start" | "end";
        title?: string|number;
        class?: string;
        children?: Snippet;
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

<td style="vertical-align:middle" title={""+title} class={clazz}>
    <div class="flex items-center justify-{justify} gap-x-2 h-full">
        {@render children?.()}
    </div>
</td>