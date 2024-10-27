<script lang="ts">
    import IconPlay from '~icons/ph/play-circle-bold'
    import IconPause from '~icons/ph/pause-circle-bold'

    interface Props {
        src: string;
        loop?: boolean;
        enabled?: boolean;
        paused?: boolean;
    }

    let {
        src,
        loop = false,
        enabled = true,
        paused = $bindable(true)
    }: Props = $props();

    function switchPlayerMode() {
        if (enabled) {
            paused = !paused
        }
    }

</script>

<audio src={src} bind:paused={paused} loop={loop}></audio>
<span class:text-gray-500={!enabled}>
    <button type="button" onclick={switchPlayerMode} class="button-icon">
        {#if paused}
            <IconPlay/>
        {:else }
            <IconPause/>
        {/if}
    </button>
</span>

<style>

</style>
