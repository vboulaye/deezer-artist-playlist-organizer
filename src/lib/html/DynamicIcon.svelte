<script lang="ts">
    // from https://github.com/hazg/svelte-dynamic-iconify/blob/master/src/icon.svelte
    import Iconify from '@iconify/iconify';
    import {onMount} from 'svelte'

    interface Props {
        readonly name: string;
        [key: string]: any
    }

    let {...props}: Props = $props();
    const iconData = $derived(props.name ? Iconify.getSVGObject(props.name) : false);
    const iconExists = $derived(props.name ? Iconify.iconExists(props.name) : false);

    onMount(async () => {
        if (!props.name) return;
        Iconify.preloadImages([props.name])
        // document.addEventListener('IconifyAddedIcons', function () {
        //     iconData = Iconify.getSVGObject(props.name)
        //     iconExists = Iconify.iconExists(props.name)
        // });

    });



</script>

<span class="iconify">
{#if iconExists}
  <svg {...iconData.attributes}  {...props}>
    {@html iconData.body }
  </svg>
{/if}
</span>

<style>
    svg {
        height: auto;
    }
</style>