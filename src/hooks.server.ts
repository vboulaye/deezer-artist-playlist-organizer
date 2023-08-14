import {env} from "$env/dynamic/private";
import {getCookie} from "$lib/CookieManager";
import type {Handle} from '@sveltejs/kit';
import {sequence} from '@sveltejs/kit/hooks';

import {handleSession} from 'svelte-kit-cookie-session';

const sessionHandle = handleSession({
    // Optional initial state of the session, default is an empty object {}
    // init: (event) => ({
    // 	views: 0
    // }),
    // chunked: true // Optional, default is false - if true, the session will be chunked into multiple cookies avoiding the browser limit for cookies
    secret: env.AUTH_SECRET
});

const authorization: Handle = async ({event, resolve}) => {

    const session = event.locals.session;
    console.log({session})


    // // Protect any routes under /authenticated
    // if (event.url.pathname.startsWith('/ops')) {
    //     if (!session) {
    //         throw redirect(303, '/auth/signin');
    //     }
    // }

    // If the request is still here, just proceed as normally
    return resolve(event);
};

export const handle = sequence(
    sessionHandle,
    authorization,
);


