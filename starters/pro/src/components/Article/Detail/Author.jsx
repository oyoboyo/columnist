import authors from ".data/authors";

// # Article detail author component
export default function Author({ content }) {
	// If author get author from authors
	if (authors[content]) {
		content = authors[content];
	}
	// Render author
	return typeof content === "object" ? (
		<div className="article-detail-author border-top d-flex align-items-centers mt-5 pt-3">
			{
				// Author image
				content.image ? (
					<div className="me-3">
						<img
							className="author-image img-fluid rounded-circle"
							src={content.image.src}
							alt={content.image.alt}
						/>
					</div>
				) : null
			}
			<div className="author-info">
				{
					// Author name
					<h1 className="author-name h6 mb-1">Article by {content.name}</h1>
				}

				{
					// Author bio
					content.bio ? (
						<div className="author-bio mb-2">{content.bio}</div>
					) : null
				}
				{
					// Author email
					content.email ? (
						<a className="author-email" href={`mailto:${content.email}`}>
							{content.email}
						</a>
					) : null
				}
				{
					// Author social links
					content.social ? (
						<ul className="author-social nav d-flex">
							{/*content.social.map(({ url, Icon }, index) => (
                <li key={index} className="nav-item">
                  <a className="ps-0 nav-link" target="_blank" href={url}>
                    <Icon />
                  </a>
                </li>
              ))*/}
						</ul>
					) : null
				}
			</div>
		</div>
	) : (
		<small className="text-muted">Article by {content}</small>
	);
}
