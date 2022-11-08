// Import core
import { Html } from "@columnist/core";
// Import components
import Img from "../Img";

// Get config
export const config = {
	image: {
		width: 960,
		height: 640,
		optimize: true,
	},
};

// # Page component
const Page = ({ content }) => {
	// Render page
	return (
		<article className="page-detail">
			<h1 className="mt-2">{content.title}</h1>
			{
				// Article summary
				content.description ? (
					<p className="article-description lead text-muted mb-3">
						{content.description}
					</p>
				) : null
			}
			{
				// Article image
				content.image && config.image ? (
					<div className="article-image text-center">
						<Img
							width={960}
							height={640}
							src={content.image.src}
							alt={content.image.alt}
							optimize={true}
						/>
						{
							// Article image caption
							content.image.caption ? (
								<small className="article-image-caption text-muted mt-2 ">
									{content.image.caption}
								</small>
							) : null
						}
					</div>
				) : null
			}
			{content.html ? (
				<Html className="article-html serif mt-3">{content.html}</Html>
			) : null}
		</article>
	);
};

export default Page;
