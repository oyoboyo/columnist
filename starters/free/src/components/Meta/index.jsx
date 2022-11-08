// Import core
import Head from "next/head";
// Import site
import { site } from ".config";

// Page head component
export default function Meta({ content }) {
	// Render head
	return content ? (
		// Render page head
		<Head>
			<title>{content.title}</title>
			<meta property="og:title" content={content.title} key="og-title" />
			<meta name="description" content={content.description} key="desc" />
			<meta
				property="og:description"
				content={content.description}
				key="og-desc"
			/>
			<meta property="og:site_name" content={site.name} key="og-site-name" />
			{content.image ? (
				<>
					<meta property="og:image" content={`${content.image.src}`} />
					<meta name="twitter:image:alt" content={content.image.alt} />
					<meta name="twitter:card" content="summary_large_image" />
				</>
			) : null}
		</Head>
	) : null;
}
