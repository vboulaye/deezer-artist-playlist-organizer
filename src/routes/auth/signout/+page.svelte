<script lang="ts">

    import {browser} from "$app/environment";
    import {goto} from "$app/navigation";
    import {resolve} from "$app/paths";
    import {RedirectCookie, TokenCookie} from "$lib/CookieManager";


    TokenCookie.remove()
    RedirectCookie.remove()

    if (browser) {
        setTimeout(() => {
            goto(resolve("/"), {invalidateAll: true})
        }, 1)
    }

</script>

signout...
