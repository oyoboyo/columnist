import { Link } from "@columnist/core";

export default function Author({ content }) {
  return typeof content === "object" ? (
    // Author content
    <div className="author d-flex align-items-center">
      {
        // Author image
        content.image ? (
          <div className="teaser-photo me-2">
            <img
              className="img-fluid rounded-circle"
              src={content.image.src}
              alt={content.image.alt}
            />
          </div>
        ) : null
      }
      {
        // Author link
        content.route ? (
          <small>
            <Link className="text-muted" href={content.route}>
              Article by {content.name}
            </Link>
          </small>
        ) : (
          <small className="text-muted">Article by {content.name}</small>
        )
      }
    </div>
  ) : null;
}
