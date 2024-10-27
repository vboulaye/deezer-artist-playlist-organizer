<script lang="ts">
    import {cubicIn, cubicOut} from "svelte/easing";
    import {fly} from 'svelte/transition';
    import type {Snippet} from "svelte";

    interface Props {
        pathname?: string;
        duration?: number;
        children?: Snippet;
    }

    let { pathname = '', duration = 500, children }: Props = $props();
</script>

{#key pathname}
    <div in:fly={{ x: -10, duration: duration, easing: cubicOut, delay: duration }}
         out:fly={{ x: 10, duration: duration, easing: cubicIn }}>
        {@render children?.()}
    </div>
{/key}
