<script lang="ts">
    import {AppShell} from '@skeletonlabs/skeleton';
    interface Props {
        sidebarLeft?: import('svelte').Snippet;
        sidebarRight?: import('svelte').Snippet;
        pageHeader?: import('svelte').Snippet;
        footer?: import('svelte').Snippet;
        header?: import('svelte').Snippet;
        children?: import('svelte').Snippet;
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

<AppShell slotPageContent="overflow-scroll"
>
    {#snippet sidebarLeft()}
    
            {@render sidebarLeft?.()}
        
    {/snippet}
    {#snippet sidebarRight()}
    
            {@render sidebarRight?.()}
        
    {/snippet}
    {#snippet pageHeader()}
    
            {@render pageHeader?.()}
        
    {/snippet}
    {#snippet footer()}
    
            {@render footer?.()}
        
    {/snippet}
    {#snippet header()}
    
            {@render header?.()}
        
    {/snippet}

    {@render children?.()}
</AppShell>

<style>

</style>