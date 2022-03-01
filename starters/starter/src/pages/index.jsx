import Head from "next/head";
import { getAllDocumentsFromDir } from "@columnist/core";
import { Page, Section } from "src/components";
import { Article } from "src/components";
import config from "columnist.config";

/**
 * Home
 * Main index page
 */

export default function HomePage({ documents }) {
  return (
    <Page header="hero">
      <Head>
        <title>{config.brand.name}</title>
        <meta name="description" content={config.brand.tagline} />
        <meta property="og:title" content={config.brand.name} />
        <meta property="og:description" content={config.brand.tagline} />
      </Head>
      {documents ? (
        <Section name="list" style="column">
          {documents.slice(0, config.home.limit).map((doc, index) => (
            <Article key={index} content={doc} style="teaser" />
          ))}
        </Section>
      ) : null}
    </Page>
  );
}

export async function getStaticProps() {
  let documents = await getAllDocumentsFromDir("content", config.home);

  return {
    props: {
      documents,
    },
  };
}
