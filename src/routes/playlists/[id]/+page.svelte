<script lang="ts">
    import {page} from "$app/stores";
    import AudioPlayer from "$lib/AudioPlayer.svelte";
    import type {DeezerArtist, DeezerTrack} from "$lib/DeezerApiModel";
    import {getDeezerArtistDiscography} from "$lib/DeezerApiQuery";
    import type {DeezerSearchParams} from "$lib/DeezerCall";
    import {callDeezer} from "$lib/DeezerCall";
    import Td from "$lib/html/Td.svelte";
    import type {PaginatedResult} from "$lib/PaginationUtils";
    import type {AutocompleteOption} from '@skeletonlabs/skeleton';
    import {AppShell, AppBar, Autocomplete, toastStore} from '@skeletonlabs/skeleton';

    import humanizeDuration from "humanize-duration";
    import type {Writable} from "svelte/store";
    import {derived, writable} from "svelte/store";
    import IconDeezer from '~icons/jam/deezer-circle'
    import IconSave from '~icons/ph/cloud-check-bold'
    import type {PageData} from "./$types";

    export let data: PageData

    interface TrackSelection {
        track: DeezerTrack
        inPlaylist: boolean
        selected: boolean
    }

    const trackSelections: Writable<TrackSelection[]> = writable(data.playlist.tracks.data.map(track => ({track, inPlaylist: true, selected: true})))

    async function savePlaylist() {
        const searchParams: DeezerSearchParams = {
            request_method: "POST",
        };
        if (data.playlist.title) {
            searchParams.title = data.playlist.title
        }
        if (data.playlist.description) {
            searchParams.title = data.playlist.description
        }
        if (data.playlist.public) {
            searchParams.public = data.playlist.public
        }

        try {
            const updateResult = await callDeezer({
                apiPath: `/playlist/${data.playlist.id}`,
                searchParams: searchParams
            });
            toastStore.trigger({
                message: `Updated playlist: ${updateResult ? "OK" : "KO"}`,
                timeout: 3000
            });
        } catch (e) {
            toastStore.trigger({
                message: `Updated playlist: error ${e}`,
                timeout: 3000
            });
        }
    }

    let debug = false

    async function addArtistTracks(artistId: number) {
        const albums = await getDeezerArtistDiscography(artistId);

        trackSelections.update(trackSelectionsList => {
            const allTracks = albums
                .sort((a1, a2) => a1.release_date.localeCompare(a2.release_date))
                .flatMap(album => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const {tracks: _, ...parentAlbum} = album
                    return album.tracks.map(track => ({...track, album: parentAlbum}));
                });

            allTracks.forEach(track => {
                const existingTrack = data.playlist.tracks.data.find(playlistTrack => playlistTrack.id === track.id);
                if (!existingTrack) {
                    trackSelectionsList.push({
                        track,
                        inPlaylist: false,
                        selected: true,
                    })
                } else {
                    existingTrack.album = track.album
                }
            })

            function getIndex(t: TrackSelection): number {
                return allTracks.findIndex(x => x.id === t.track.id)
            }

            trackSelectionsList.sort((t1, t2) => {
                const pos1 = getIndex(t1)
                const pos2 = getIndex(t2)
                return pos1 - pos2
            })

            return trackSelectionsList
        })
    }


    function computeRowClass(trackSelection: TrackSelection): string {
        if (!trackSelection.inPlaylist && trackSelection.selected) {
            return '!text-lime-500'
        }
        if (trackSelection.inPlaylist && !trackSelection.selected) {
            return '!line-through'
        }
        return ""
    }

    let artistSearch = writable("")

    function onArtistSelection(event: CustomEvent<AutocompleteOption>) {
        const artist = event.detail.meta
        addArtistTracks(artist)
    }


    const artistsFound = derived<Writable<string>, AutocompleteOption[]>(artistSearch, ($artistSearch, set) => {
        if (!$artistSearch) {
            set([])
            return
        }
        callDeezer<PaginatedResult<DeezerArtist>>({
            apiPath: `/search/artist`,
            searchParams: {q: $artistSearch}
        }).then(searchResult => {
            const options = searchResult.data.map(artist => ({label: `<img src="${artist.picture_small}" class="mx-2"/> ${artist.name}`, value: artist.id, meta: artist}));
            set(options)
        });
    })

</script>


<AppShell slotSidebarLeft="mx-2 h-100vh overflow-scroll" slotSidebarRight="mx-2 h-100vh overflow-scroll" slotPageContent="h-100vh overflow-scroll">
    <!--    <svelte:fragment slot="header">-->
    <!--        <AppBar>-->
    <!--            <svelte:fragment slot="lead"><img src={data.playlist.picture_small} alt="playlist cover"-->
    <!--                                              aria-describedby="{data.playlist.id}_title"/></svelte:fragment>-->
    <!--            <h1 id="{data.playlist.id}_title">Playlist: "{data.playlist.title}"</h1>-->
    <!--        </AppBar>-->
    <!--    </svelte:fragment>-->
    <svelte:fragment slot="sidebarLeft">
        <ul class="list">
            {#each data.topArtists as topArtist, i}
                <li>
        <span class="flex items-center space-x-2">
            <img src={topArtist.picture_small} alt="{topArtist.name}"/>
            <span>{topArtist.name}</span>
            <a href={topArtist.link} title="open artist in Deezer web interface">
                <IconDeezer/>
            </a>
            <span>(#{$trackSelections.filter(t => t.track.artist.id === topArtist.id).length})</span>
            <button class="btn variant-filled-tertiary"
                    on:click={()=> addArtistTracks(topArtist.id)}>add </button>
        </span>
                </li>
            {/each}
        </ul>

        <input class="input" type="search" name="demo" bind:value={$artistSearch} placeholder="Search..."/>
        <div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
            <Autocomplete bind:input={$artistSearch} options={$artistsFound} on:selection={onArtistSelection}/>
        </div>

    </svelte:fragment>
    <svelte:fragment slot="sidebarRight">
        <div class="flex place-content-end">
            <button class="btn variant-filled-primary" on:click|preventDefault={savePlaylist}>
                <IconSave/>
                <span>Update playlist</span>
            </button>
        </div>
        <button class="btn variant-filled-secondary">
            <IconSave/>
            <span>Update Tracks</span>
        </button>
        <a href="#showDebug" on:click={()=>debug=!debug}>{debug ? 'hide debug' : 'show debug'}</a>
    </svelte:fragment>

        <form class="mb-10 space-y-2">

            <label class="label">
                <span>Title</span>
                <input class="input" type="text" placeholder="title" bind:value={data.playlist.title}/>
            </label>

            <label class="label">
                <span>Description</span>
                <textarea class="textarea" rows="4" placeholder="description" bind:value={data.playlist.description}/>
            </label>

        </form>


        <label class="label">
            <div class="flex place-content-between">
                <span>Tracks ({data.playlist.tracks.data.length})</span>

                <span><!-- empty box to the right --></span>
            </div>
            <div class="table-container">
                <table class="table">
                    <thead>
                    <tr class="center">
                        <th><input type="checkbox" class="checkbox"/></th>
                        <th>Pos.</th>
                        <th class="w-1/3">Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>rank</th>
                        <th>duration</th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each $trackSelections as trackSelection, i}
                        {@const row=trackSelection.track}
                        <tr class={computeRowClass(trackSelection)}
                            class:!text-red-500={!row.readable}
                        >
                            <Td><input type="checkbox" class="checkbox" bind:checked={trackSelection.selected}/></Td>
                            <Td><span>{i + 1}</span></Td>
                            <Td justify="start">
                                <span>{row.title}</span>
                                <a href={row.link} title="open track in Deezer web interface">
                                    <IconDeezer/>
                                </a>

                            </Td>
                            <Td justify="start">
                                <img src={row.album.cover_small} alt="album cover"/>
                                <span class="m-2">{row.album.title}</span>
                                <a href="https://www.deezer.com/album/{row.album.id}"
                                   title="open album in Deezer web interface">
                                    <IconDeezer/>
                                </a>
                            </Td>
                            <td> <span class="flex items-center">
                                <span class="m-2"> {row.artist.name}</span>
                                <a href={row.artist.link} title="open artist in Deezer web interface">
                                    <IconDeezer/>
                                </a>
                                </span>
                            </td>

                            <Td>{row.album.release_date}</Td>
                            <Td>{humanizeDuration(row.duration * 1000, {units: ["m", "s"], largest: 2,})}
                                <span class="grow"></span>
                                <AudioPlayer src={row.preview} enabled={row.readable}/>
                            </Td>
                        </tr>
                    {/each}
                    </tbody>
                </table>
            </div>

        </label>


        <pre id="showDebug">
            { JSON.stringify({topArtists: data.topArtists}, null, 2)}
            {#if debug}
                { JSON.stringify({playlist: data.playlist}, null, 2)}
            {/if}
        </pre>
</AppShell>


<style>
    tr.center > td, tr.center > th {
        text-align: left;
        vertical-align: middle;
    }

    :global(.h-100vh) {
        height: 100vh
    }
</style>