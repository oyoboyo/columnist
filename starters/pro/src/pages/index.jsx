// Core
import { getDocuments } from "@columnist/core";
// Components
import { Page, Column, Article } from "@columnist/bootstrap";
// Config
import { sortByDate } from ".config/sorts";
import { filterArticles, filterDrafts } from ".config/filters";

const options = {
  html: false,
  listLimit: 10,
  maxCharacters: 220,
  sorts: [sortByDate],
  filters: [filterArticles, filterDrafts],
};

export default function HomePage({ docs }) {
  return (
    <Page header="hero">
      {
        // Column
        // a list of documents in a column
        docs ? (
          <Column style="default">
            {
              // Collection
              // Slice documents according to limit and map
              docs.slice(0, options.listLimit).map((doc, index) =>
                doc.type === "article" ? (
                  // Article
                  // Display document as article
                  <Article key={index} content={doc} style="teaser" />
                ) : null
              )
            }
          </Column>
        ) : null
      }
    </Page>
  );
}

export async function getStaticProps() {
  let docs = await getDocuments("content", options);

  return {
    props: {
      docs,
    },
  };
}
