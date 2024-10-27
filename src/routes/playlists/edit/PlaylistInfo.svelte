<script lang="ts">
    import {SlideToggle} from '@skeletonlabs/skeleton';
    import {playlistState} from "./playlistState.svelte";
    import PlaylistTextInput from "./PlaylistTextInput.svelte";
</script>

<form class="mb-10 space-y-2">

    {#if playlistState.playlist}

        <div class="grid grid-cols-6">
            <div class="col-span-5">
                <label class="label" class:input-error={!playlistState.playlist.title}>
                    <span>Title</span>
                    <PlaylistTextInput bind:value={playlistState.playlist.title} placeholder="title"
                                       disabled={!playlistState.isUpdatable}/>
                </label>
            </div>
            <div>
                <SlideToggle name="slider-label" bind:checked={playlistState.playlist.public}
                             disabled={!playlistState.isUpdatable}>
                    {#if playlistState.playlist.public}Public{:else }Private{/if} playlist
                </SlideToggle>
            </div>
        </div>


        <label class="label">
            <span>Description</span>
            <textarea class="textarea" rows="4" placeholder="" bind:value={playlistState.playlist.description}
                      class:input-error={!playlistState.playlist.description}
                      disabled={!playlistState.isUpdatable}></textarea>
        </label>
    {/if}

</form>

<style>


</style>