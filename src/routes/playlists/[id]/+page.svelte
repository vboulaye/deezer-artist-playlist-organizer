<script lang="ts">
    import AudioPlayer from "$lib/AudioPlayer.svelte";
    import {extractPaginationIndex} from "$lib/PaginationUtils";
    import type {PageData} from "./$types";


    import {AppBar} from '@skeletonlabs/skeleton';

    export let data: PageData

    data.playlist

    let debug = true

</script>

<AppBar>
    <svelte:fragment slot="lead"><img src={data.playlist.picture_small} alt="playlist cover" aria-describedby="{data.playlist.id}_title"/></svelte:fragment>
    <h1 id="{data.playlist.id}_title">Playlist: {data.playlist.title}</h1>
</AppBar>


<form>
    <label class="label">
        <span>Title</span>
        <input class="input" type="text" placeholder="title" bind:value={data.playlist.title}/>
    </label>
    <label class="label">
        <span>Description</span>
        <textarea class="textarea" rows="4" placeholder="description" bind:value={data.playlist.description}/>
    </label>


    <div class="table-container">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="w-1/3">Title</th>
                <th>Description</th>
                <th>Created on</th>
                <th>Public?</th>
                <th># Tracks</th>
            </tr>
            </thead>
            <tbody>
            {#each data.playlist.tracks.data as row, i}
                <tr>
                    <td>{row.title}</td>
                    <!--                    <td>{row.link}</td>-->
                    <td>{row.artist.name}</td>
                    <td>{row.album.title} <img src={row.album.cover_small} alt="album cover"/></td>
                    <td>{row.rank}</td>
                    <td>{row.duration}</td>
                    <td>
                        <AudioPlayer src={row.preview}  />
                    </td>
                </tr>
            {/each}
            </tbody>

        </table>
    </div>

</form>

<a href="#showDebug" on:click={()=>debug=!debug}>{debug ? 'hide debug' : 'show debug'}</a>
<pre id="showDebug">
    {#if debug}
        { JSON.stringify({playlist: data.playlist}, null, 2)}
    {/if}
</pre>
