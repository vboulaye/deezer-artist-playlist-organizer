<script lang="ts">
    import {page} from "$app/stores";
</script>

<span class="signedInStatus">
    <span class="nojs-show loaded flex space-x-12 justify-center place-items-center">
        {#if $page.data.currentUser}
            <span class="flex space-x-4">
                {#if $page.data.currentUser?.picture}
                    <span style="background-image: url('{$page.data.currentUser.picture}')" class="avatar"/>
                {/if}
                <div>
                    <small>Signed in as</small><br/>
                    <strong>{$page.data.currentUser?.name}</strong>
                </div>
          </span>
            <a href="/auth/signout" class="" data-sveltekit-preload-data="off">Sign out</a>
        {:else}
            <span class="notSignedInText">You are not signed in</span>
            <a href="/auth/signin" class="" data-sveltekit-preload-data="off">Sign in</a>
        {/if}
    </span>
</span>

<style>

    .avatar {
        border-radius: 2rem;
        float: left;
        height: 2.8rem;
        width: 2.8rem;
        background-color: white;
        background-size: cover;
        background-repeat: no-repeat;
    }

</style>
