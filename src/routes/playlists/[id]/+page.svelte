<script lang="ts">
    import AudioPlayer from "$lib/AudioPlayer.svelte";
    import {callDeezer} from "$lib/DeezerCall";
    import {AppBar, toastStore} from '@skeletonlabs/skeleton';

    import humanizeDuration from "humanize-duration";
    import IconDeezer from '~icons/jam/deezer-circle'
    import IconSave from '~icons/ph/cloud-check-bold'
    import type {PageData} from "./$types";

    export let data: PageData

    const artistsById = data.playlist.tracks.data
        .reduce((accumulator, track) => {
            if (!accumulator[track.artist.id]) {
                accumulator[track.artist.id] = {artist: track.artist, count: 0}
            }
            accumulator[track.artist.id].count++
            return accumulator
        }, {})
    const playlistTopArtists = Object.values(artistsById)
        .filter(artist => artist.count >= data.playlist.tracks.data.length / 2)
        .sort((a, b) => b.count - a.count)
    ;

    async function savePlaylist() {
        const {title, description, publicFlag} = data.playlist
        const updateResult = await callDeezer({
            apiPath: `/playlist/${data.playlist.id}`,
            accessToken: data.session.token.access_token,
            searchParams: {
                request_method: "POST",
                title,
                description,
                //public: publicFlag,
            }
        });
        toastStore.trigger({
            message: `Updated playlist: ${updateResult ? "OK" : "KO"}`,
            timeout: 3000
        });
    }

    let debug = false

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

    <button on:click={savePlaylist} class="btn variant-filled">
        <IconSave/>
        <span>Update</span>
    </button>

    <label class="label">
        <span>Tracks ({data.playlist.tracks.data.length})</span>

        <div class="table-container">
            <table class="table table-hover">
                <thead>
                <tr class="center">
                    <th>Index</th>
                    <th class="w-1/3">Title</th>
                    <th>Album</th>
                    <th>Artist</th>
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
                        <td><span class="flex items-center">
                            <img src={row.album.cover_small} alt="album cover"/>
                            <span class="m-2">{row.album.title}</span>
                               <a href="https://www.deezer.com/album/{row.album.id}" title="open album in Deezer web interface">
                                <IconDeezer/>
                            </a>
                        </span></td>
                        <td><span class="flex items-center">
                            <span class="m-2"> {row.artist.name}</span>
                            <a href={row.artist.link} title="open artist in Deezer web interface">
                                <IconDeezer/>
                            </a>
                            </span>
                        </td>

                        <td>{row.rank}</td>
                        <td>{humanizeDuration(row.duration * 1000, {units: ["m", "s"], largest: 2,})}</td>
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