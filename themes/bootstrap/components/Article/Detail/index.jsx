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
      <article>
        <Intro content={content} />
        {content.gated ? (
          <>
            <div className="content-body serif mt-3 ms-md-5 me-md-5">
              <Html>{content.html}</Html>
            </div>
            <Gate />
          </>
        ) : content.html ? (
          <div className="content-body serif mt-3 ms-md-5 me-md-5">
            <Html>{content.html}</Html>
          </div>
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
