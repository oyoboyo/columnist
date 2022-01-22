**Columnist is an open source Next.js starter for self-publishing.**

Far from just another blog starter, Columnist was designed for creators. Building on the exceptional DX of Next.js, the starter offers scalability and ease of use for writers and their readers.

# Getting started

Getting started is simple:

## Setup

Create Next app with starter:

```markdown
npx create-next-app --example https://github.com/oyoboyo/columnist/tree/workspace/starters/starter
```

Run the project locally:

```
npm run dev
```

## Customize

Make the site your own:

- Edit `columnist.config.js` to configure features e.g., brand, menu, social, etc.
- Edit `src/styles/custom.scss` to customize style, e.g., type, colors, etc.

[Learn more](https://github.com/oyoboyo/columnist/wiki/Starter)

## Create content

Populate `content` with files and folders to publish pages, articles and collections:

- Start by adding `*.md` files to the content folder e.g., `content/about.md`
- Organize content in collection by adding files to a folder e.g., `content/articles`
- Use folders to build structure; add front matter to add detail
- See your content live on your local Columnist site

[Learn more](https://github.com/oyoboyo/columnist/wiki/Starter)

## Go live

Publish your site to [Vercel](https://vercel.com/) or another compatible Next.js host to go live.

# How it works

Basically, Columnist is a Next.js starter, with a focus on generating static content from Markdown (and looking good).

Columnist is [documented for developers](https://github.com/oyoboyo/columnist/wiki), but briefly:

- A Next.js catch all route matches the structure of the `content` folder
- Folders or `*.md` in the `content` folder generates routes in `getStaticPaths`
- Content is parsed by Columnist in `getStaticProps` and rendered as static pages
- Create structured content in `content` and get a static site (with matching structure)

[Learn more](https://github.com/oyoboyo/columnist/wiki)

# Structure

Columnist features are broken out into a few packages to help keep repositories clean:

## Starter

Columnist Starters are designed to abstact away development (to let creators focus on content).

In a starter you’ll find:

- **Content:** sample content as example to get you started can be found in the `content` folder
- **Pages:** a home page, and Next.js catch all route have been provided in `src/pages`
- **Components** at `src/components` (components can be added, or overidden from theme)
- **Styles** at `src/styles` to be customized or extended

👉 **Note:** This is the first starter but there will be others with different themes, and features — stay tuned.

[Learn more](https://github.com/oyoboyo/columnist/wiki/Starter)

## Core

Core Columnist functions have been packaged `@columnist/core` to include:

- Services for walking a file system for processing content (e.g., Markdown)
- Utilities for processing text and other common tasks
- Generic default components i.e., those not “themed”

[Learn more](https://github.com/oyoboyo/columnist/wiki/Core)

## Themes

Meanwhile components and styles are packaged in themes:

- Separate packages e.g., `@columnist/bootstrap`
- defined by a style framework e.g., Bootstrap
- and including the default components

[Learn more](https://github.com/oyoboyo/columnist/wiki/Themes)
