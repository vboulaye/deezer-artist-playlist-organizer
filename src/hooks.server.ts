import {getCookie} from "$lib/CookieManager";
import type {Handle} from '@sveltejs/kit';
import {redirect} from '@sveltejs/kit';
import {sequence} from '@sveltejs/kit/hooks';

const authorization: Handle = async ({event, resolve}) => {

    if (!event.locals.session) {
        event.locals.session= {}
    }
    const session =  event.locals.session;
    console.log({session})


    const token = getCookie(event.cookies, 'deezer-artist-playlist-organizer-token');
    console.log({accessToken: token})
    session.token=token

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
    authorization,
);


