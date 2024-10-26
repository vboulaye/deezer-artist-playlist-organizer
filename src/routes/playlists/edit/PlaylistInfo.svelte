<script lang="ts">
    import type {DeezerPlaylistDetails} from "$lib/DeezerApiModel";
    import {SlideToggle} from '@skeletonlabs/skeleton';

    interface Props {
        playlist: DeezerPlaylistDetails;
    }

    let { playlist = $bindable() }: Props = $props();

</script>

<form class="mb-10 space-y-2">

    <div class="grid grid-cols-6">
        <div class="col-span-5">
            <label class="label">
                <span>Title</span>
                <input class="input" type="text" placeholder="title" bind:value={playlist.title} class:input-error={!playlist.title}/>
            </label>
        </div>
        <div>
            <SlideToggle name="slider-label" bind:checked={playlist.public}>
                {#if playlist.public}Public{:else }Private{/if} playlist
            </SlideToggle>
        </div>
    </div>


    <label class="label">
        <span>Description</span>
        <textarea class="textarea" rows="4" placeholder="" bind:value={playlist.description} class:input-error={!playlist.description}></textarea>
    </label>

</form>

<style>


</style>