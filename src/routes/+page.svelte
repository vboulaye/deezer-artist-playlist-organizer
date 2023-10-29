<script lang="ts">

    import {goto, invalidateAll} from "$app/navigation";
    import {base} from "$app/paths";
    import {page} from "$app/stores";

    if ($page.data.currentUser) {
        goto(base+"/playlists")
    }

</script>
{#if !$page.data.currentUser}
    <div class="flex place-content-center items-center">

        <span class=" grid grid-cols-1 justify-items-center gap-y-4  ">
            <h1 class="h1">Welcome to the Deezer Playlist Organizer!</h1>
            <p class="h4">Please sign-in using your Deezer Account in order to view/edit your playlists.</p>
            <a href="{base}/auth/signin" class="btn variant-filled-primary" data-sveltekit-preload-data="off" >
                Sign in
            </a>
        </span>
    </div>

{/if}