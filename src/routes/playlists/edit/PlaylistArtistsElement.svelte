<script lang="ts">

    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import RemoveIcon from '~icons/ph/minus-circle-bold';
    import AddIcon from '~icons/ph/plus-circle-bold';

    import type {TrackSelection} from "./trackSelection";
    import {addArtistTracks, getTrackCount, removeArtistTracks} from "./trackSelection";
    import type {ToastStore} from "@skeletonlabs/skeleton";


    interface Props {
        readonly topArtist: DeezerArtist;
        readonly trackSelections: TrackSelection[];
        readonly toastStore: ToastStore;
    }

    let { topArtist, trackSelections, toastStore }: Props = $props();

    let trackCount = $derived(getTrackCount(topArtist.id, trackSelections))

    let addHover = $state(false)
    let removeHover = $state(false)

    // $: {
    //     console.log({addHover, topArtist})
    // }
</script>

<li class:variant-ghost-success={addHover}
    class:variant-ghost-error={removeHover} >
    <span class="flex flex-row justify-between w-full items-center gap-x-2">
        <a href={topArtist.link} title="open artist in Deezer web interface" class="w-1/3">
              <HorizontalSpan>
                <img src={topArtist.picture_small} alt="{topArtist.name}"/>
                <span>{topArtist.name}</span>
              </HorizontalSpan>
        </a>
        <span class="w-1/4">
               <small title="artist has {trackCount} tracks in the playlist ">{trackCount} tracks in playlist</small>
        </span>
        <span class="w-1/4">
               <small >{topArtist.nb_album} albums</small>
        </span>
        <div class="btn-group-vertical btn btn-sm gap-y-1">
            <button class="!p-0"
                    title="add all artist titles to the playlist"
                    onmouseenter={()=>addHover=true}
                    onmouseleave={()=>addHover=false}
                    onclick={()=> addArtistTracks(topArtist, trackSelections,toastStore)}>
                <AddIcon/>
            </button>
            <button class="!p-0"
                    title="deselect all artist titles from the playlist"
                    class:text-gray-500={trackCount===0}
                    onmouseenter={()=>removeHover=true}
                    onmouseleave={()=>removeHover=false}
                    onclick={()=> removeArtistTracks(topArtist.id, trackSelections)}>
                <RemoveIcon/>
            </button>
        </div>

    </span>
</li>