// Core
import { Link, makeDate } from "@columnist/core";
// Local components
import Img from "../../Img";
import Author from "./Author";

import { date } from ".config";

const config = {
  date: date,
  limit: 220,
  readTime: true,
  image: {
    width: 960,
    height: 640,
    optimize: true,
  },
};

export default function Teaser({ content }) {
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
          config.date && content.date ? (
            <small className="article-date text-muted">
              {makeDate(content.date, config.date)}
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
        content.description ? (
          <p className="article-summary lead text-muted mb-4">
            {content.description}
          </p>
        ) : null
      }
      {
        // Article image
        content.image && config.image ? (
          <div className="article-image">
            <Link
              className="article-link text-center"
              href={content.route}
            >
              <Img
                width={config.image.width}
                height={config.image.height}
                src={content.image.src}
                alt={content.image.alt}
                optimize={config.image.optimize}
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
          </div>
        ) : null
      }
      {
        // Content teaser text
        <p className="article-truncated serif mt-4 mb-4">
          {content.teaser}
        </p>
      }
      <div className="article-footer d-flex justify-content-between align-items-center mb-3 ">
        <Link className="article-link small" href={content.route}>
          {
            // Read time and link
            config.readTime ? (
              <span>{content.readTime} min read</span>
            ) : (
              <span>Read more</span>
            )
          }
        </Link>
        {
          // Content author
          content.author ? <Author content={content.author} /> : null
        }
      </div>
    </article>
  );
}
