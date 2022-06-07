// core
import { Html, useConfig, makeDate } from "@columnist/core";

// local components
import Head from "./Head";
import Author from "./Author";
import Img from "../../Img";
// local utilities

const Detail = ({ content, children }) => {
  const config = useConfig();

  return (
    <article className="article-detail">
      {
        // Article head
        <Head content={content} />
      }
      {
        // Article tag
        content.tag ? (
          <small className="article-tag text-muted me-2">
            {content.tag}
          </small>
        ) : null
      }
      <h1 className="mt-2">{content.title}</h1>
      {
        // Article summary
        content.summary ? (
          <p className="article-summary lead text-muted mb-3">
            {content.summary}
          </p>
        ) : null
      }
      {
        // Article date and read time
        content.type == "article" ? (
          <div className="article-date d-flex justify-content-between mb-3">
            {
              // Article date
              config.article.detail.date && content.date ? (
                <small className="article-date text-muted">
                  {makeDate(content.date, config.article.detail.date)}
                </small>
              ) : null
            }
            {
              // Article read time
              config.article.detail.readTime && content.readTime ? (
                <small className="article-read-time text-muted">
                  {content.readTime} min read
                </small>
              ) : null
            }
          </div>
        ) : null
      }
      {
        // Article image
        content.image && config.article.detail.image ? (
          <div className="article-image text-center">
            <Img
              width={config.article.detail.image.width}
              height={config.article.detail.image.height}
              src={content.image.src}
              alt={content.image.alt}
              optimize={config.article.detail.image.optimize}
            />
            {
              // Article image caption
              content.image.caption ? (
                <small className="article-image-caption text-muted mt-2 ">
                  {content.image.caption}
                </small>
              ) : null
            }
          </div>
        ) : null
      }
      {
        // Article children
        children ? (
          <div className="article-body">{children}</div>
        ) : // ...or article HTML
        content.html ? (
          <Html className="article-html serif mt-3">{content.html}</Html>
        ) : null
      }
      {
        // article author
        content.author ? <Author content={content.author} /> : null
      }
    </article>
  );
};

export default Detail;
