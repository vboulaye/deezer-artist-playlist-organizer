import {UserCookie} from "$lib/CookieManager";
import type {LayoutLoad} from "./$types"

export const prerender = 'auto'

export const load: LayoutLoad = async ({url}) => {
    // const accessToken = TokenCookie.get()
    const currentUser = UserCookie.get();
    // console.log({accessToken})
    // console.log({currentUser})
    return {
        currentUser: currentUser,
        pathname: url.pathname,
    }
}