To help creators focus on content with Columnist, markup has been abstracted out of the starter into themes.

Themes are packages that include:

- Default components (e.g., `Page`, `Section`, `Article`)
- Default styles from a framework (e.g., Bootstrap, Tailwind)

# Integration

Themes are integrated with the starter, using imports:

- Components are imported in file `src/components/index.jsx`
- Styles are imported inf file `src/styles/index.scss`

# Customization

Themes can be overriden or extended by adding to the starter:

## Components

To override a theme component and customize markup:

- Copy the default component from the theme
- Paste the component into the `src/components` folder in the starter
- Update the component import in the `src/components/index.jsx` file to point to the copy

Otherwise other new components can be added as required.

## Styles

To customize styles:

- Override framework variables (e.g., _[Theming Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/)_) by editing `src/styles/custom.scss`
- Create additional SCSS files and import them into `src/styles/index.scss`

👉 **Note:** the more you override components, or add styles the more you bias your app (or the starter) towards a given style system (like Bootstrap). Are you cool with that? Proceed. Should you aim to change themes, however, keep in mind your technical debt.

# Bootstrap

By default the starter ships with a Bootstrap based theme, NPM package `@columnist/bootstrap`. The theme leverages [Bootstrap](https://getbootstrap.com/) for style, it does not depend on [React Bootstrap](https://react-bootstrap.github.io/). The Bootstrap theme source code can be found at https://github.com/oyoboyo/columnist-workspace in the theme folder.
