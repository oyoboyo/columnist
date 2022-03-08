import Image from "next/image";
import Img from "../Img";
import { Link, Html } from "src/components";

const Detail = ({ content }) => {
  const image = content.image ? content.image : null;
  return (
    <article id={content.feature.slug} className="border-bottom pb-4 mb-4">
      <small className="text-muted">{content.feature.name}</small>
      <h1 className="mt-2">{content.title}</h1>
      <p className="lead text-muted mb-3">{content.summary}</p>
      <div className="d-flex justify-between mb-3">
        <small className="text-muted">{content.date}</small>
        <small className="text-muted">{content.readTime} min read </small>
      </div>
      {image ? (
        <div className="text-center">
          <Img width={640} height={380} src={image.src} alt={image.alt} />
          {image.caption ? (
            <small className="text-muted mt-2">{image.caption}</small>
          ) : null}
        </div>
      ) : null}
      <Html className="content-body serif mt-3">{content.html}</Html>
      <nav className="d-flex justify-between small">
        {content.issue ? (
          <span className="me-3">
            <span className="text-muted">From issue </span>
            <Link className="text-dark" href={content.issue.route}>
              {content.issue.name}
            </Link>
          </span>
        ) : null}
        {content.author ? (
          <span>
            <span className="text-muted">Feature by </span>
            {content.author.name}
          </span>
        ) : null}
      </nav>
    </article>
  );
};

export default Detail;
