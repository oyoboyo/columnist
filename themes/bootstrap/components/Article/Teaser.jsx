// components
import { Link } from "@columnist/core";
import Img from "../Img";
// utilities
import makeTeaser from "./utilities/makeTeaser";

const Teaser = ({ content }) => {
  content = makeTeaser(content);
  return (
    <article className="teaser border-bottom pb-4 mb-4">
      <div className="metadata d-flex justify-between">
        {content.tag ? (
          <small className="text-muted me-2">{content.tag}</small>
        ) : null}
        {content.date ? (
          <small className="text-muted">{content.date}</small>
        ) : null}
      </div>
      <Link href={content.route}>
        <h1 className="text-dark h2 mt-3">{content.title}</h1>
      </Link>
      {content.summary ? (
        <p className="lead text-muted mb-4">{content.summary}</p>
      ) : null}
      {content.image ? (
        <Link className="text-center" href={content.route}>
          <Img
            width={640}
            height={380}
            src={content.image.src}
            alt={content.image.alt}
          />
          {content.image.caption ? (
            <small className="text-muted mt-2">{content.caption}</small>
          ) : null}
        </Link>
      ) : null}
      {content.truncated ? (
        <p className="serif mt-3 mb-3">{content.truncated}</p>
      ) : null}
      <nav className="navigation d-flex justify-between">
        <Link className="small" href={content.route}>
          {content.readTime ? (
            <span>{content.readTime} min read</span>
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
