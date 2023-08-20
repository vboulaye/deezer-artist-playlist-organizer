<script lang="ts">
    import {cubicIn, cubicOut} from "svelte/easing";
    import {fly} from 'svelte/transition';

    export let pathname: string = '';
    export let duration = 500
</script>

{#key pathname}
    <div in:fly={{ x: -10, duration: duration, easing: cubicOut, delay: duration }}
         out:fly={{ x: 10, duration: duration, easing: cubicIn }}>
        <slot/>
    </div>
{/key}
