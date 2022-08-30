// Import core
import { Html, makeDate } from "@columnist/core";
// Import components
import Author from "./Author";
import Img from "../Img";
import Gate from "../Article/Gate";
// Import config
import { date } from ".config";

export const config = {
  date: date,
  html: true,
  readTime: true,
  image: {
    width: 960,
    height: 640,
    optimize: true,
  },
};

const Detail = ({ content }) => {
  return (
    <article className="article-detail">
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
        content.description ? (
          <p className="article-description lead text-muted mb-3">
            {content.description}
          </p>
        ) : null
      }
      {
        // Article date and read time
        content.type == "article" ? (
          <div className="article-date d-flex justify-content-between mb-3">
            {
              // Article date
              config.date && content.date ? (
                <small className="article-date text-muted">
                  {makeDate(content.date, config.date)}
                </small>
              ) : null
            }
            {
              // Article read time
              config.readTime && content.readTime ? (
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
        content.image && config.image ? (
          <div className="article-image text-center">
            <Img
              width={config.image.width}
              height={config.image.height}
              src={content.image.src}
              alt={content.image.alt}
              optimize={config.image.optimize}
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
      {content.html ? (
        <Html className="article-html serif mt-3">{content.html}</Html>
      ) : null}{" "}
      {content.gated ? (
        <>
          <Html>{content.gated}</Html>
          <Gate />
        </>
      ) : null}
      {
        // article author
        content.author ? <Author content={content.author} /> : null
      }
    </article>
  );
};

export default Detail;
