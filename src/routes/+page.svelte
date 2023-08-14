<script lang="ts">
    import {page} from "$app/stores"
    import {callDeezer} from "$lib/DeezerCall";
    import {onMount} from "svelte";
    import {writable} from "svelte/store";

    let playlists = writable({})
    onMount(async () => {
        console.log("call")
        if ($page.data.session?.token?.access_token) {
            const playlistsResponse = await callDeezer({apiPath: `/user/${$page.data.session.user.id}/playlists`, accessToken: $page.data.session.token.access_token});
            $playlists = playlistsResponse.data;
        }
        console.log("call", $playlists)
    })
</script>


<h1>Welcome to {$page.data.session?.token?.access_token}</h1>
<pre>
{ JSON.stringify($page.data.session, null, 2)}

    { JSON.stringify({playlists: $playlists}, null, 2)}
</pre>
