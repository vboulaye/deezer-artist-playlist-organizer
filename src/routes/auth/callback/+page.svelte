<script lang="ts">

    import {goto, invalidateAll} from "$app/navigation";
    import {page} from "$app/stores";
    import {RedirectCookie, TokenCookie} from "$lib/CookieManager";


    async function doLogin(access_token: string) {
        TokenCookie.set(access_token)
        await invalidateAll()

        const redirectPath = RedirectCookie.get() || "/";
        RedirectCookie.remove()
        await goto(redirectPath, {invalidateAll: true})
    }

    const hash = $page.url.hash;
    const tokenParam = "#access_token=";
    if (hash.includes(tokenParam)) {
        const access_token = hash.substring(hash.indexOf(tokenParam) + tokenParam.length, hash.indexOf("&"))
        console.log("callback access token: ", {access_token})

        Promise.resolve(access_token)
            .then(doLogin)

    }
</script>

callback from deezer