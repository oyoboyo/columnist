# Getting started

Mag is designed with developer experience and content creators in mind. Getting started in simple.

## Setup

Clone the repository:

```markdown
Git clone git@github.com:oyoboyo/magazine.git
```

From the directory, Install dependancies:

```markdown
npm install
```

Run the project locally:

```
npm run dev
# or
yarn dev
```

## Configure & customize

Edit the `mag.config.js` to customize the the site, e.g., change the site brand:

```jsx
const mag = {
  brand: {
    name: "Magazine",
    tagline: "The best content from the world of design",
    logo: "/graphics/logo.svg",
  },
};
```

Edit `src/styles/custom.scss` to edit Boostrap variables, e.g., type and colour:

```scss
// Type
$font-family-sans-serif: "Inter", sans-serif;
$font-family-serif: "Martel", serif;
$font-size-base: 1rem;
$font-family-base: $font-family-sans-serif;

// Colors
$blue: #1073ae !default;
$indigo: #272c8c !default;
$purple: #5d2e8c !default;
$pink: #f2b2b2 !default;
$red: #f24405 !default;
$orange: #f29f05 !default;
$yellow: #f2cc0f !default;
$green: #02734a !default;
$teal: #00b2a5 !default;
$cyan: #23c1d9 !default;
```

## Create content

Populate the `content/issues` and `content/articles` folders with Markdown files to publish issues and articles, using front matter relevent to each type:

### Issue

Issues organize articles into features, like in a magazine.

```yaml
---
type: issue
title: Creating culture
date: 2021-01-05
volume: 1
issue: 1
summary: "As creators were told to work ideas out in public — ship frequently, find your audience. But not all ideas are good."
image:
  src: /images/issue.jpeg
  alt: An person priming a blank canvas
  caption: An person priming a blank canvas
features:
  - name: Culture
    summary: Making ourselves worthy of trust
  - name: Impressions
    summary: Work on it together
  - name: Expertise
    summary: By the end hopefully, will find ourselves
  - name: Boundaries
    summary: Explore, what it means
  - name: Creativity
    summary: "Ideas: pursue the good ones"
editor: Mark Wang
---
# Markdown...
```

### Article

Articles elaborate on a topic, inside of a feature.

```yaml
---
type: article
title: Finding inspiration everywhere
date: 2021-01-01
summary: In 1986, philosopher Edward S. Casey wrote, "The very word culture meant 'place tilled' in Middle English, and the same word goes back to Latin colere, 'to inhabit, care for, till, worship' and cultus.
image:
  src: /images/adaptable.jpeg
  alt: An person priming a blank canvas
  caption: An person priming a blank canvas
author: Mark Wang
issue: Creating Culture
feature: Culture
featured: true
---
# Markdown...
```

## Go live

Publish your Next.js site to [Vercel](https://vercel.com/) or another compatible host, to go live.
