<script lang="ts">

    import {browser} from "$app/environment";
    import {page} from "$app/stores";
    import {env} from "$env/dynamic/public";
    import {RedirectCookie, TokenCookie} from "$lib/CookieManager";
    import {DeezerConfig} from "$lib/DeezerConfig";

    TokenCookie.remove()

    const deezerAuthorizationUrl = DeezerConfig.AUTHORIZATION_URL
    const deezerApplicationId = env.PUBLIC_DEEZER_ID
    const redirectUrl = `${env.PUBLIC_ORIGIN}/auth/callback`;
    const permissions = [
        "basic_access",
        "email",
        "manage_library",
        "delete_library",
        "listening_history",
        "manage_community",
        "offline_access",
    ].join(',')
    const authorizationUrl = `${deezerAuthorizationUrl}?app_id=${deezerApplicationId}&redirect_uri=${redirectUrl}&perms=${permissions}&output=json&response_type=token`

    if (browser) {
        const referrer = document.referrer;
        if (referrer) {
            const referrerUrl = new URL(referrer);
            if (referrerUrl.host === $page.url.host) {
                console.log("set redriect to " + referrerUrl.pathname)
                RedirectCookie.set(referrerUrl.pathname)
            }
        }

        document.location.href = authorizationUrl
    }


</script>

signin...