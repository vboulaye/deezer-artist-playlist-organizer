<script lang="ts">
    import {extractPaginationIndex} from "$lib/PaginationUtils";
    import type {PageData} from "./$types";
    import humanizeDuration from "humanize-duration";

    export let data: PageData

    let debug = false

    function extractIndexFromPaginationUrl(paginationUrl: string): string {
        const index = extractPaginationIndex(new URL(paginationUrl));
        return `?index=${index}`
    }

</script>

<h1>Playlists</h1>

<div class="table-container">
    <table class="table table-hover">
        <thead>
        <tr>
            <th class="w-1/3">Title</th>
            <th>Description</th>
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
                    <a href="playlists/{row.id}">
                        <div class="flex items-center">
                            <img src={row.picture_small} alt="playlist cover" aria-describedby="{row.id}_title"/>
                            <strong id="{row.id}_title" class="m-2">{row.title}</strong>
                        </div>
                    </a>
                </td>
                <td>{row.type}</td>
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
