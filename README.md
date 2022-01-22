**Columnist is an open source Next.js starter for self-publishing.**

Far from just another blog starter, Columnist was designed for creators. Building on the exceptional DX of Next.js, the starter offers scalability and ease of use for writers and their readers.

# Index

- [Starter](https://github.com/oyoboyo/columnist/wiki/Starter)
- [Core](https://github.com/oyoboyo/columnist/wiki/Core)
- [Themes](https://github.com/oyoboyo/columnist/wiki/Themes)
- [Workspace](https://github.com/oyoboyo/columnist/wiki/Workspace)

# Getting started

Getting started is simple:

## Setup

Create Next.js app with starter:

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

[Learn more](https://github.com/oyoboyo/columnist/wiki/Starter)

👉 **Note:** This is the first starter but there will be others with different themes, and features — stay tuned.

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

---

# Workspace

Columnist uses [the workspace](https://github.com/oyoboyo/columnist-workspace) for local development of common features (e.g., themes, packages) as well as local development of Columnist apps and starters.

The Columnist workspace in _kind of_ a monorepo. At the moment you'll find:

- Columnist Core at `./packages/core`
- Columnist Bootstrap at `./themes/bootstrap`

And apps and starters can be developed in `./apps` and `./starters` (which are ignored by Git as these projects have their own repositories (again — _kind of a monorepo_).

# **Getting started**

For now, the monorepo uses uses NPM workspaces, simple. In the root there is a `package.json` for common dependencies and to identify workspaces.

## Workspaces

Two (shared) workspaces currently exist:

- `themes` for CSS framework specific functionality e.g., Bootstrap
- `common` for common functionality across apps e.g., Core

## NPM packages

Both are scoped to the `@columnist` organization. In each workspace, there are packages. The packages are named with the convention `@columnist/[package-name]` for easy reference in apps, e.g.:

- `@columnist/core`
- `@columnist/bootstrap`

## Development

To develop with the workspaces:

1. Clone a starter (or existing Columnist app) into a `./apps` or `./starters` folder
2. Run NPM install in the `./` root folder (ensuring all sub `node_modules` folders are deleted)
3. You can now use the local `./packages` and `./themes` in your project.

## Publishing

Packages are managed via NPM leveraging the workspaces feature ([see documentation](https://docs.npmjs.com/cli/v8/commands/npm-publish)).

To publish:

### Increment version

Use `npm versions` to numbers for all workspaces e.g.:

```
npm version v0.1.4 --workspaces
```

# Publish workspaces

Use `npm publish` to publish all workspaces e.g.:

```
npm publish --workspaces
```
