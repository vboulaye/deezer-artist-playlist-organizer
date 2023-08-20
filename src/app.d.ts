import type {CurrentUser} from "$lib/CookieManager";

import 'unplugin-icons/types/svelte';


// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
        }

         interface PageData {
             currentUser?: CurrentUser;
         }
        // interface Platform {}
    }
}

export {};
