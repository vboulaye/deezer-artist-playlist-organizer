<script lang="ts">
    import {base} from "$app/paths";
    import {extractPaginationIndex} from "$lib/PaginationUtils";
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

    $: allPlaylists = data.playlists.data

    $: {
        tracksPage.size = allPlaylists.length
    }

    $: paginatedSource = allPlaylists.slice(
        tracksPage.page * tracksPage.limit,             // start
        tracksPage.page * tracksPage.limit + tracksPage.limit // end
    );

</script>

<PlaylistApplicationShell>
    <svelte:fragment slot="sidebarLeft">
    </svelte:fragment>
    <svelte:fragment slot="sidebarRight">
    </svelte:fragment>

    <div class="table-container">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="w-1/3">Title</th>
                <th>Created on</th>
                <th>Public?</th>
                <th># Tracks</th>
                <th>duration</th>
            </tr>
            </thead>
            <tbody>
            {#each paginatedSource as playlist}
                <tr>
                    <td>
                        <a href="playlists/{playlist.id}" data-sveltekit-preload-data="off">
                            <div class="flex items-center">
                                <img src={playlist.picture_small} alt="playlist cover" aria-describedby="{playlist.id}_title" class="deezer_img_small"/>
                                <strong id="{playlist.id}_title" class="m-2">{playlist.title}</strong>
                            </div>
                        </a>
                    </td>
                    <td class="items-center">{playlist.creation_date}</td>
                    <td><input class="checkbox" type="checkbox" checked={playlist.public} disabled/></td>
                    <td>{playlist.nb_tracks}</td>
                    <td>{humanizeDuration(playlist.duration * 1000, {units: ["h", "m", "s"], largest: 2,})}</td>
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