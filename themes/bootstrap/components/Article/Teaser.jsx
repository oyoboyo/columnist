import { Link, useConfig } from "@columnist/core";
// local components
import Img from "../Img";
// utilities
import { makeReadTime, makeDate, truncate } from "@columnist/core";
// default config
import defaults from "../../config.defaults";

const Teaser = ({ content }) => {
  // Get config
  const config = useConfig();
  // Check, get defaults
  const teaser = config.article.teaser
    ? config.article.teaser
    : defaults.article.teaser;

  return (
    <article className="teaser border-bottom pb-4 mb-5">
      <div className="metadata d-flex justify-between ms-md-5 me-md-5">
        {content.tag ? (
          <small className="text-muted me-2">{content.tag}</small>
        ) : null}
        {teaser.date && content.date ? (
          <small className="text-muted">
            {makeDate(content.date, teaser.date)}
          </small>
        ) : null}
      </div>
      <Link href={content.route}>
        <h1 className="text-dark h2 mt-3 ms-md-5 me-md-5">{content.title}</h1>
      </Link>
      {content.summary ? (
        <p className="lead text-muted mb-4 ms-md-5 me-md-5">
          {content.summary}
        </p>
      ) : null}
      {content.image && teaser.image ? (
        <Link className="text-center" href={content.route}>
          <Img
            width={teaser.image.width}
            height={teaser.image.height}
            src={content.image.src}
            alt={content.image.alt}
            optimize={teaser.image.optimize}
          />
          {content.image.caption ? (
            <small className="text-muted mt-2">{content.caption}</small>
          ) : null}
        </Link>
      ) : null}
      {teaser.limit ? (
        <p className="serif mt-4 mb-4 ms-md-5 me-md-5">
          {truncate(content.text, teaser.limit)}
        </p>
      ) : null}
      <nav className="navigation d-flex mb-3 justify-between ms-md-5 me-md-5">
        <Link className="small" href={content.route}>
          {teaser.readTime ? (
            <span>{makeReadTime(content.text)} min read</span>
          ) : (
            <span>Read more</span>
          )}
        </Link>
        {content.author ? (
          <small className="text-muted">Article by {content.author}</small>
        ) : null}
      </nav>
    </article>
  );
};

export default Teaser;
