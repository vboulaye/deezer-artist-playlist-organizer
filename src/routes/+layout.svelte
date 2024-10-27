<script lang="ts">

    import {base} from '$app/paths'
    import {page} from "$app/stores";
    import HorizontalSpan from "$lib/html/HorizontalSpan.svelte";

    import {AppBar, initializeStores, LightSwitch, Toast} from "@skeletonlabs/skeleton";
    import IconPlayList from '~icons/ph/playlist-bold'
    import IconMusicNotePlus from '~icons/ph/music-notes-plus-bold'

    // Finally, your application's global stylesheet (sometimes labeled 'app.css')
    import '../app.postcss';
    import {initToolbarStore} from "./contextKeys";
    import LoadingVeil from "./LoadingVeil.svelte";

    import LoginStatus from "./LoginStatus.svelte";
    import PageTransition from "./PageTransition.svelte";
    import type {Page} from "@sveltejs/kit";

    initializeStores();

    const toolbarStore = initToolbarStore([
        {
            href: base + "/",
            title: "Home",
            icon: IconPlayList,
            visible: (page:Page) => !page.data.currentUser
        },
        {
            href: base + "/playlists",
            title: "My playlists",
            icon: IconPlayList,
            visible: (page:Page) => page.data.currentUser
        },
        {
            href: base + "/playlists/edit?id=NEW",
            title: "Create new playlist",
            icon: IconMusicNotePlus,
            visible: (page:Page) => page.data.currentUser
        },
    ]);

    let { data, children } = $props();


</script>

<LoadingVeil/>
<Toast/>
{#if !$page.data.currentUser}
    <a href="https://github.com/vboulaye/deezer-artist-playlist-organizer" class="xtralargeonly absolute left-0 top-0">
        <img decoding="async" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149" alt="Fork me on GitHub" loading="lazy" data-recalc-dims="1">
    </a>
{/if}
<div class="grid grid-cols-[1fr_minmax(400px,1200px)_1fr]">
    <span></span>
    <span class="">

       <AppBar >
            {#snippet lead()}
                    
    <!--                <a href="{base}/">-->
                    <!--                    <IconPlayList/>-->
                    <!--                </a>-->

                    <!--               <ul class="navItems">-->
                    <span class="flex gap-x-2">
                    <!--{#if $page.data.currentUser}-->
                        <!--        <a href="{base}/playlists" title="My playlists"><HorizontalSpan><IconPlayList/><span-->
                        <!--                class="sr-only md:not-sr-only">My playlists</span> </HorizontalSpan></a>-->
                        <!--        <a href="{base}/playlists/NEW" data-sveltekit-preload-data="off" title="Create new playlist"><HorizontalSpan><IconMusicNotePlus/><span-->
                        <!--                class="sr-only md:not-sr-only">Create new Playlist</span></HorizontalSpan></a>-->
                        <!--    {:else }-->
                        <!--        <a href="{base}/"><IconPlayList/></a>-->
<!--                                {/if}-->

                        {#each $toolbarStore as toolbarItem}
                            {#if !toolbarItem.visible || toolbarItem.visible($page)}
                                {#if toolbarItem.href}
                                     <a href="{toolbarItem.href}" title={toolbarItem.title} data-sveltekit-preload-data="off">
                                         <HorizontalSpan>
                                             <toolbarItem.icon/>
                                             <span class="sr-only md:not-sr-only">{toolbarItem.title}</span>
                                         </HorizontalSpan>
                                     </a>
                                {/if}
                                {#if toolbarItem.onclick}
                                     <button onclick={toolbarItem.onclick}
                                             type="button"
                                             title={toolbarItem.title}
                                             class="disabled:italic disabled:opacity-50"
                                             disabled={toolbarItem.disabled && toolbarItem.disabled($page)}
                                     >
                                         <HorizontalSpan>
                                             <toolbarItem.icon/>
                                             <span class="sr-only md:not-sr-only">{toolbarItem.title}</span>
                                         </HorizontalSpan>
                                     </button>
                                {/if}
                            {/if}
                        {/each}
                    </span>
                
                    {/snippet}
           <!--{#if $page.params?.id}-->
           <!--        <a href="{base}/playlists" title="My playlists"><HorizontalSpan><IconPlayList/><span class="sr-only md:not-sr-only">My playlists</span> </HorizontalSpan></a>-->
           <!--{/if}-->

           <!--            <nav>-->
           <!--                <ul class="navItems">-->
           <!--                    {#if $page.data.currentUser}-->
           <!--                        <li class="navItem"><a href="{base}/playlists">My Playlists</a></li>-->
           <!--                        <li class="navItem"><a href="{base}/playlists/NEW" data-sveltekit-preload-data="off">Create new Playlist</a></li>-->
           <!--                    {:else }-->
           <!--&lt;!&ndash;                        <li class="navItem"><a href="{base}/">Home</a></li>&ndash;&gt;-->
           <!--                    {/if}-->
           <!--                </ul>-->
           <!--            </nav>-->
            {#snippet trail()}
                    
                    <LoginStatus/>
                    <LightSwitch/>
                
                    {/snippet}
    </AppBar>
        <!--    <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>-->

        <PageTransition pathname={data.pathname}>
            <!--    <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>-->
            <!-- (pageHeader) -->
            <!-- Router Slot -->
            {@render children?.()}
        </PageTransition>
    </span>

    <span></span>


</div>
