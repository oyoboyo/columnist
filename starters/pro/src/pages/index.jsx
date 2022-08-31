// Import core
import { getDocuments } from "@columnist/core";
// Import components
import { Column, Article } from "../components";
// Import config
import { sortByDate } from ".config/sorts";
import { filterArticles, filterDrafts } from ".config/filters";

export default function HomePage({ collection }) {
  // Render home page
  return (
    <Column style="default">
      {
        // Render collection
        collection.map((doc, index) => (
          <Article teaser content={doc} key={index} />
        ))
      }
    </Column>
  );
}

export async function getStaticProps() {
  // Set options (to do: deprecate)
  const options = {
    html: false,
    listLimit: 10,
    maxCharacters: 220,
    sorts: [sortByDate],
    filters: [filterArticles, filterDrafts],
  };

  // Get documents from content
  let collection = await getDocuments("content", options);

  // Return static props
  return {
    props: {
      // Return collection
      collection,
      // Include meta tags
      meta: {
        title: "Home",
        description: "Read new content from Columnist.",
      },
      // Include style
      style: {
        header: "hero",
      },
    },
  };
}
