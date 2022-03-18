import { Link } from "@columnist/core";

function Teaser({ content }) {
  return (
    <div className="author d-flex align-items-center">
      {content.image ? (
        <div className="teaser-photo me-2">
          <img className="img-fluid rounded-circle" src={content.image.src} />
        </div>
      ) : null}
      {content.route ? (
        <small>
          <Link className="text-muted" href={content.route}>
            Article by {content.name}
          </Link>
        </small>
      ) : (
        <small className="text-muted">
          Article by {content.name ? content.name : content}
        </small>
      )}
    </div>
  );
}

function Detail({ content }) {
  return (
    <div className="author border-top d-flex align-items-centers mt-5 pt-3">
      {content.image ? (
        <div className="detail-photo me-3">
          <img
            className="img-fluid rounded-circle"
            src={content.image.src}
            alt={content.image.alt}
          />
        </div>
      ) : null}
      <div className="detail-info">
        <h1 className="h6 mb-1">
          Article by {content.name ? content.name : content}
        </h1>
        {content.bio ? <div className="mb-2">{content.bio}</div> : null}
        {content.email ? (
          <a href={`mailto:${content.email}`}>{content.email}</a>
        ) : null}
        {content.social ? (
          <ul className="nav d-flex">
            {content.social.map(({ url, Icon }, index) => (
              <li key={index} className="nav-item">
                <a className="ps-0 nav-link" target="_blank" href={url}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default function Author({ content, style }) {
  return style === "teaser" ? (
    <Teaser content={content} />
  ) : style === "detail" ? (
    <Detail content={content} />
  ) : null;
}
