<script lang="ts">
    import AudioPlayer from "$lib/AudioPlayer.svelte";
    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import {callDeezer} from "$lib/DeezerCall";
    import {AppBar, toastStore} from '@skeletonlabs/skeleton';

    import humanizeDuration from "humanize-duration";
    import IconDeezer from '~icons/jam/deezer-circle'
    import IconSave from '~icons/ph/cloud-check-bold'
    import type {PageData} from "./$types";

    export let data: PageData


    async function savePlaylist() {
        const {title, description} = data.playlist
        const updateResult = await callDeezer({
            apiPath: `/playlist/${data.playlist.id}`,
            accessToken: data.session.token?.access_token,
            searchParams: {
                request_method: "POST",
                title,
                description,
                public: data.playlist.public,
            }
        });
        toastStore.trigger({
            message: `Updated playlist: ${updateResult ? "OK" : "KO"}`,
            timeout: 3000
        });
    }

    let debug = false

    function addArtist(artist:unknown) {
        artist.albums.forEach(album => {
            album.tracks.forEach(track => {
                const existingTrack = data.playlist.tracks.data.find(playlistTrack => playlistTrack.id===track.id);
                if (!existingTrack) {
                    track.album=album
                    data.playlist.tracks.data.push(track)
                }
            })
        })
        data=data
    }
</script>

<AppBar>
    <svelte:fragment slot="lead"><img src={data.playlist.picture_small} alt="playlist cover" aria-describedby="{data.playlist.id}_title"/></svelte:fragment>
    <h1 id="{data.playlist.id}_title">Playlist: "{data.playlist.title}"</h1>
</AppBar>


<form class="mb-10 space-y-2">

    <label class="label">
        <span>Title</span>
        <input class="input" type="text" placeholder="title" bind:value={data.playlist.title}/>
    </label>

    <label class="label">
        <span>Description</span>
        <textarea class="textarea" rows="4" placeholder="description" bind:value={data.playlist.description}/>
    </label>

    <div class="flex place-content-end">
        <button class="btn variant-filled-primary" on:click|preventDefault={savePlaylist}>
            <IconSave/>
            <span>Update playlist</span>
        </button>
    </div>

</form>


<ul class="list">

    {#each data.topArtists as topArtist, i}
        <li>
        <span class="flex items-center">
            <span class="m-2"> {topArtist.artist.name}</span>
                <a href={topArtist.artist.link} title="open artist in Deezer web interface">
                    <IconDeezer/>
                </a>
            {topArtist.count} tracks in playlist /
            {topArtist.albums.flatMap(x => x.tracks).length} tracks (in {topArtist.albums.length} albums)
            <button class="btn variant-filled-tertiary" on:click={()=> addArtist(topArtist)}>add artist</button>
        </span>
        </li>
    {/each}
</ul>

<label class="label">
    <div class="flex place-content-between">
        <span>Tracks ({data.playlist.tracks.data.length})</span>
        <button class="btn variant-filled-secondary">
            <IconSave/>
            <span>Update Tracks</span>
        </button>
        <span><!-- empty box to the right --></span>
    </div>
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
                    <td> <span class="flex items-center">
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


<a href="#showDebug" on:click={()=>debug=!debug}>{debug ? 'hide debug' : 'show debug'}</a>
<pre id="showDebug">
        { JSON.stringify({topArtists: data.topArtists}, null, 2)}
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