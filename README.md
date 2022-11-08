# Columnist

A feature rich blog starter for Next.js, built with savvy creators in mind.

## Documentation

- [For creators](https://www.notion.so/For-creators-b2dafe28cee74b7aaa4d1fe97eb8c0df)
- [For developers](https://www.notion.so/For-developers-3b5f7eb718a743c9a15b97762b1f114d)

## Getting started

Built for [Next.js](https://nextjs.org/) Columnist is open source and extensible, but easy enough for savvy web creators. **Getting started is simple.**

## Setup

In your terminal, create a Next.js app with the Columnist starter:

```yaml
npx create-next-app --example https://github.com/oyoboyo/columnist/tree/workspace/starters/free
```

Run the project locally:

```yaml
npm run dev
```

Then visit [http://localhost:3000/](http://localhost:3000/) in your browser to view, and develop your site locally.

## Create

Using your [integrated development environment](https://code.visualstudio.com/) or text editor of choice:

1. Add Markdown files to the `content` folder e.g., `content/about.md`
2. Organize content collections in folders e.g., `content/articles`
3. Nest folders to build content structure e.g., `content/issues/[issue]/[article]`
4. See content on your site, at a route matching the folder structure e.g., `/about` or `/articles`

## Customize

Columnist can be configured in a number of ways, for example:

1. Brand and configuration `columnist.config.js` in the root folder
2. Site logo at `public/graphics/logo.svg`
3. Edit colour and other style variables at `src/style/custom.scss`

## Deploy

Deployment of your site is pretty easy:

1. [Start with a new git repository](https://kbroman.org/github_tutorial/pages/init.html) in your Columnist site folder
2. Create content, configure, and customize, then git commit your site to Github
3. [Deploy your site to Vercel](https://vercel.com/guides/deploying-react-with-vercel) by importing your git repository
