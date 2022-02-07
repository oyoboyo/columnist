// Utilities
import makeTeaserFromContent from "./utilities/makeTeaserFromContent";
// Components
import { Link } from "@columnist/core";
import Img from "../Img";

const Teaser = ({ content }) => {
  const teaser = makeTeaserFromContent(content);

  return (
    <article className="teaser border-bottom pb-4 mb-4">
      <div className="metadata d-flex justify-between">
        {teaser.tag ? (
          <small className="text-muted me-2">{teaser.tag}</small>
        ) : null}
        {teaser.date ? (
          <small className="text-muted">{teaser.date}</small>
        ) : null}
      </div>
      <Link href={teaser.route}>
        <h1 className="text-dark h2 mt-3">{teaser.title}</h1>
      </Link>
      {teaser.summary ? (
        <p className="lead text-muted mb-4">{teaser.summary}</p>
      ) : null}
      {teaser.image ? (
        <Link className="text-center" href={teaser.route}>
          <Img
            width={640}
            height={380}
            src={teaser.image.src}
            alt={teaser.image.alt}
          />
          {teaser.image.caption ? (
            <small className="text-muted mt-2">{teaser.caption}</small>
          ) : null}
        </Link>
      ) : null}
      {teaser.truncated ? (
        <p className="serif mt-3 mb-3">{teaser.truncated}</p>
      ) : null}
      <nav className="navigation d-flex justify-between">
        <Link className="small" href={teaser.route}>
          {teaser.readTime ? (
            <span>{teaser.readTime} min read</span>
          ) : (
            <span>Read more</span>
          )}
        </Link>
        {teaser.author ? (
          <small className="text-muted">Article by {teaser.author}</small>
        ) : null}
      </nav>
    </article>
  );
};

export default Teaser;
