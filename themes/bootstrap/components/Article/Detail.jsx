// core
import { Html, Link, useConfig } from "@columnist/core";
// component
import Img from "../Img";
// utilities
import { makeReadTime, makeDate } from "@columnist/core";
// config
import defaults from "../../config.defaults";
import Author from "./Author";

const Detail = ({ content }) => {
  const config = useConfig();

  const detail = config.article.detail
    ? config.article.detail
    : defaults.article.detail;

  const authors = config.authors ? config.authors : null;

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
        <div className="d-flex justify-content-between mb-3 ms-md-5 me-md-5">
          {detail.date && content.date ? (
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
        {content.image && detail.image ? (
          <div className="text-center">
            <Img
              width={detail.image.width}
              height={detail.image.height}
              src={content.image.src}
              alt={content.image.alt}
              optimize={detail.image.optimize}
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
          content.author.key && authors[content.author.key] ? (
            <div className="ms-md-5 me-md-5">
              <Author content={authors[content.author.key]} style="detail" />
            </div>
          ) : (
            <Author content={content.author} style="teaser" />
          )
        ) : null}
      </footer>
    </article>
  );
};

export default Detail;
