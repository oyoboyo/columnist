Columnist Core provides common modules for Columnist apps and starters. These include, services, hooks, components, etc., all of the fun stuff we’ve tried to keep away from creators.

Core does however, also expose some useful features for _page builders_ and _themer_ (a.k.a., us web developers). Dig in:

# Services

Columnist Core includes a number of services to get local content in different contexts, for example:

- Get all paths from a directory
- Get all documents for the home page
- Get a document, collection, or collections from params (for a catch all)
- Get a document, collection, or collections from directory (at a known route)

**Usage**

Select services according to context, for example — creating a custom article page:

- Create a page at `src/pages/articles/[article].jsx`
- Import services from `@columnist/core`
- In `getStaticPaths` to get paths from `content/articles` directory to render at build time
- In `getStaticProps` get document from the directory (based on returned params)
- Pass props to the page for rendering

**Example:** services for an article page

```jsx
import { getAllPathsFromDir, getDocumentFromParams } from "@columnist/core";

export default function ArticlePage({ doc }) {
  return (
    <Page header="bar">
      <Head>
        <title>{doc.title}</title>
        <meta name="description" content={doc.title} />
        <meta property="og:title" content={doc.title} />
        <meta property="og:description" content={doc.summary} />
      </Head>
      <Section name="article-detail" style="column">
        <Article content={doc} style="detail" />
      </Section>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPathsFromDir("content/articles", [
    { key: "article", index: 1 },
  ]);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const doc = await getDocumentFromParams(params.all, { html: true });
  return {
    props: { doc },
  };
}
```

## Get all paths

Next.js requires a list of static paths for pre-rendering at build time.

**Example:** service call inside `getStaticPaths`

```jsx
const paths = getAllPathsFromDir("content/articles", [
  { key: "article", index: 1 },
]);
```

### From directory

Paths are retrieved for all content in a given directory by calling `getAllPathsFromDir` on a local path.

Paths are returned as an array, either:

In the case of a **catch all route** where the params could be anything:

```jsx
// ...inside of getStaticPaths

// Get paths with directory
const paths = getAllPathsFromDir("content/articles");

console.log(paths);
```

Which returns all path params in an array, e.g.:

```jsx
*[
	{ params: { all: ["articles","creating-culture"] }}
]*
```

Or for, **dynamic routes** (where the route params has a known and required keys:

```jsx
// ...inside of getStaticPaths

// Get paths with directory and key index:
const paths = getAllPathsFromDir("content/articles", [
  { key: "article", index: 1 },
]);

console.log(paths);
```

Which returns params a specific key value, e.g.:

```jsx
*[
  {
    params: { article: 'creating-culture' }
  },
]*
```

**Arguments**

| Argument | Type | Example | Description |
| --- | --- | --- | --- |
| directory | string | "content/articles" | Get all static path params below a given directory |
| keyIndex | array of objects | [{ key: "article", index: 1}] | In cases where params represent keys for dynamic page routes the key and index position (in the param array) are identified using an array of key index pairs. |
| keyIndex[param].key | string | key:”article" in src/pages/articles/[article] | The key used in the page route (to set the key in the returned paths) |
| keyIndex[param].index | number | index: 1 in param array ["article","creating-content"] | The index position in the parameters array of the key in question (to index the value) |

## Get all documents

In cases where we need everything (like an archive or home page) we can get all documents. **Note:** as sites grow this might become slower, (it really just walks the directory and returns the output) use as advisable.

**Example:** service call inside `getStaticProps`

```jsx
const documents = await getAllDocumentsFromDir("content", {
  teaser: true,
  truncation: 200,
});
```

**Arguments**

| Argument | Type | Example | Description |
| --- | --- | --- | --- |
| directory | string | “content” | Get all documents below a given directory |
| options | object | {teaser: false, html: true} | e.g., included format and processing |

**Options**

| Property | Type | Example | Description |
| --- | --- | --- | --- |
| text | boolean | true or false | Include text in document object? |
| html | boolean | true or false | Include html in document object? |
| teaser | boolean | true or false | Include teaser (truncated text)? |
| truncation | number | 300 | Length of truncated teaser (default value is 200) |

## Get document

On pages intended to display a rendered document (i.e., an article) get document from `getStaticProps` using one of these methods:

### From params

In cases (catch all routes) where an array of all params is available but the directory path may be unknown, `getDocumentFromParams` inside of `getStaticProps`.

**Example:** get document from params:

```jsx
export async function getStaticProps({ params }) {
  const doc = await getDocumentFromParams(params.all, { html: true });
  return {
    props: { doc },
  };
}
```

**Arguments**

| Argument | Type | Example | Description |
| --- | --- | --- | --- |
| params | array | [”articles”, “creating-culture”] | Get document from all params |
| options | object | {teaser: false, html: true} | e.g., included format and processing |

**Options**

| Property | Type | Example | Description |
| --- | --- | --- | --- |
| text | boolean | true or false | Include text in document object? |
| html | boolean | true or false | Include html in document object? |
| teaser | boolean | true or false | Include teaser (truncated text)? |
| truncation | number | 300 | Length of truncated teaser (default value is 200) |

### From directory

In cases where the directory is known (dynamic routes that use a key) `getDocumentFromDir`.

**Example:** service call inside `getStaticProps`

```jsx
const doc = await getDocumentFromDir(`content/articles/${params.article}`, {
  html: true,
});
```

**Arguments**

| Argument | Type | Example | Description |
| --- | --- | --- | --- |
| params | array | `content/articles/${params.article}` | Get document from directory constructed from known route |
| options | object | {teaser: false, html: true} | e.g., included format and processing |

**Options**

| Property | Type | Example | Description |
| --- | --- | --- | --- |
| text | boolean | true or false | Include text in document object? |
| html | boolean | true or false | Include html in document object? |
| teaser | boolean | true or false | Include teaser (truncated text)? |
| truncation | number | 300 | Length of truncated teaser (default value is 200) |

## Get collection

On pages intended to display a list of a specific type of content (i.e., a collection of articles), get collection in `getStaticProps` using one of these two methods:

### From params

In cases (catch all routes) where an array of all params is available but the directory path may be unknown, `getcollectionFromParams` inside of `getStaticProps`.

**Example:** get collection from params:

```jsx
const collection = await getcollectionFromParams(params.all, { html: true });
```

**Arguments**

| Argument | Type | Example | Description |
| --- | --- | --- | --- |
| params | array | [”articles”] | Get collection from all params |
| options | object | {teaser: false, html: true} | e.g., included format and processing |

**Options**

| Property | Type | Example | Description |
| --- | --- | --- | --- |
| text | boolean | true or false | Include text in document object? |
| html | boolean | true or false | Include html in document object? |
| teaser | boolean | true or false | Include teaser (truncated text)? |
| truncation | number | 300 | Length of truncated teaser (default value is 200) |

### From directory

In cases where the directory is known (dynamic routes that use a key) `getCollectionFromDir`.

**Example:** service call inside `getStaticProps`

```jsx
const doc = await getDocumentFromDir("content/articles", { html: true });
```

**Arguments**

| Argument | Type | Example | Description |
| --- | --- | --- | --- |
| params | array | "content/articles" | Get document from directory constructed from known route |
| options | object | {teaser: false, html: true} | e.g., included format and processing |

**Options**

| Property | Type | Example | Description |
| --- | --- | --- | --- |
| text | boolean | true or false | Include text in document object? |
| html | boolean | true or false | Include html in document object? |
| teaser | boolean | true or false | Include teaser (truncated text)? |
| truncation | number | 300 | Length of truncated teaser (default value is 200) |

## Get collections

On pages intended to display many collections within a document (e.g., features, articles and interviews in a magazine issue), get multiple collections using one of these two methods:

### From params

In cases (catch all routes) where an array of all params is available but the directory path may be unknown, `getcollectionsFromParams` inside of `getStaticProps`.

**Example:** get collection from params:

```jsx
const collections = await getcollectionsFromParams(params.all, { html: true });
```

**Arguments**

| Argument | Type | Example | Description |
| --- | --- | --- | --- |
| params | array | [”issues”,"making-sense-of-it"] | Get collections from all params |
| options | object | {teaser: false, html: true} | e.g., included format and processing |

**Options**

| Property | Type | Example | Description |
| --- | --- | --- | --- |
| text | boolean | true or false | Include text in document object? |
| html | boolean | true or false | Include html in document object? |
| teaser | boolean | true or false | Include teaser (truncated text)? |
| truncation | number | 300 | Length of truncated teaser (default value is 200) |

### From directory

In cases where the directory is known (dynamic routes that use a key) `getCollectionsFromDir`.

**Example:** service call inside `getStaticProps`

```jsx
const dir = `content/issues/${params.issue}/features/${params.feature}`;

const collections = await getcollectionsFromDir(dir, { html: true });
```

**Arguments**

| Argument | Type | Example | Description |
| --- | --- | --- | --- |
| params | array | `content/issues/${params.issue}/features/${params.feature}` | Get collections from known directory |
| options | object | {teaser: false, html: true} | e.g., included format and processing |

**Options**

| Property | Type | Example | Description |
| --- | --- | --- | --- |
| text | boolean | true or false | Include text in document object? |
| html | boolean | true or false | Include html in document object? |
| teaser | boolean | true or false | Include teaser (truncated text)? |
| truncation | number | 300 | Length of truncated teaser (default value is 200) |

## All services

For comparsion here is a list of all services and use cases:

| Function | Argument | Description |
| --- | --- | --- |
| getAllPathsFromDir | directory,keyIndex | Get all paths below a directory |
| getAllDocumentsFromDir | directory | Get all docs below a directory |
| getDocumentFromParams | params | Get document from array of all params |
| getCollectionFromParams | params | Get collection from array of all params |
| getCollectionsFromParams | params | Get collections from array of all params |
| getDocumentFromDir | directory | Get document from a specific directory |
| getCollectionFromDir | directory | Get collection from a specific directory |
| getCollectionsFromDir | directory | Get collections from a specific directory |

## Page examples

Here are some common content structures outlining how services might be applied:

| Route    | Page      | Getters     | From |
| -------- | --------- | ----------- | ---- |
| [...all] | Catch all | getAllPaths |

getDocument getCollection getCollections | directory, keyIndex params params params | | articles | Articles | getDocument getCollection | directory directory | | articles/[article] | Article | getDocument getCollections | directory directory | | issues/[issue]/features | Issue features | getAllPaths getDocument getCollection | directory, keyIndex directory directory | | issues/[issue]/features/[feature] | Issue feature | getAllPaths getDocument | directory, keyIndex directory | | books/[book] | Book | getAllPaths getDocument getCollection | directory params params | | books/[book]/[chapter] | Book chapter | getDocument | directory params params |

# Utilities

Columnist Core provides some useful utilities for working with text in themes.

## Text

Often when working with strings in a template you need to do funky things. Columnist Core provides a few lightweight functions:

### Capitalize

Capitalizes the first letter:

```jsx
const string = "this is an example";

const title = capitalize(string);

console.log(slug);

// Console: This is an example
```

### Slugify

Turns a text string into a slug:

```jsx
const title = "This is an example";

const slug = slugify(title);

console.log(title);

// Console: this-is-an-example
```

### Deslug

Makes a title from a slug:

```jsx
const slug = "this-is-an-example";

const title = deslug(slug);

console.log(slug);

// Console: This is an example
```

### Quantify

Quantifies a piece of text to return some data points:

```jsx
const text = "This is an example of very long text...";

const { wordCount, readTime } = quantify(text);

console.log(`Word count: ${wordCount}, read time: ${readTime}`);

// Console: Word count: 716, read time: 4 min
```

### Truncate

Truncates a string (cuts it off and adds an elipsis):

```jsx
const text = "This an example of very long text...";

const teaser = truncate(text, 15); // Number limit

console.log(teaser);

// Console: "this is an example..."
```

# Components

## Link

The link component provides a wrapper to the default `next/link` link, extended to includes an `active` class name on the current route (i.e., to provide an active style in the menu).

**Props**

| Name      | Type     | Example    | Description                  |
| --------- | -------- | ---------- | ---------------------------- |
| children  | element  | Link text  | Child nodes of the link      |
| href      | string   | “/about"   | URL or relative path         |
| className | string   | “nav-link” | CSS class name               |
| onClick   | function | doThis     | Function call on click event |

**Example:** Link in a page

```jsx
import { Link } from "@columnist/core";

function About({ content }) {
  return (
    <Link href="/contact" className="nav-link">
      Get in touch
    </Link>
  );
}
```

## Html

Because Columist pages are statically rendered _sometimes_ we need to `dangerouslySetInnerHTML`.

Because using `dangerouslySetInnerHTML` _feels dangerous_, we’ve created this HTML component to let us feel good living dangerously, (but only when it’s safe) for example:

- Adding an embedded form to a static web page
- Adding HTML rendered from Markdown in our docs

**Example**

```jsx
import { Html } from "@columnist/core";

function Article({ doc }) {
  return <Html>{doc.html}</Html>;
}
```

## Config

The configuration file at `columnist.config.js` handles various site constants for components or pages, e.g., brand, head, header, etc. (**note:** add constants as you need them).

**Constants**

| Const  | e.g.,                     |
| ------ | ------------------------- |
| brand  | name, tagline, logo, etc. |
| head   | GoogleAnalytics           |
| header | options, cta, menu, etc.  |
| footer | social, menu              |
| home   | limit                     |

**How it works**

- Configuration is passed to a `Config` context in the `src/pages/_app.js` file
- This `config` object contains constants used in the theme
- Theme components can import config using the `useConfig` hook
- Page variables can be imported directly, e.g., import `home` to use in `src/pages/index.js`
