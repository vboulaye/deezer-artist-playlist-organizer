<script lang="ts">
    import IconPlay from '~icons/ph/play-circle-bold'
    import IconPause from '~icons/ph/pause-circle-bold'

    export let src: string
    export let loop = true
    export let paused = true

</script>

<audio src={src} bind:paused={paused} loop={loop}/>

{#if paused}
    <span role="button" on:click={() => paused=false}><IconPlay/></span>
{:else }
    <span role="button" on:click={() => paused=true}><IconPause/></span>
{/if}

