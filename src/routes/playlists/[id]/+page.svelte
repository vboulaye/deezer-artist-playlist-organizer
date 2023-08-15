<script lang="ts">
    import AudioPlayer from "$lib/AudioPlayer.svelte";
    import {extractPaginationIndex} from "$lib/PaginationUtils";
    import type {PageData} from "./$types";

    import IconDeezer from '~icons/jam/deezer-circle'
    import {AppBar} from '@skeletonlabs/skeleton';

    export let data: PageData

    data.playlist

    let debug = true

</script>

<AppBar>
    <svelte:fragment slot="lead"><img src={data.playlist.picture_small} alt="playlist cover" aria-describedby="{data.playlist.id}_title"/></svelte:fragment>
    <h1 id="{data.playlist.id}_title">Playlist: "{data.playlist.title}"</h1>
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


    <label class="label">
        <span>Tracks ({data.playlist.tracks.data.length})</span>

        <div class="table-container">
            <table class="table table-hover">
                <thead>
                <tr class="center">
                    <th class="w-1/3">Index</th>
                    <th class="w-1/3">Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>rank</th>
                    <th>duration</th>
                </tr>
                </thead>
                <tbody>
                {#each data.playlist.tracks.data as row, i}
                    <tr class="center">
                        <td>{i + 1}</td>
                        <td><span class="flex items-center">
                            <AudioPlayer src={row.preview} enabled={row.readable}/>
                            <span class="m-2 " class:text-red-500={!row.readable}>
                            {row.title}
                            </span>
                            <a href={row.link} title="open track in Deezer web interface"><IconDeezer/></a>
                        </span></td>
                        <!--                    <td>{row.link}</td>-->
                        <td><span class="flex items-center">
                            <span class="m-2"> {row.artist.name}</span>
                            <a href={row.artist.link} title="open artist in Deezer web interface">
                                <IconDeezer/>
                            </a>
                            </span>
                        </td>
                        <td><span class="flex items-center">
                            <img src={row.album.cover_small} alt="album cover"/>
                            <span class="m-2">{row.album.title}</span>
                               <a href="https://www.deezer.com/album/{row.album.id}" title="open album in Deezer web interface">
                                <IconDeezer/>
                            </a>
                        </span></td>
                        <td>{row.rank}</td>
                        <td>{row.duration}</td>
                        <td>

                        </td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>

    </label>

</form>

<a href="#showDebug" on:click={()=>debug=!debug}>{debug ? 'hide debug' : 'show debug'}</a>
<pre id="showDebug">
    {#if debug}
        { JSON.stringify({playlist: data.playlist}, null, 2)}
    {/if}
</pre>

<style>
    tr.center > td, tr.center > th {
        text-align: left;
        vertical-align: middle;
    }
</style>