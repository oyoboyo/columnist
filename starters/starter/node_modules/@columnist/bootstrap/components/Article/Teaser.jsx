import { Link } from "@columnist/core";
import Img from "../Img";

const Teaser = ({ content }) => {
  const image = content.image ? content.image : null;

  return (
    <article className="teaser border-bottom pb-4 mb-4">
      <div className="metadata d-flex justify-between">
        {content.tag ? (
          <small className="text-muted me-2">{content.tag}</small>
        ) : null}
        <small className="text-muted">{content.date}</small>
      </div>
      <Link href={content.route}>
        <h1 className="text-dark h2 mt-3">{content.title}</h1>
      </Link>
      <p className="lead text-muted mb-4">{content.summary}</p>
      {content.image ? (
        <Link className="text-center" href={content.route}>
          <Img width={640} height={380} src={image.src} alt={image.alt} />
          {image.caption ? (
            <small className="text-muted mt-2">{image.caption}</small>
          ) : null}
        </Link>
      ) : null}
      <p className="serif mt-3 mb-3">{content.teaser}</p>
      <nav className="navigation d-flex justify-between">
        <Link className="small" href={content.route}>
          {content.readTime} min read
        </Link>
        {content.author ? (
          <small className="text-muted">Article by {content.author}</small>
        ) : null}
      </nav>
    </article>
  );
};

export default Teaser;
