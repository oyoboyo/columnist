import Image from "next/image";
import { Link } from "src/components";

const Teaser = ({ content }) => {
  return (
    <article className="feature style-teaser border-bottom pb-4 mb-4">
      <div className="feature-meta-wrapper d-flex justify-content-between">
        {content.feature ? (
          <small className="feature-feature me-2">
            <Link href={content.feature.route}>{content.feature.name}</Link>
          </small>
        ) : null}
        <small className="feature-date text-muted">{content.date}</small>
      </div>
      <Link className="feature-title-link text-dark" href={content.route}>
        <h1 className="feature-title h2 mt-3">{content.title}</h1>
      </Link>
      <p className="feature-summary lead text-muted mb-4">{content.summary}</p>
      {content.image ? (
        <Link className="feature-image-link" href={content.route}>
          <Image
            className="feature-image"
            width={640}
            height={380}
            layout="responsive"
            objectFit="cover"
            src={content.image.src}
            alt={content.image.alt}
          />
          <div className="feature-image-caption text-center mt-2">
            <small className="text-muted">{content.image.caption}</small>
          </div>
        </Link>
      ) : null}
      <div className="feature-teaser serif mt-3 mb-3">
        <p>{content.teaser}</p>
      </div>
      <nav className="feature-navigation-wrapper d-flex justify-content-between small">
        <Link className="feature-read-time-link" href={content.route}>
          {content.readTime} min read
        </Link>
        <span className="feature-issue-author-wrapper">
          <span className="feature-issue me-3">
            <span className="text-muted">From issue </span>
            <Link href={content.issue.route}>{content.issue.name}</Link>
          </span>
          <span className="feature-author text-muted">
            Feature by {content.author.name}{" "}
          </span>
        </span>
      </nav>
    </article>
  );
};

export default Teaser;
