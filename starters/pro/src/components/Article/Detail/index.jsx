// Import core
import { Html, makeDate } from "@columnist/core";
// Import components
import Author from "./Author";
import Img from "../../Img";
import Gate from "../Gate";
// Import config
import { site } from ".config";

// # Article detail component
const Detail = ({ content }) => {
	// Get user (to do)
	const user = true;

	// Render article detail
	return (
		<article className="article-detail">
			{
				// If tag render tag
				content.tag ? (
					<small className="article-tag text-muted me-2">{content.tag}</small>
				) : null
			}
			{
				// Render title
				<h1 className="mt-2">{content.title}</h1>
			}
			{
				// If description render description
				content.description ? (
					<p className="article-description lead text-muted mb-3">
						{content.description}
					</p>
				) : null
			}
			{
				// If article render date and read time
				content.type == "article" ? (
					<div className="article-date d-flex justify-content-between mb-3">
						{
							// If date render date
							content.date ? (
								<small className="article-date text-muted">
									{
										// Make date from date, locale, and date string format
										makeDate(content.date, site.locale, site.dateStringFormat)
									}
								</small>
							) : null
						}
						{
							// If read time render read time
							content.readTime ? (
								<small className="article-read-time text-muted">
									{content.readTime} min read
								</small>
							) : null
						}
					</div>
				) : null
			}
			{
				// If image render image
				content.image ? (
					<div className="article-image text-center">
						<Img
							width={940}
							height={640}
							src={content.image.src}
							alt={content.image.alt}
							optimize={true}
						/>
						{
							// If image caption render caption
							content.image.caption ? (
								<small className="article-image-caption text-muted mt-2 ">
									{content.image.caption}
								</small>
							) : null
						}
					</div>
				) : null
			}

			{
				// If gated render gated with gate
				content.gated ? (
					<Gate />
				) : (
					// Otherwise, render HTML
					<Html className="article-html serif mt-3">{content.html}</Html>
				)
			}
			{
				// If author render author
				content.author ? <Author content={content.author} /> : null
			}
		</article>
	);
};

export default Detail;
