// core
import { Html, useConfig, makeDate } from "@columnist/core";
// local components
import Head from "./Head";
import Gate from "./Gate";
import Author from "./Author";
import Img from "../../Img";
// local utilities
import makeAuthor from "../utilities/makeAuthor";
import makeGated from "../utilities/makeGated";

const Detail = ({ content }) => {
  const config = useConfig();
  const user = false;

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
        // Article HTML
        content.html || content.truncated ? (
          <div className="article-html serif mt-3">
            <Html>{makeGated(content, user)}</Html>
          </div>
        ) : null
      }
      {
        // Article gate
        content.gated ? <Gate /> : null
      }
      {
        // article author
        content.author ? (
          <Author content={makeAuthor(content.author, config)} />
        ) : null
      }
    </article>
  );
};

export default Detail;
