import {TokenCookie} from "$lib/CookieManager";
import type {CurrentUser} from "$lib/DeezerApiModel";
import {callDeezer} from "$lib/DeezerCall";
import type {LayoutLoad} from "./$types"

export const prerender = 'auto'

function getCurrentUser() {
    if (TokenCookie.get()) {
        return callDeezer<CurrentUser>({apiPath: "/user/me"})
    }
    return undefined;
}

export const load: LayoutLoad = async ({url}) => {
    return {
        currentUser: getCurrentUser(),
        pathname: url.pathname,
    }
}