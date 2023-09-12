<script lang="ts">
    import {AppShell} from '@skeletonlabs/skeleton';
</script>

<AppShell slotSidebarLeft="mx-2 h-100vh overflow-scroll w-0 lg:w-1/5"
          slotSidebarRight="mx-2 h-100vh overflow-scroll w-0 lg:w-1/5"
          slotPageContent="h-100vh overflow-scroll"
>
    <svelte:fragment slot="sidebarLeft">
        <slot name="sidebarLeft"/>
    </svelte:fragment>
    <svelte:fragment slot="sidebarRight">
        <slot name="sidebarRight"/>
    </svelte:fragment>

    <slot/>
</AppShell>

<style>

</style>