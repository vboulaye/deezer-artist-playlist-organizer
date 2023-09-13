<script lang="ts">
    import type {DeezerArtist} from "$lib/DeezerApiModel";
    import {callDeezer} from "$lib/DeezerCall";
    import DeezerAutocomplete from "$lib/html/DeezerAutocomplete.svelte";
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";
    import type {PaginatedResult} from "$lib/PaginationUtils";
    import type {AutocompleteOption} from "@skeletonlabs/skeleton";
    import {createEventDispatcher} from "svelte";
    import {derived, writable} from "svelte/store";
    import type {Writable} from "svelte/store";
    import ArtistSelectionComponent from "./ArtistSelectionComponent.svelte";


    const artistSearch = writable("")

    const dispatch = createEventDispatcher<DeezerArtist>();

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


<span class=" my-4">
    <span class="mb-2">
        <HorizontalSpan><h4>Search Artist </h4></HorizontalSpan>
    </span>

    <input class="input" type="search" name="demo" bind:value={$artistSearch} placeholder="Search..."/>
    <span class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto inline-block" tabindex="-1">
        <DeezerAutocomplete bind:input={$artistSearch} options={$artistsFound}>
            <svelte:fragment slot="optionButton" let:option={artistOption}>
                <ArtistSelectionComponent artist={artistOption.meta}
                                          on:click={()=> dispatch('artistSelection', artistOption.meta)}/>
            </svelte:fragment>
        </DeezerAutocomplete>
    </span>

</span>