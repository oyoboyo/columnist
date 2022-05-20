// Core
import { Link, useConfig, makeDate } from "@columnist/core";
// Local components
import Img from "../../Img";
import Author from "./Author";
// Local utilities
import makeAuthor from "../utilities/makeAuthor";

export default function Teaser({ content }) {
  const config = useConfig();
  return (
    <article className="article-teaser border-bottom pb-4 mb-5">
      <div className="article-header d-flex justify-content-between">
        {
          // Article tag
          content.tag ? (
            <small className="article-tag text-muted me-2">
              {content.tag}
            </small>
          ) : null
        }
        {
          // Article date
          config.article.teaser.date && content.date ? (
            <small className="article-date text-muted">
              {makeDate(content.date, config.article.teaser.date)}
            </small>
          ) : null
        }
      </div>
      {
        // Article link
        <Link href={content.route}>
          <h1 className="article-title text-dark h2 mt-3">
            {content.title}
          </h1>
        </Link>
      }

      {
        // Article summary
        content.summary ? (
          <p className="article-summary lead text-muted mb-4">
            {content.summary}
          </p>
        ) : null
      }
      {
        // Article image
        content.image && config.article.teaser.image ? (
          <Link className="article-link text-center" href={content.route}>
            <Img
              className="article-image"
              width={config.article.teaser.image.width}
              height={config.article.teaser.image.height}
              src={content.image.src}
              alt={content.image.alt}
              optimize={config.article.teaser.image.optimize}
            />
            {
              // Image caption
              content.image.caption ? (
                <small className="article-image-caption text-muted mt-2">
                  {content.caption}
                </small>
              ) : null
            }
          </Link>
        ) : null
      }
      {
        // Content truncated
        <p className="article-truncated serif mt-4 mb-4">
          {content.truncated}
        </p>
      }
      <div className="article-footer d-flex justify-content-between align-items-center mb-3 ">
        <Link className="article-link small" href={content.route}>
          {
            // Read time and link
            config.article.teaser.readTime ? (
              <span>{content.readTime} min read</span>
            ) : (
              <span>Read more</span>
            )
          }
        </Link>
        {
          // Content author
          content.author ? (
            <Author content={makeAuthor(content.author)} />
          ) : null
        }
      </div>
    </article>
  );
}
