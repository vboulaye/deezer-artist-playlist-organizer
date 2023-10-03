<script lang="ts">
    import type {Writable} from "svelte/store";
    import type {UpdateTracksProgress} from "./updateTracksProgress";

    export let updateTracksProgress: Writable<UpdateTracksProgress | undefined>
</script>

{#if $updateTracksProgress}
    <span class="my-6">
    <span>{$updateTracksProgress.message}</span>
    <progress value={$updateTracksProgress.value} max={$updateTracksProgress.max}/>
    </span>
{/if}