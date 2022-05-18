import { getDocuments } from "@columnist/core";
import { Page, Column } from "src/components";
import { Article } from "src/components";
import config from "columnist.config";

export default function HomePage({ documents }) {
  return (
    <Page header="hero">
      {documents ? (
        <Column name="list">
          {documents.slice(0, config.home.limit).map((doc, index) => (
            <Article key={index} content={doc} style="teaser" />
          ))}
        </Column>
      ) : null}
    </Page>
  );
}

export async function getStaticProps() {
  let documents = await getDocuments("content", config.home);

  return {
    props: {
      documents,
    },
  };
}
