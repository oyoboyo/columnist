// Import core
import { Link } from "@columnist/core";
// Import data
import authors from ".data/authors";

// # Article teaser author component
export default function Author({ content }) {
	// If author get author from authors
	if (authors[content]) {
		content = authors[content];
	}
	// If type of object (author from data)
	return typeof content === "object" ? (
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
	) : (
		<small className="text-muted">Article by {content}</small>
	);
}
