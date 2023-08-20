import {TokenCookie, UserCookie} from "$lib/CookieManager";
import type {LayoutLoad} from "./$types"

export const load: LayoutLoad = async () => {
    const accessToken = TokenCookie.get()
    const currentUser = UserCookie.get();
    console.log({accessToken})
    console.log({currentUser})
    return {
        currentUser: currentUser
    }
}