// Import services
import { getAllPaths, getDocument, getCollection } from "@columnist/core";
// Import components
import { Column, Article, Page } from "../../components";
// Import filters and sorts
import { sortByDate } from ".config/sorts";
import { filterArticles, filterDrafts } from ".config/filters";

// # All page
export default function All({ doc, collection }) {
  // Render All content in content as pages
  return (
    <>
      {
        // Render document by type
        doc ? (
          <Column style="default">
            {
              // Render collection title
              doc.type === "collection" ? <h1>{doc.title}</h1> : null
            }
            {
              // Render article detail
              doc.type === "article" ? (
                <Article detail content={doc} />
              ) : null
            }
            {
              // Render page
              doc.type === "page" ? <Page content={doc} /> : null
            }
          </Column>
        ) : null
      }
      {
        // Render collection
        collection ? (
          <Column style="default">
            {
              // Map collection,
              collection.map((doc, index) =>
                // Render article teaser
                doc.type === "article" ? (
                  <Article teaser content={doc} key={index} />
                ) : null
              )
            }
          </Column>
        ) : null
      }
    </>
  );
}

export async function getStaticPaths() {
  // Get and return paths from content folder
  const paths = await getAllPaths("content");
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Get document from params
  let doc = getDocument(params.all, {
    html: true,
    maxCharacters: 1000,
  });

  // Get collection from params
  let collection = getCollection(params.all, {
    listLimit: 10,
    maxCharacters: 220,
    sorts: [sortByDate],
    filters: [filterArticles, filterDrafts],
  });

  // Return page props
  return {
    props: {
      // Include document and collection
      doc,
      collection,
      // Include page meta tags
      meta: {
        title: doc.title,
        description: doc.description ? doc.description : false,
        image: doc.image ? doc.image : false,
      },
      // Include page style
      style: {
        header: "bar",
      },
    },
  };
}
