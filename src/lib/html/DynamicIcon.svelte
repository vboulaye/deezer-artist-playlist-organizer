<script lang="ts">
  import { run } from 'svelte/legacy';

    // from https://github.com/hazg/svelte-dynamic-iconify/blob/master/src/icon.svelte
    import Iconify from '@iconify/iconify';
    import { onMount } from 'svelte'

  interface Props {
    name: string;
    [key: string]: any
  }

  let { ...props }: Props = $props();

    onMount(async () => {
        if(!props.name) return;
        Iconify.preloadImages([props.name])
        document.addEventListener('IconifyAddedIcons', function() {
            iconData = Iconify.getSVGObject(props.name)
            iconExists = Iconify.iconExists(props.name)
        });

    });

    let iconData;
  run(() => {
    iconData = props.name?Iconify.getSVGObject(props.name):false
  });
    let iconExists;
  run(() => {
    iconExists = props.name?Iconify.iconExists(props.name):false
  });

</script>

<span class="iconify">
{#if iconExists}
  <svg {...Object.assign({}, iconData.attributes, props)}>
    {@html iconData.body }
  </svg>
{/if}
</span>

<style>
    svg{
        height: auto;
    }
</style>