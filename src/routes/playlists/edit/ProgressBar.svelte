<script lang="ts">
    import type {Writable} from "svelte/store";
    import type {UpdateTracksProgress} from "./updateTracksProgress";

    interface Props {
        updateTracksProgress: Writable<UpdateTracksProgress | undefined>;
    }

    let { updateTracksProgress }: Props = $props();
</script>

{#if $updateTracksProgress}
    <span class="my-6">
    <span>{$updateTracksProgress.message}</span>
    <progress value={$updateTracksProgress.value} max={$updateTracksProgress.max}></progress>
    </span>
{/if}