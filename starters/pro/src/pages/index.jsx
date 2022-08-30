// Core
import { getDocuments } from "@columnist/core";
// Components
import { Column, Article } from "../components";
// Config
import { sortByDate } from ".config/sorts";
import { filterArticles, filterDrafts } from ".config/filters";

export default function HomePage({ collection }) {
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
  const options = {
    html: false,
    listLimit: 10,
    maxCharacters: 220,
    sorts: [sortByDate],
    filters: [filterArticles, filterDrafts],
  };

  let collection = await getDocuments("content", options);

  return {
    props: {
      collection,
      meta: {
        title: "Home",
        description: "Read new content from Columnist.",
      },
      style: {
        header: "hero",
      },
    },
  };
}
