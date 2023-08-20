<script lang="ts">

    import {goto, invalidateAll} from "$app/navigation";
    import {page} from "$app/stores";
    import {RedirectCookie, TokenCookie, UserCookie} from "$lib/CookieManager";
    import {callDeezer} from "$lib/DeezerCall";


    async function doLogin(access_token: string) {
        TokenCookie.set(access_token)
        await invalidateAll()

        await callDeezer({apiPath: "/user/me", accessToken: access_token})
            .then(userResponse => {

                const {id, name, picture, lang} = userResponse as any
                const user = {
                    id, name, picture, lang
                }
                UserCookie.set(user)
            });

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