<script lang="ts">
    import {Paginator} from "@skeletonlabs/skeleton";
    import type {PageData} from "./$types";
    import humanizeDuration from "humanize-duration";
    import PlaylistApplicationShell from "./PlaylistApplicationShell.svelte";

    export let data: PageData

    let debug = false

    let tracksPage = {
        page: 0,
        limit: 5,
        size: 10,
        amounts: [5, 10, 20, 50, 100],
    };

    $: allPlaylists = data?.playlists?.data

    $: {
        tracksPage.size = allPlaylists?.length
    }

    let search = ""

    $: paginatedSource = allPlaylists ? allPlaylists
        .filter(x => !search || JSON.stringify(x).toLowerCase().includes(search.toLowerCase()))
        .slice(
            tracksPage.page * tracksPage.limit,             // start
            tracksPage.page * tracksPage.limit + tracksPage.limit // end
        ) : [];

</script>

<PlaylistApplicationShell>
    <svelte:fragment slot="sidebarLeft">
    </svelte:fragment>
    <svelte:fragment slot="sidebarRight">
    </svelte:fragment>

    <div class="table-container">
        <table class="table table-hover ">
            <thead>

            <tr>
                <th >Title</th>
                <th class="largeonly">Created on</th>
                <th class="largeonly">Public?</th>
                <th class="mediumonly"># Tracks</th>
                <th class="largeonly">duration</th>
            </tr>

            <tr>
                <td colspan="6"><input bind:value={search} class="input" title="Input (search)" type="search" placeholder="Search..."/></td>
            </tr>
            </thead>
            <tbody>
            {#each paginatedSource as playlist}
                <tr>
                    <td>
                        <a href="edit?id={playlist.id}" data-sveltekit-preload-data="off">
                            <div class="flex items-center">
                                <img src={playlist.picture_small} alt="playlist cover" aria-describedby="{playlist.id}_title" class="deezer_img_small"/>
                                <strong id="{playlist.id}_title" class="m-2">{playlist.title}</strong>
                            </div>
                        </a>
                    </td>
                    <td class="items-center largeonly">{playlist.creation_date}</td>
                    <td class="largeonly"><input class="checkbox" type="checkbox" checked={playlist.public} disabled/></td>
                    <td class="mediumonly">{playlist.nb_tracks}</td>
                    <td class="largeonly">{humanizeDuration(playlist.duration * 1000, {units: ["h", "m", "s"], largest: 2,})}</td>
                </tr>
            {/each}
            </tbody>
        </table>
        <Paginator
                bind:settings={tracksPage}
                showFirstLastButtons="{true}"
                showPreviousNextButtons="{true}"
        />
    </div>

    <a href="#showDebug" on:click={()=>debug=!debug}>{debug ? 'hide debug' : 'show debug'}</a>
    <pre id="showDebug">
        {#if debug}
            { JSON.stringify({pageData: data.playlists}, null, 2)}
        {/if}
    </pre>
</PlaylistApplicationShell>

<style>

</style>