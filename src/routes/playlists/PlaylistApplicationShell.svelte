<script lang="ts">
    import {AppShell} from '@skeletonlabs/skeleton';
    import type {Snippet} from "svelte";

    interface Props {
        sidebarLeft?: Snippet;
        sidebarRight?: Snippet;
        pageHeader?: Snippet;
        footer?: Snippet;
        header?: Snippet;
        children?: Snippet;
    }

    let {
        sidebarLeft,
        sidebarRight,
        pageHeader,
        footer,
        header,
        children
    }: Props = $props();
</script>
<!--slotSidebarLeft="mx-2 h-100vh overflow-scroll w-0 lg:w-1/5"-->
<!--slotSidebarRight="mx-2 h-100vh overflow-scroll w-0 lg:w-1/5"-->

<AppShell slotPageContent="overflow-scroll">
    {@render sidebarLeft?.()}
    {@render sidebarRight?.()}
    {@render pageHeader?.()}
    {@render footer?.()}
    {@render header?.()}
    {@render children?.()}
</AppShell>

<style>

</style>