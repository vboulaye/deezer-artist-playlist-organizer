<script lang="ts">

    import {goto} from "$app/navigation";
    import {base} from "$app/paths";
    import {page} from "$app/stores";

    if ($page.data.currentUser) {
        goto(base+"/playlists")
    }

</script>
{#if !$page.data.currentUser}
    <h1>Welcome to the Deezer playlist Organizer</h1>
    <p>Please signin using your Deezer Account in order to view/edit your playlists.</p>
{/if}