<script lang="ts">
    import {page} from "$app/stores"

</script>

<h1>playlists to {$page.data.session?.token?.access_token}</h1>
<pre>
    { JSON.stringify({pageData: $page.data.playlists}, null, 2)}
</pre>
