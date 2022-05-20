// Core
import { getDocuments } from "@columnist/core";
// Components
import { Page, Column, Article } from "src/components";
// Config
import config from "columnist.config";

export default function HomePage({ documents }) {
  return (
    <Page header="hero">
      {
        // Documents
        documents ? (
          <Column style="default">
            {
              // Filter & map
              documents.slice(0, config.home.limit).map((doc, index) => (
                <Article key={index} content={doc} style="teaser" />
              ))
            }
          </Column>
        ) : null
      }
    </Page>
  );
}

export async function getStaticProps() {
  // Get documents
  let documents = await getDocuments("content", config.home);

  return {
    props: {
      documents,
    },
  };
}
