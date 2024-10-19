# Boilerplate

I like to use Firebase, NextJs, and TailwindCSS for my projects. This is a boilerplate that I use to get started quickly.

By just `git clone` this repo you should be able to have a working nextjs app in a few minutes (or seconds if you have a good computer). You then can focus on building your app rather than wasting time setting it up.

# Disclaimer

I am a noob in web dev, the advantage is that in 5 years I will understand my code because it's really simple. The disadvantage is that I am a really noob in web dev, but it's alright.

# Super fast setup

```bash
git clone https://github.com/MaximeDebarbat/Boilerplate.git
cd Boilerplate
touch client/.env.local
docker compose up client
```

# Libraries (main ones)

- [Firebase](https://firebase.google.com/) as a backend, db, filestore etc..
- [React](https://reactjs.org/) I use js, not typescript, typescript sucks (joking, I just never learned it)
- [NextJs](https://nextjs.org/) because it's cool
- [TailwindCSS](https://tailwindcss.com/) because who likes css
- [mailjet](https://www.mailjet.com/) (should I really justify)
- [shadcn/ui](https://ui.shadcn.com/) it just looks great

# Deployment

With docker. Simple, easy, and fast. On [railway.app](https://railway.app/).

There are 2 containers from 2 Dockerfiles, one for dev, one for deployment.

The dev container comes from `Dockerfile.dev` and the deployment container comes from `Dockerfile`.

I like to simplify all the builds etc.. using a docker compose file. The `docker-compose.yml` file is used to build the dev container and run the dev server.

## Dev

```bash
docker compose up client
```

## Deployment

```bash
docker compose up client-deploy
```

# Environment Variables

Of course, a `.env.local` file is required. You will mandatorily need the following variables:

```

# Firebase

NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

# Mailjet

MAILJET_API_KEY
MAILJET_SECRET_KEY

# Stripe (in .env.local, you should keep stripe test variables)

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
NEXT_PUBLIC_BASE_URL
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET

# Locales

SUPPORTED_LOCALES
DEFAULT_LOCALE
```

## Docker, Railway.app, env variables

Because I like to use env variables and Railway as well, you need to update `Dockerfile` accordingly to the env variables you want to use.

# Development guide

## Pages

I like to use the `pages` folder to create the routes of my app. Each file in this folder will be a route.


## Internationalization

Because my webapps are generally internationalized, I use `next-i18next` to handle translations.

In the folder `client/messages/` you will find the translations files. You can add a new language by creating a new file in this folder.
The format I use is as follows:

```json
{
    "general": { // General translations
        "Hello": "Hello"
    },
    "/": { // the path of the page
        "metadata": {
            "title": "Home",
            "description": "Description",
            "keywords": "Keywords"
        },
        "messages": { // Page text

        }
    }
    // ...
}
```


