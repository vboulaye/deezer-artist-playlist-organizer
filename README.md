# DeePlO

A little app to manage the artists playlist in deezer.

You can use it here: https://deeplo.vboof.fr/

(It is a static site exposed as a github pages, there is not backend, it connects directly to the deezer api.)

# development

to test the auth, you need to get an app key from deezer (https://developers.deezer.com/myapps) :
and you need to expose the app on port 80.

you can use localhost + local reverse proxy for this:
```
sudo socat TCP-LISTEN:80,reuseaddr,fork,su=nobody TCP:127.0.0.1:5173
```

So I configure the application with:

- application domain: localhost
- redirect url: https://localhost/auth/callback
- tos url: https://localhost/tos

then store the application id  in variables in `.env` at the root of the project.
see .env.example for all the variables to be defined



icons come from iconify, mostly from https://icon-sets.iconify.design/ph                                                                                                                    
