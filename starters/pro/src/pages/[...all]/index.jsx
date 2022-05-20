import { getAllPaths, getAllContent } from "@columnist/core";
import { Page, Column, Article } from "src/components";
import config from "columnist.config";

export default function All({ doc, collection, collections }) {
  return (
    <Page header="bar">
      {
        // Article
        doc ? (
          <Column name="article">
            <Article content={doc} style="detail" />
          </Column>
        ) : null
      }
      {
        // Collection of articles
        collection ? (
          <Column
            name="collection"
            title={doc.collection ? doc.collection : null}
          >
            {collection.map((doc, index) =>
              doc.type === "article" ? (
                <Article key={index} content={doc} style="teaser" />
              ) : null
            )}
          </Column>
        ) : null
      }
      {
        // Collection of collections
        collections
          ? collections.map((column, index) => (
              <Column key={index} name="collections" title={column.title}>
                {column.collection.map((doc, index) => (
                  <Article key={index} content={doc} style="teaser" />
                ))}
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
