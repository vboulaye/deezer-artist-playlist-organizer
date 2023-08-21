<script lang="ts">

    import {browser} from "$app/environment";
    import {goto} from "$app/navigation";
    import {base} from "$app/paths";
    import {RedirectCookie, TokenCookie, UserCookie} from "$lib/CookieManager";


    UserCookie.remove()
    TokenCookie.remove()
    RedirectCookie.remove()

    if (browser) {
        goto(base+"/", {invalidateAll: true})
    }

</script>

signout...