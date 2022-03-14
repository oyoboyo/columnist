import Head from "next/head";
import { getAllPaths, getAllContent } from "@columnist/core";
import { Page, Section, Article } from "src/components";
import config from "columnist.config";

/**
 * Content
 * Dynamic catch all route for content and collections
 */

export default function All({ doc, collection, collections }) {
  const description = doc && doc.summary ? doc.summary : config.brand.tagline;
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
        ? collections.map((section, index) => (
            <Section
              key={index}
              name={section.slug}
              title={section.title}
              style="column"
            >
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
  const paths = await getAllPaths("content");

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { doc, collection, collections } = getAllContent(
    params.all,
    config.all
  );

  return {
    props: {
      doc,
      collection,
      collections,
    },
  };
}
