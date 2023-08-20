<script lang="ts">
    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';

    // Your selected Skeleton theme:
    import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
    // Finally, your application's global stylesheet (sometimes labeled 'app.css')
    import '../app.postcss';
    import {beforeNavigate} from "$app/navigation";
    import {navigating} from "$app/stores";

    import {AppBar, AppShell, Toast} from "@skeletonlabs/skeleton";
    import IconLogo from '~icons/ph/playlist-bold'
    import LoadingVeil from "./LoadingVeil.svelte";

    import LoginStatus from "./LoginStatus.svelte";
    import PageTransition from "./PageTransition.svelte";

    export let data
    beforeNavigate(x => {

    })

</script>

<LoadingVeil/>

<AppShell>
    <svelte:fragment slot="header">

        <AppBar gridColumns="grid-cols-3" slotLead="place-content-start" slotTrail="place-content-end">
            <svelte:fragment slot="lead">
                <a href="/">
                    <IconLogo/>
                </a>
            </svelte:fragment>
            <nav>
                <ul class="navItems">
                    <li class="navItem"><a href="/">Home</a></li>
                    <li class="navItem"><a href="/playlists">Playlists</a></li>
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
