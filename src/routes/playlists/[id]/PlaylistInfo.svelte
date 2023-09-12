<script lang="ts">
    import type {DeezerPlaylist} from "$lib/DeezerApiModel";
    import {SlideToggle} from '@skeletonlabs/skeleton';

    export let playlist: DeezerPlaylist

</script>



    <form class="mb-10 space-y-2">

        <div class="grid grid-cols-6">
            <div class="col-span-5">
                <label class="label">
                    <span>Title</span>
                    <input class="input" type="text" placeholder="title" bind:value={playlist.title}/>
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
            <textarea class="textarea" rows="4" placeholder="description" bind:value={playlist.description}/>
        </label>

    </form>

<style>


</style>