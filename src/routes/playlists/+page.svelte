<script lang="ts">
    import {base} from "$app/paths";
    import {extractPaginationIndex} from "$lib/PaginationUtils";
    import type {PageData} from "./$types";
    import humanizeDuration from "humanize-duration";
    import PlaylistApplicationShell from "./PlaylistApplicationShell.svelte";

    export let data: PageData

    let debug = false

    function extractIndexFromPaginationUrl(paginationUrl: string): string {
        const index = extractPaginationIndex(new URL(paginationUrl)) ||0;
        return `?index=${index}`
    }

</script>

<PlaylistApplicationShell >
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
            {#each data.playlists.data as row, i}
                <tr>
                    <td>
                        <a href="playlists/{row.id}" data-sveltekit-preload-data="off">
                            <div class="flex items-center">
                                <img src={row.picture_small} alt="playlist cover" aria-describedby="{row.id}_title" class="deezer_img_small"/>
                                <strong id="{row.id}_title" class="m-2">{row.title}</strong>
                            </div>
                        </a>
                    </td>
                    <td class="items-center">{row.creation_date}</td>
                    <td><input class="checkbox" type="checkbox" checked={row.public} disabled/></td>
                    <td>{row.nb_tracks}</td>
                    <td>{humanizeDuration(row.duration * 1000, {units: ["h", "m", "s"], largest: 2,})}</td>
                </tr>
            {/each}
            </tbody>
            <tfoot>
            <tr>
                <td>
                    {#if data.playlists.prev}
                        <a href="{extractIndexFromPaginationUrl(data.playlists.prev)}">previous</a>
                    {/if}
                </td>
                <td colspan="3">playlists {data.playlists.startIndex} - {data.playlists.endIndex} (total:{data.playlists.total})</td>
                <td>
                    {#if data.playlists.next}
                        <a href="{extractIndexFromPaginationUrl(data.playlists.next)}">next</a>
                    {/if}
                </td>
            </tr>
            </tfoot>
        </table>
    </div>

    <a href="#showDebug" on:click={()=>debug=!debug}>{debug ? 'hide debug' : 'show debug'}</a>
    <pre id="showDebug">
        {#if debug}
            { JSON.stringify({pageData: data.playlists}, null, 2)}
        {/if}
    </pre>
</PlaylistApplicationShell>