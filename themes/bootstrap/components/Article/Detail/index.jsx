// core
import { Html, useConfig } from "@columnist/core";
// component
import Head from "./Head";
import Intro from "./Intro";
import Author from "../Author";
import Gate from "./Gate";

const Detail = ({ content }) => {
  const config = useConfig();

  return (
    <>
      <Head content={content} />
      <article className="mb-4">
        <Intro content={content} />
        {content.gated ? (
          <>
            <Html className="content-body serif mt-3 ms-md-5 me-md-5">
              {content.truncated}
            </Html>
            <Gate />
          </>
        ) : content.html ? (
          <Html className="content-body serif mt-3 ms-md-5 me-md-5">{content.html}</Html>
        ) : null}
        {content.author && !content.gated ? (
          <div className="ms-md-5 me-md-5">
            <Author
              content={config.authors ? config.authors[content.author] : content.author}
              style="teaser"
            />
          </div>
        ) : null}
      </article>
    </>
  );
};

export default Detail;
