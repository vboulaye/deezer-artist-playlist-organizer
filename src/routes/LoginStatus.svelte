<script lang="ts">
    import {base} from "$app/paths";
    import {page} from "$app/stores";
    import {invalidateAll} from "$app/navigation";


</script>

<span class="nojs-show flex space-x-12 justify-center place-items-center">
    {#if $page.data.currentUser}
        <a href="{base}/auth/signout" class="" data-sveltekit-preload-data="off" title="click here to sign out"
           onclick={()=>invalidateAll()}>
            <small class="flex">
                <span class="sr-only md:not-sr-only">Sign out:&nbsp;</span> {$page.data.currentUser?.name}
            </small>
        </a>
    {:else}
        <span class="notSignedInText">You are not signed in</span>
    {/if}
</span>

