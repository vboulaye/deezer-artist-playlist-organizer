import type { Session } from 'svelte-kit-cookie-session';

import 'unplugin-icons/types/svelte';

interface SessionData {
    token?: {
        access_token?: string,
        expires: number
        expiresOn: string // date time
    }
    user?: {
        id: number
        name: string
        picture: string
        lang: string
    }
    redirectPath?: string
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            session: Session<SessionData>
        }

         interface PageData {
             session: SessionData;
         }
        // interface Platform {}
    }
}

export {};
