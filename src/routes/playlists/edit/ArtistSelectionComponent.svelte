<script lang="ts">

    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import AddIcon from '~icons/ph/plus-circle-bold';

    interface Props {
        readonly artist: DeezerArtist;
        readonly onArtistSelection: (artist: DeezerArtist) => void;
    }

    let {artist, onArtistSelection}: Props = $props();

    let mode = $state("")
</script>

<button type="button" class="button-icon flex justify-between w-full items-center py-1 cursor-pointer {mode}"
        onpointerenter={()=>mode="variant-ghost-success"}
        onpointerleave={()=>mode=""}
        onclick={()=>onArtistSelection(artist)}>
    <span class="flex items-center w-1/3">
        <img src="{artist.picture_small}" alt="artist" class="mx-2"/>
        {artist.name}
    </span>
    <span class="w-1/4">
       <small>{artist.nb_album} albums</small>
    </span>
    <span class="btn-group-vertical btn btn-sm gap-y-1">
        <span class="!p-0" title="add all artist titles to the playlist">
            <AddIcon/>
        </span>
    </span>
</button>