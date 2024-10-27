<script lang="ts">

    import {playlistState} from "./playlistState.svelte";

    let {value = $bindable(), ...props} = $props()

</script>

<input class="input" type="text" bind:value={value} disabled={!playlistState.isUpdatable} {...props}/>
