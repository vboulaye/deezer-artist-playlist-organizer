<script lang="ts">
    import type {DeezerPlaylistDetails} from "$lib/DeezerApiModel";
    import {SlideToggle} from '@skeletonlabs/skeleton';
    import {playlistState} from "./playlistState.svelte";
    import PlaylistTextInput from "./PlaylistTextInput.svelte";

    interface Props {
        readonly playlist: DeezerPlaylistDetails;
    }

    let { playlist }: Props = $props();

</script>

<form class="mb-10 space-y-2">

    <div class="grid grid-cols-6">
        <div class="col-span-5">
            <label class="label" class:input-error={!playlist.title} >
                <span>Title</span>
                <PlaylistTextInput bind:value={playlist.title} placeholder="title" disabled={!playlistState.isUpdatable}/>
            </label>
        </div>
        <div>
            <SlideToggle name="slider-label" bind:checked={playlist.public} disabled={!playlistState.isUpdatable}>
                {#if playlist.public}Public{:else }Private{/if} playlist
            </SlideToggle>
        </div>
    </div>


    <label class="label">
        <span>Description</span>
        <textarea class="textarea" rows="4" placeholder="" bind:value={playlist.description} class:input-error={!playlist.description} disabled={!playlistState.isUpdatable}></textarea>
    </label>

</form>

<style>


</style>