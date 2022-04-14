import { Link, useConfig } from "@columnist/core";
// local components
import Img from "../Img";
// utilities
import { makeDate } from "@columnist/core";
// default config
import Author from "./Author";

const Teaser = ({ content }) => {
  const config = useConfig();

  return (
    <article className="teaser border-bottom pb-4 mb-5">
      <div className="metadata d-flex justify-content-between ms-md-5 me-md-5">
        {content.tag ? <small className="text-muted me-2">{content.tag}</small> : null}
        {config.article.teaser.date && content.date ? (
          <small className="text-muted">
            {makeDate(content.date, config.article.teaser.date)}
          </small>
        ) : null}
      </div>
      <Link href={content.route}>
        <h1 className="text-dark h2 mt-3 ms-md-5 me-md-5">{content.title}</h1>
      </Link>
      {content.summary ? (
        <p className="lead text-muted mb-4 ms-md-5 me-md-5">{content.summary}</p>
      ) : null}
      {content.image && config.article.teaser.image ? (
        <Link className="text-center" href={content.route}>
          <Img
            width={config.article.teaser.image.width}
            height={config.article.teaser.image.height}
            src={content.image.src}
            alt={content.image.alt}
            optimize={config.article.teaser.image.optimize}
          />
          {content.image.caption ? (
            <small className="text-muted mt-2">{content.caption}</small>
          ) : null}
        </Link>
      ) : null}
      <p className="serif mt-4 mb-4 ms-md-5 me-md-5">{content.truncated}</p>
      <nav className="navigation d-flex justify-content-between align-items-center mb-3 ms-md-5 me-md-5">
        <Link className="small" href={content.route}>
          {config.article.teaser.readTime ? (
            <span>{content.readTime} min read</span>
          ) : (
            <span>Read more</span>
          )}
        </Link>
        {content.author ? (
          <Author
            content={config.authors ? config.authors[content.author] : content.author}
            style="teaser"
          />
        ) : null}
      </nav>
    </article>
  );
};

export default Teaser;
