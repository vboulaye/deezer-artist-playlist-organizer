<script lang="ts">
    import IconPlay from '~icons/ph/play-circle-bold'
    import IconPause from '~icons/ph/pause-circle-bold'

    export let src: string
    export let loop = false
    export let enabled = true
    export let paused = true


    function switchPlayerMode() {
        if (enabled) {
            paused = !paused
        }
    }

</script>

<audio src={src} bind:paused={paused} loop={loop}/>
<span class:text-gray-500={!enabled}>
{#if paused}
    <span role="button" on:click={switchPlayerMode}><IconPlay/></span>
{:else }
    <span role="button" on:click={switchPlayerMode}><IconPause/></span>
{/if}
</span>
