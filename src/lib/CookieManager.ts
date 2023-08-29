import type {Cookies} from "@sveltejs/kit";
import JsCookies from "js-cookie"
import type {CookieAttributes} from "js-cookie"

const opts = {path: "/"};

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


export const RedirectCookie = new CookieManager<string>(COOKIE_PREFIX + 'redirect',
    {
        sameSite: 'strict',
    })
