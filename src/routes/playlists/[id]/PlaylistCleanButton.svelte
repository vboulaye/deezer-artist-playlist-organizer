<script lang="ts">
    import ClearPlaylistIcon from '~icons/ph/backspace-bold';

    export let disabled = false

</script>

<button class=" variant-filled-tertiary" on:click|preventDefault
        {disabled}
        title="remove de-selected new tracks" >
    <ClearPlaylistIcon/>
    <span>remove de-selected tracks</span>
</button>