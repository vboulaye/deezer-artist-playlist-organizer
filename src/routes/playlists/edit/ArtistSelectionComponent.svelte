<script lang="ts">
    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import AddIcon from '~icons/ph/plus-circle-bold';

    export let artist: DeezerArtist

    let mode = ""
</script>

<span class="flex justify-between w-full items-center py-1 cursor-pointer {mode}"
      on:pointerenter={()=>mode="variant-ghost-success"}
      on:pointerleave={()=>mode=""}
      on:click >
    <span class="flex items-center w-1/3">
        <img src="{artist.picture_small}" alt="artist" class="mx-2"/>
        {artist.name}
    </span>
    <span class="w-1/4">
       <small>{artist.nb_album} albums</small>
    </span>
    <span class="btn-group-vertical btn btn-sm gap-y-1">
        <button class="!p-0"
                title="add all artist titles to the playlist"
                >
            <AddIcon/>
        </button>
    </span>
</span>