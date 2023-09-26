<script lang="ts">
    import {AppShell} from '@skeletonlabs/skeleton';
</script>
<!--slotSidebarLeft="mx-2 h-100vh overflow-scroll w-0 lg:w-1/5"-->
<!--slotSidebarRight="mx-2 h-100vh overflow-scroll w-0 lg:w-1/5"-->

<AppShell slotPageContent="h-100vh overflow-scroll"
>
    <svelte:fragment slot="sidebarLeft">
        <slot name="sidebarLeft"/>
    </svelte:fragment>
    <svelte:fragment slot="sidebarRight">
        <slot name="sidebarRight"/>
    </svelte:fragment>
    <svelte:fragment slot="pageHeader">
        <slot name="pageHeader"/>
    </svelte:fragment>
    <svelte:fragment slot="footer">
        <slot name="footer"/>
    </svelte:fragment>
    <svelte:fragment slot="header">
        <slot name="header"/>
    </svelte:fragment>

    <slot/>
</AppShell>

<style>

</style>