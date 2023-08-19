<script lang="ts">
    import {page} from "$app/stores"

    // Your selected Skeleton theme:
    import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    // Finally, your application's global stylesheet (sometimes labeled 'app.css')
    import '../app.postcss';
    import {AppShell, AppBar, Toast} from "@skeletonlabs/skeleton";
    import LoginStatus from "./LoginStatus.svelte";

    let showSession = false
</script>

<AppShell>
    <svelte:fragment slot="header">

        <AppBar gridColumns="grid-cols-3" slotLead="place-content-start" slotTrail="place-content-end">
            <svelte:fragment slot="lead">(icon)</svelte:fragment>
            <nav>
                <ul class="navItems">
                    <li class="navItem"><a href="/">Home</a></li>
                    <li class="navItem"><a href="/playlists">Playlists</a></li>
                    <li class="navItem"><a href="#showSession" on:click={()=>showSession=!showSession}>{showSession ? 'hide session' : 'show session'}</a></li>
                </ul>
            </nav>

            <svelte:fragment slot="trail">
                <LoginStatus/>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
<!--    <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>-->

<!--    <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>-->
    <!-- (pageHeader) -->
    <!-- Router Slot -->
    <slot/>

    {#if showSession}
        <pre id="showSession">
            { JSON.stringify($page.data.session, null, 2)}
        </pre>
    {/if}
    <!-- ---- / ---- -->
    <!-- (pageFooter) -->
    <!-- (footer) -->
</AppShell>

<Toast/>

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
