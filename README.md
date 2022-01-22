**Columnist is an open source Next.js starter for self-publishing.**

Far from just another blog starter, Columnist was designed for creators. Building on the exceptional DX of Next.js, the starter offers scalability and ease of use for writers and their readers.

[Learn more](https://github.com/oyoboyo/columnist)

---

Columnist uses this workspace for local development of common features (e.g., themes, packages) as well as local development of Columnist apps and starters.

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

Public NPM packages are published via `npm-publish` leveraging the workspaces ([see documentation](https://docs.npmjs.com/cli/v8/commands/npm-publish)).
