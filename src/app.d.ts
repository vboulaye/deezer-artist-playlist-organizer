interface Session {
    token?: {
        access_token?: string,
        expires: number
    }
    user?: {
        id: number
        name: string
        picture: string
        lang: string
    }
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            session: Session
        }

        // interface PageData {}
        // interface Platform {}
    }
}

export {};
