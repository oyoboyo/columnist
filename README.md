# Columnist

A feature rich and familiar blog starter for Next.js built with writers (and their readers) in mind.

Self-publish (and own your platform).

## **Features**

Columnist lets you:

- Create articles and pages with Markdown
- Manage content collections to build structure
- Easily configure, customize, and deploy you site
- Extend with [Next.js](https://nextjs.org/)
-

# Documentation

- [For creators](https://www.notion.so/For-creators-b2dafe28cee74b7aaa4d1fe97eb8c0df)
- [For developers](https://www.notion.so/For-developers-3b5f7eb718a743c9a15b97762b1f114d)
- [For contributors](https://www.notion.so/For-contributors-f63563f256a94f44bcda6d234ce8de38)

# Getting started

Getting started is simple (assuming you’re setup with [Node.js](https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681)):

In your terminal, create a Next.js app with the Columnist starter:

```yaml
npx create-next-app --example https://github.com/oyoboyo/columnist/tree/workspace/starters/starter
```

Run the project locally:

```yaml
npm run dev
```

Then visit [http://localhost:3000/](http://localhost:3000/) in your browser to view, and develop your site locally.

## Create

Columnist makes it easy to add and organize content to your site with [Markdown](https://www.markdownguide.org/cheat-sheet/).

Using your [integrated development environment](https://code.visualstudio.com/) or text editor of choice:

- Add Markdown files to the `content` folder e.g., `content/about.md`
- Organize content collections in folders e.g., `content/articles`
- Nest folders to build content structure e.g., `content/issues/[issue]/[article]`
- See content on your site, at a route matching the folder structure e.g., `/about` or `/articles`

Columnist has been designed to be intuitive for creators really — just add Markdown.

## Configure

Columnist can be configured in a number of ways, for example, to customize brand, the header, or footer.

- For all configuration options [read our guide for creators](https://www.notion.so/For-creators-b2dafe28cee74b7aaa4d1fe97eb8c0df)
- To edit configuration, it’s file `columnist.config.js` in the root folder

## Customize

Columnist can also be customized to accommodate your brand:

### Logo

The site logo can also be replaced at `public/graphics/logo.svg`.

- The default logo is a `500 x 500 px` square icon `*.svg` file

### Icons

Favicon have been included for a range of devices:

- The starter favicons can be changed by replacing the files under `public/favicon`
- To generate favicons we recommend [https://realfavicongenerator.net/](https://realfavicongenerator.net/)

### Style

Columnist uses SCSS and Bootstrap for style ([React Bootstrap optional](https://react-bootstrap.github.io/)). To customize:

- Edit or add default Bootstrap variables to `src/style/custom.scss`
- Add additional SCSS files (and import them to `src/style/index.scss`)

**Note:** Read [Bootstrap documentation](https://getbootstrap.com/docs/4.0/getting-started/theming/) for more information on customizing Bootstrap.

## Deploy

Deployment of your site is pretty easy:

1. [Start with a new git repository](https://kbroman.org/github_tutorial/pages/init.html) in your Columnist site folder
2. Create content, configure, and customize, then git commit your site to Github
3. [Deploy your site to Vercel](https://vercel.com/guides/deploying-react-with-vercel) by importing your git repository

Vercel is [free for non-commericial hosting](https://vercel.com/pricing) for when your just getting started.

👉 **Note:** new to git? No problem. [Learn the basics.](https://rogerdudler.github.io/git-guide/)

## Develop

Columnist was built with Next.js so all the Next.js [documentation](https://nextjs.org/docs/getting-started) will apply.

We’ve also built in some useful core concepts for development of content centric websites:

- [Themes](https://www.notion.so/For-developers-3b5f7eb718a743c9a15b97762b1f114d), allowing you to customize content components
- [Services](https://www.notion.so/For-developers-3b5f7eb718a743c9a15b97762b1f114d), that help you get `content` when you build Next.js pages
- [Utilities](https://www.notion.so/For-developers-3b5f7eb718a743c9a15b97762b1f114d), [starters](https://www.notion.so/For-developers-3b5f7eb718a743c9a15b97762b1f114d), a [monorepo](https://www.notion.so/For-developers-3b5f7eb718a743c9a15b97762b1f114d)... lots to help you expand on simple columns

👉 **Note:** new to Next.js? No problem. [Learn the basics.](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website)

## Contribute

We’re just ramping up, but we will take contributors. To get in touch to contribute talk to [Sean Rioux on Github](https://github.com/oyoboyo/columnist/discussions).

— however if you want to poke around at the monorepo, feel free. [Documentation here](https://www.notion.so/For-contributors-f63563f256a94f44bcda6d234ce8de38).

# Appendix

[Outline](https://www.notion.so/Outline-1fb14499acb84c61ba3f1c08a45cdf3f)

## Changelog

### v0.1.0

- Initialize Columnist Monorepo, core, themes, starter
- **Stories:** create content, customize, configure, deploy

### v0.2.0

- Services refactoring
