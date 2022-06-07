import {
  getAllPaths,
  getDocument,
  getCollection,
  getCollections,
} from "@columnist/core";
// Components
import { Page, Column, Article, Gate } from "@columnist/bootstrap";
import { Html } from "@columnist/core";
// Filters and sorts
import { sortByDate } from ".config/sorts";
import { filterArticles, filterDrafts } from ".config/filters";

export default function All({ doc, collection, collections }) {
  return (
    <Page header="bar">
      {
        // Document
        // Display document in column
        doc ? (
          <Column name="article" style="default">
            {doc.type === "collection" ? <h1>{doc.title}</h1> : null}
            {doc.type === "article" || doc.type === "page" ? (
              // As an article
              <Article content={doc} style="detail">
                {doc.gated ? (
                  <>
                    <Html>{doc.gated}</Html>
                    <Gate />
                  </>
                ) : null}
              </Article>
            ) : null}
          </Column>
        ) : null
      }
      {
        // Collection
        // Display collection of documents
        collection ? (
          <Column name="collection">
            {collection.map((doc, index) =>
              doc.type === "article" ? (
                // As articles
                <Article key={index} content={doc} style="teaser" />
              ) : null
            )}
          </Column>
        ) : null
      }
      {
        // Collections
        // Display collections of collections (sub-collections)
        collections
          ? // Collections
            collections.map((column, index) => (
              <Column key={index} name="collections">
                <h2>{column.title}</h2>
                {
                  // Sub-collection
                  column.collection.map((doc, index) =>
                    doc.type === "article" ? (
                      // Article from document in collection
                      <Article key={index} content={doc} style="teaser" />
                    ) : null
                  )
                }
              </Column>
            ))
          : null
      }
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPaths("content");

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Get document
  let doc = getDocument(params.all, {
    html: true,
    maxCharacters: 1000,
  });

  console.log(doc);

  // Get collection
  let collection = getCollection(params.all, {
    html: false,
    listLimit: 10,
    maxCharacters: 220,
    sorts: [sortByDate],
    filters: [filterArticles, filterDrafts],
  });

  // Get collections
  let collections = getCollections(params.all, {
    html: false,
    listLimit: 10,
    maxCharacters: 220,
    sorts: [sortByDate],
    filters: [filterArticles, filterDrafts],
  });

  return {
    props: {
      doc,
      collection,
      collections,
    },
  };
}
