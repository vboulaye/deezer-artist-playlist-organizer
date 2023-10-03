<script lang="ts">
    // from https://github.com/hazg/svelte-dynamic-iconify/blob/master/src/icon.svelte
    import Iconify from '@iconify/iconify';
    import { onMount } from 'svelte'

    export let name:string

    onMount(async () => {
        if(!name) return;
        Iconify.preloadImages([name])
        document.addEventListener('IconifyAddedIcons', function() {
            iconData = Iconify.getSVGObject(name)
            iconExists = Iconify.iconExists(name)
        });

    });

    $: iconData = name?Iconify.getSVGObject(name):false
    $: iconExists = name?Iconify.iconExists(name):false

</script>

<span class="iconify">
{#if iconExists}
  <svg {...Object.assign({}, iconData.attributes, $$props)}>
    {@html iconData.body }
  </svg>
{/if}
</span>

<style>
    svg{
        height: auto;
    }
</style>