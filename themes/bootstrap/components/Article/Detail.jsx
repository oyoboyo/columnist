// core
import { Html, useConfig } from "@columnist/core";
// component
import Img from "../Img";
// utilities
import { makeReadTime, makeDate } from "@columnist/core";
// config
import defaults from "../../config.defaults";

const Detail = ({ content }) => {
  const config = useConfig();

  const detail = config.article.detail
    ? config.article.detail
    : defaults.article.detail;

  return (
    <article className="border-bottom pb-4 mb-4">
      <header>
        <h1 className="mt-2">{content.title}</h1>
        {content.summary ? (
          <p className="lead text-muted mb-3">{content.summary}</p>
        ) : null}
        <div className="d-flex justify-between mb-3">
          {detail.date ? (
            <small className="text-muted">
              {makeDate(content.date, detail.date)}
            </small>
          ) : null}
          {detail.readTime ? (
            <small className="text-muted">
              {makeReadTime(content.text)} min read
            </small>
          ) : null}
        </div>
        {content.image ? (
          <div className="text-center">
            <Img
              width={640}
              height={380}
              src={content.image.src}
              alt={content.image.alt}
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
        <Html className="content-body serif mt-3">{content.html}</Html>
      </main>
      <footer>
        {content.author ? (
          <small className="text-muted">Article by {content.author}</small>
        ) : null}
      </footer>
    </article>
  );
};

export default Detail;
