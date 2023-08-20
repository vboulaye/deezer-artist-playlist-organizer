import type {Cookies} from "@sveltejs/kit";
import JsCookies from "js-cookie"
import type {CookieAttributes} from "js-cookie"

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

class CookieManager<T> {
    constructor(
        private name: string,
        private options: CookieAttributes
    ) {
    }

    get(): T | undefined {
        const jsonString = JsCookies.get(this.name);
        if (!jsonString) {
            return undefined
        }
        return JSON.parse(jsonString) as T
    }

    set(value: T) {
        JsCookies.set(
            this.name,
            JSON.stringify(value),
            this.options,
        )
    }

    remove() {
        JsCookies.remove(this.name, this.options)
    }
}

const COOKIE_PREFIX = 'deezer-artist-playlist-organizer-'
export const TokenCookie = new CookieManager<string>(COOKIE_PREFIX + 'token',
    {
        expires: 30,
        sameSite: 'strict',
    })

export interface CurrentUser {
    id: number
    name: string
    picture: string
    lang: string
}

export const UserCookie = new CookieManager<CurrentUser>(COOKIE_PREFIX + 'user',
    {
        expires: 30,
        sameSite: 'strict',
    })

export const RedirectCookie = new CookieManager<string>(COOKIE_PREFIX + 'redirect',
    {
        sameSite: 'strict',
    })
