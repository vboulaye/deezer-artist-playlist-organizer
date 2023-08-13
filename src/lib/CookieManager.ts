import type {Cookies} from "@sveltejs/kit";


const opts = {path: "/"};


export function setCookie(cookies: Cookies, cookie: string, value: unknown) {
    cookies.set(cookie, (JSON.stringify(value)), opts)
}

export function deleteCookie(cookies: Cookies, cookie: string) {
    cookies.delete(cookie, opts)
}

export function getCookie(cookies: Cookies, cookie: string) {
    const rawValue = cookies.get(cookie);
    if (rawValue) {
        return JSON.parse((rawValue))
    }
    return undefined
}