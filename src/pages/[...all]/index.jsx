import Head from "next/head";
import {
  getAllPathsFromDir,
  getDocumentFromParams,
  getCollectionFromParams,
  getCollectionsFromParams,
} from "@columnist/core";
import { Page, Section, Article } from "src/components";
import { brand } from "columnist.config";

/**
 * Content
 * Dynamic catch all route for content and collections
 */

export default function Content({ doc, collection, collections }) {
  const description = doc && doc.summary ? doc.summary : brand.tagline;
  return (
    <Page header="bar">
      <Head>
        <title>{doc.title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={doc.title} />
        <meta property="og:description" content={description} />
      </Head>
      {doc.type !== "directory" ? (
        <Section name="article" style="column">
          <Article content={doc} style="detail" />
        </Section>
      ) : null}
      {collection ? (
        <Section name={doc.slug} title={doc.title} style="column">
          {collection.map((doc, index) => (
            <Article key={index} content={doc} style="teaser" />
          ))}
        </Section>
      ) : null}
      {collections
        ? collections.map((section) => (
            <Section name={section.slug} title={section.title} style="column">
              {section.collection
                ? section.collection.map((doc, index) => (
                    <Article key={index} content={doc} style="teaser" />
                  ))
                : null}
            </Section>
          ))
        : null}
    </Page>
  );
}

export async function getStaticPaths() {
  // Create path params from directory
  const paths = await getAllPathsFromDir("content");

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Get doc
  const doc = await getDocumentFromParams(params.all, { html: true });

  // Get collection
  const collection = await getCollectionFromParams(params.all, {
    teaser: true,
  });

  // Get collections
  const collections = await getCollectionsFromParams(params.all, {
    teaser: true,
  });

  return {
    props: { doc, collection, collections },
  };
}
