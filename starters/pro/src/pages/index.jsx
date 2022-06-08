// Core
import { getDocuments } from "@columnist/core";
// Components
import { Page, Column, Teaser, Head } from "@columnist/bootstrap";
// Config
import { teaser } from ".config/article";
import { sortByDate } from ".config/sorts";
import { filterArticles, filterDrafts } from ".config/filters";

const content = {
  title: "Home",
  description: "Read new content from Columnist.",
};

const options = {
  html: false,
  listLimit: 10,
  maxCharacters: 220,
  sorts: [sortByDate],
  filters: [filterArticles, filterDrafts],
};

const style = {
  header: "hero",
};

export default function HomePage({ collection }) {
  return (
    <Page style={style}>
      <Head content={content} />
      {
        // Column
        // a list of documents in a column collection ?
        <Column style="default">
          {
            // Collection
            // Slice documents according to limit and map
            collection.map((doc, index) =>
              doc.type === "article" ? (
                // Article
                // Display document as article
                <Teaser key={index} config={teaser} content={doc} />
              ) : null
            )
          }
        </Column>
      }
    </Page>
  );
}

export async function getStaticProps() {
  let collection = await getDocuments("content", options);

  return {
    props: {
      collection,
      style,
    },
  };
}
