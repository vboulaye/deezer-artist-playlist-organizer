<script lang="ts">
    import {page} from "$app/stores";
    import {TokenCookie} from "$lib/CookieManager";

    const token = TokenCookie.get();
</script>


<span class="signedInStatus">
    <span class="nojs-show loaded flex space-x-4">
        {#if $page.data.currentUser && token}
            {#if $page.data.currentUser?.picture}
            <span
                    style="background-image: url('{$page.data.currentUser.picture}')"
                    class="avatar"
            />
            {/if}
            <span class="signedInText">
            <small>Signed in as</small><br/>
            <strong>{$page.data.currentUser?.name}</strong>
          </span>
            <a href="/auth/signout" class="btn btn-sm variant-ghost-tertiary" data-sveltekit-preload-data="off">Sign out</a>
        {:else}
            <span class="notSignedInText">You are not signed in</span>
            <a href="/auth/signin" class="btn btn-sm variant-ghost-primary" data-sveltekit-preload-data="off">Sign in</a>
        {/if}
    </span>
</span>

<style>


    /*    .signedInStatus {*/
    /*        display: block;*/
    /*        width: 100%;*/
    /*    }*/

    /*    .nojs-show {*/
    /*        opacity: 1;*/
    /*        top: 0;*/
    /*    }*/

    /*    .loaded {*/
    /*        position: relative;*/
    /*        top: 0;*/
    /*        opacity: 1;*/
    /*        overflow: hidden;*/
    /*        border-radius: 0 0 0.6rem 0.6rem;*/
    /*        padding: 0.6rem 1rem;*/
    /*        margin: 0;*/
    /*        background-color: rgba(0, 0, 0, 0.05);*/
    /*        transition: all 0.2s ease-in;*/
    /*    }*/

    /*    .signedInText,*/
    /*    .notSignedInText {*/
    /*        position: absolute;*/
    /*        padding-top: 0.8rem;*/
    /*        left: 1rem;*/
    /*        right: 6.5rem;*/
    /*        white-space: nowrap;*/
    /*        text-overflow: ellipsis;*/
    /*        overflow: hidden;*/
    /*        display: inherit;*/
    /*        z-index: 1;*/
    /*        line-height: 1.3rem;*/
    /*    }*/

    /*    .signedInText {*/
    /*        padding-top: 0rem;*/
    /*        left: 4.6rem;*/
    /*    }*/

        .avatar {
            border-radius: 2rem;
            float: left;
            height: 2.8rem;
            width: 2.8rem;
            background-color: white;
            background-size: cover;
            background-repeat: no-repeat;
        }

    /*    .button,*/
    /*    .buttonPrimary {*/
    /*        float: right;*/
    /*        margin-right: -0.4rem;*/
    /*        font-weight: 500;*/
    /*        border-radius: 0.3rem;*/
    /*        cursor: pointer;*/
    /*        font-size: 1rem;*/
    /*        line-height: 1.4rem;*/
    /*        padding: 0.7rem 0.8rem;*/
    /*        position: relative;*/
    /*        z-index: 10;*/
    /*        background-color: transparent;*/
    /*        color: #555;*/
    /*    }*/

    /*    .buttonPrimary {*/
    /*        background-color: #346df1;*/
    /*        border-color: #346df1;*/
    /*        color: #fff;*/
    /*        text-decoration: none;*/
    /*        padding: 0.7rem 1.4rem;*/
    /*    }*/

    /*    .buttonPrimary:hover {*/
    /*        box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.2);*/
    /*    }*/

</style>
