<script lang="ts">
    import RelinkTracksIcon from '~icons/ph/link-bold';

    export let disabled = false
</script>

<button class="btn variant-filled-tertiary" on:click|preventDefault
        disabled={disabled}
        title="try to find an equivalent of tracks that are not readable anymore in deezer (colored in red in the table)">
    <RelinkTracksIcon/>
    <span>fix non readable tracks</span>
</button>