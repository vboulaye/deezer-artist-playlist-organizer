<script lang="ts">
    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import {callDeezer} from "$lib/DeezerCall";
    import DeezerAutocomplete from "$lib/html/DeezerAutocomplete.svelte";
    import type {PaginatedResult} from "$lib/PaginationUtils";
    import type {AutocompleteOption} from "@skeletonlabs/skeleton";
    import {derived, writable} from "svelte/store";
    import type {Writable} from "svelte/store";
    import ArtistSelectionComponent from "./ArtistSelectionComponent.svelte";

    interface Props {
        onArtistSelection: (artist: DeezerArtist) => void;
    }

    let {onArtistSelection}: Props = $props()

    const artistSearch = writable("")

    const artistsFound = derived<Writable<string>, AutocompleteOption[]>(artistSearch, ($artistSearch, set) => {
        if (!$artistSearch) {
            set([])
            return
        }
        callDeezer<PaginatedResult<DeezerArtist>>({
            apiPath: `/search/artist`,
            searchParams: {q: $artistSearch}
        }).then(searchResult => {
            const options = searchResult.data.map(artist => ({
                label: `<span class="flex justify-between w-full items-center">
<span class="flex items-center"> <img src="${artist.picture_small}" class="mx-2"/>${artist.name}</span>
 <button class="btn-icon btn-icon-sm variant-outline-tertiary" title="add all artist titles to the playlist">add</button></span>`,
                value: artist.id,
                meta: artist
            }));
            set(options)
        });
    })

</script>

<span class="my-4">

    <input class="input" type="search" name="demo" bind:value={$artistSearch} placeholder="Search..."/>
    <span class="card w-full max-h-fit  p-4 overflow-y-auto inline-block" tabindex="-1">
        <DeezerAutocomplete bind:input={$artistSearch} options={$artistsFound}>
            {#snippet optionButton({option})}
                    <ArtistSelectionComponent artist={option.meta} {onArtistSelection}/>
            {/snippet}
        </DeezerAutocomplete>
    </span>

</span>