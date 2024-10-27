<script lang="ts">

    import AudioPlayer from "$lib/AudioPlayer.svelte";
    import type {DeezerArtist, DeezerTrack} from "$lib/DeezerApiModel";
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import Td from "$lib/html/Td.svelte";
    import {Paginator, Ratings} from '@skeletonlabs/skeleton';

    import humanizeDuration from "humanize-duration";
    import IconStarEmpty from '~icons/ph/star-bold';
    import IconStarHalf from '~icons/ph/star-duotone';
    import IconStarFull from '~icons/ph/star-fill';
    import type {TrackSelection} from "./trackSelection";
    import {addAlbumTracks, addArtistTracks, removeAlbumTracks, removeArtistTracks} from "./trackSelection";
    import TrackSelectionComponent from "./TrackSelectionComponent.svelte";
    import type {ToastStore} from "@skeletonlabs/skeleton";
    import {playlistState} from "./playlistState.svelte";


    interface Props {
        artists: DeezerArtist[];
        toastStore: ToastStore;
    }

    let { artists = [], toastStore}: Props = $props();



    function computeRowClass(trackSelection: TrackSelection): string {
        if (!trackSelection.inPlaylist && trackSelection.selected) {
            return '!text-lime-500'
        }
        if (trackSelection.inPlaylist && !trackSelection.selected) {
            return '!line-through'
        }
        return ""
    }

    function getArtist(track: DeezerTrack, artists: DeezerArtist[]) {
        return artists.find(a => a.id === track.artist.id)
    }


    let tracksPage = $state({
        page: 0,
        limit: 10,
        size: 10,
        amounts: [10, 20, 50, 100],
    });

    $effect(() => {
        tracksPage.size = playlistState.trackSelections.length
    });
    let search = $state("")
    let paginatedSource = $derived(playlistState.trackSelections
        .filter(x => !search || JSON.stringify(x.track).toLowerCase().includes(search.toLowerCase()))
        .slice(
            tracksPage.page * tracksPage.limit,             // start
            tracksPage.page * tracksPage.limit + tracksPage.limit // end
        ));

    let maxRank = $derived(playlistState.trackSelections.reduce((pre, cur) => Math.max(pre, cur.track.rank), 0))

    const shortEnglishHumanizer = humanizeDuration.humanizer({
        language: "shortEn",
        languages: {
            shortEn: {
                y: () => "y.",
                mo: () => "mo.",
                w: () => "w.",
                d: () => "d.",
                h: () => "h.",
                m: () => "m.",
                s: () => "s.",
                ms: () => "ms",
            },
        },
        units: ["m", "s"],
        largest: 2,
    });

    function selectAllTracks(e: Event) {
        const target = e.target as HTMLInputElement;
        paginatedSource.forEach(x => x.selected = target.checked);
    }

</script>


<div class="table-container">
    <table class="table table-compact my-4">
        <thead>
        <tr>
            <td colspan="3">
                        <span>{playlistState.trackSelections?.filter(x => x.selected).length} selected
                            Tracks ({playlistState.trackSelections.filter(x => x.inPlaylist).length}
                            in playlist)</span>
            </td>
            <td colspan="4"><input bind:value={search} class="input" title="Input (search)" type="search"
                                   placeholder="Search..."/></td>
        </tr>
        <tr>
            <th>
                <input type="checkbox" class="checkbox"
                       checked={paginatedSource.filter(x=>x.selected).length===paginatedSource.length && paginatedSource.length>0}
                       indeterminate={paginatedSource.filter(x=>x.selected).length!==paginatedSource.length && paginatedSource.filter(x=>x.selected).length>0}
                       onchange={(e)=> {selectAllTracks(e)}}
                />
            </th>
            <th class="largeonly">Pos.</th>
            <th class="">Title</th>
            <th class="max-w-xs">Album</th>
            <th class="max-w-xs">Artist</th>
            <th class="largeonly">rank</th>
            <th class="largeonly w-16">duration</th>
        </tr>
        </thead>
        <tbody>
        {#each paginatedSource as trackSelection, i}
            {@const row=trackSelection.track}
            <tr class={computeRowClass(trackSelection)}
                class:!text-red-500={!row.readable}
            >
                <Td>
                    <input type="checkbox" class="checkbox"
                           bind:checked={trackSelection.selected}
                    />
                </Td>
                <Td class="largeonly"><span>{i + 1}</span></Td>
                <Td justify="start">
                    <AudioPlayer src={row?.preview} enabled={row?.readable}/>
                    <a href={row.link} title="open track in Deezer web interface">
                        <span class="whitespace-normal">{row.title}</span>
                    </a>
                </Td>
                <Td justify="start">
                    <TrackSelectionComponent
                            addTitle="add all album titles to the playlist"
                            removeTitle="deselect all album titles from the playlist"
                            onAdd={()=> addAlbumTracks(row.album, playlistState.trackSelections)}
                            onRemove={()=> removeAlbumTracks(row.album.id, playlistState.trackSelections)}>
                        <a href="https://www.deezer.com/album/{row.album.id}"
                           title="open album in Deezer web interface">
                            <HorizontalSpan>
                                <img class="largeonly" src={row.album.cover_small} alt="album cover"/>
                                <span class="whitespace-normal">{row.album.title}</span>
                            </HorizontalSpan>
                        </a>
                    </TrackSelectionComponent>
                </Td>
                <Td justify="start">
                    <TrackSelectionComponent
                            addTitle="add all artist titles to the playlist"
                            removeTitle="deselect all artist titles from the playlist"
                            onAdd={()=> addArtistTracks(row.artist, playlistState.trackSelections,toastStore)}
                            onRemove={()=> removeArtistTracks(row.artist.id, playlistState.trackSelections)}>
                        <a href={row.artist.link} title="open artist in Deezer web interface">
                            <HorizontalSpan>
                                <img class="largeonly" src={getArtist(row, artists)?.picture_small} alt="artist"/>
                                <span class="whitespace-normal">{row.artist.name}</span>
                            </HorizontalSpan>
                        </a>
                    </TrackSelectionComponent>

                </Td>

                <Td class="largeonly" title={row.rank}>
                    <Ratings value={5*row.rank/maxRank} max={5} regionIcon="!m-0">
                        {#snippet empty()}
                            <IconStarEmpty/>
                        {/snippet}
                        {#snippet half()}
                            <IconStarHalf/>
                        {/snippet}
                        {#snippet full()}
                            <IconStarFull/>
                        {/snippet}
                    </Ratings>
                </Td>
                <Td class="largeonly">{shortEnglishHumanizer(row.duration * 1000)}
                    <span class="grow"></span>
                </Td>
            </tr>
        {/each}

        </tbody>
    </table>
    <Paginator
            bind:settings={tracksPage}
            showFirstLastButtons={true}
            showPreviousNextButtons={true}
    />
</div>

<style>
</style>