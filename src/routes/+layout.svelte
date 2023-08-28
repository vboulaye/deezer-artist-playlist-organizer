<script lang="ts">
    import { base } from '$app/paths'
    // Finally, your application's global stylesheet (sometimes labeled 'app.css')
    import '../app.postcss';
    import { page} from "$app/stores";

    import {AppBar, AppShell, Toast} from "@skeletonlabs/skeleton";
    import IconLogo from '~icons/ph/playlist-bold'
    import LoadingVeil from "./LoadingVeil.svelte";

    import LoginStatus from "./LoginStatus.svelte";
    import PageTransition from "./PageTransition.svelte";
    import { initializeStores } from '@skeletonlabs/skeleton';

    initializeStores();

    export let data

</script>

<LoadingVeil/>
<Toast/>

<AppShell>
    <svelte:fragment slot="header">

        <AppBar gridColumns="grid-cols-3" slotLead="place-content-start" slotTrail="place-content-end">
            <svelte:fragment slot="lead">
                <a href="{base}/">
                    <IconLogo/>
                </a>
            </svelte:fragment>
            <nav>
                <ul class="navItems">
                    {#if $page.data.currentUser}
                        <li class="navItem"><a href="{base}/playlists">Your Playlists</a></li>
                        <li class="navItem"><a href="{base}/playlists/NEW" data-sveltekit-preload-data="off">Create new Playlist</a></li>
                    {:else }
                        <li class="navItem"><a href="{base}/">Home</a></li>
                    {/if}
                </ul>
            </nav>

            <svelte:fragment slot="trail">
                <LoginStatus/>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <!--    <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>-->

    <PageTransition pathname={data.pathname}>
        <!--    <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>-->
        <!-- (pageHeader) -->
        <!-- Router Slot -->
        <slot/>
    </PageTransition>


    <!-- ---- / ---- -->
    <!-- (pageFooter) -->
    <!-- (footer) -->
</AppShell>

<style>

    .navItems {
        margin-bottom: 2rem;
        padding: 0;
        list-style: none;
    }

    .navItem {
        display: inline-block;
        margin-right: 1rem;
    }
</style>
