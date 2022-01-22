import Head from "next/head";
import { getAllDocumentsFromDir } from "@columnist/core";
import { Page, Section } from "src/components";
import { Article } from "src/components";
import { brand, home } from "columnist.config";

/**
 * Home
 * Main index page
 */

export default function HomePage({ documents }) {
  return (
    <Page header="hero">
      <Head>
        <title>{brand.name}</title>
        <meta name="description" content={brand.tagline} />
        <meta property="og:title" content={brand.name} />
        <meta property="og:description" content={brand.tagline} />
      </Head>
      {documents ? (
        <Section name="list" style="column">
          {documents.slice(0, home.limit).map((doc, index) => (
            <Article key={index} content={doc} style="teaser" />
          ))}
        </Section>
      ) : null}
    </Page>
  );
}

export async function getStaticProps() {
  // Get collection of all content and sort it
  const dir = "content";
  const options = { teaser: true, truncation: 200 };

  let documents = await getAllDocumentsFromDir(dir, options);

  // Filter collection for home page listing
  documents = documents.filter((doc) => doc.type !== "page");

  return {
    props: {
      documents,
    },
  };
}
