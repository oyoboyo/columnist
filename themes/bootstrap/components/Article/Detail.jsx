// core
import { Html, useConfig } from "@columnist/core";
// component
import Img from "../Img";
// utilities
import { makeReadTime, makeDate } from "@columnist/core";
// config
import Author from "./Author";

const Detail = ({ content }) => {
  const config = useConfig();

  return (
    <article className="border-bottom pb-4 mb-4">
      <header>
        {content.tag ? (
          <small className="text-muted me-2 ms-md-5 me-md-5">
            {content.tag}
          </small>
        ) : null}
        <h1 className="mt-2 ms-md-5 me-md-5">{content.title}</h1>
        {content.summary ? (
          <p className="lead text-muted mb-3 ms-md-5 me-md-5">
            {content.summary}
          </p>
        ) : null}
        {content.type !== "page" ? (
          <div className="d-flex justify-content-between mb-3 ms-md-5 me-md-5">
            {config.article.detail.date && content.date ? (
              <small className="text-muted">
                {makeDate(content.date, config.article.detail.date)}
              </small>
            ) : null}
            {config.article.detail.readTime ? (
              <small className="text-muted">
                {makeReadTime(content.text)} min read
              </small>
            ) : null}
          </div>
        ) : null}
        {content.image && config.article.detail.image ? (
          <div className="text-center">
            <Img
              width={config.article.detail.image.width}
              height={config.article.detail.image.height}
              src={content.image.src}
              alt={content.image.alt}
              optimize={config.article.detail.image.optimize}
            />
            {content.image.caption ? (
              <small className="text-muted mt-2 ">
                {content.image.caption}
              </small>
            ) : null}
          </div>
        ) : null}
      </header>
      <main>
        <Html className="content-body serif mt-3 ms-md-5 me-md-5">
          {content.html}
        </Html>
      </main>
      <footer>
        {content.author ? (
          <div className="ms-md-5 me-md-5">
            <Author
              content={
                config.authors[content.author]
                  ? config.authors[content.author]
                  : content.author
              }
              style="detail"
            />
          </div>
        ) : null}
      </footer>
    </article>
  );
};

export default Detail;
