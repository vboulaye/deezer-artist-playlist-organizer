<script lang="ts">

    import {goto} from "$app/navigation";
    import {RedirectCookie, TokenCookie, UserCookie} from "$lib/CookieManager";


    UserCookie.remove()
    TokenCookie.remove()
    RedirectCookie.remove()

    goto("/", {invalidateAll: true})

</script>

signout...