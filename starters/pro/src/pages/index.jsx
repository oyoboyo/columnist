// Import core
import { getDocuments } from "@columnist/core";
// Import components
import { Column, Article } from "../components";
// # Home page
export default function HomePage({ collection }) {
	// Render home page
	return (
		<Column style="default">
			{
				// Render collection
				collection.map((doc, index) => (
					<Article teaser content={doc} key={index} />
				))
			}
		</Column>
	);
}

export async function getStaticProps() {
	// Get documents from content
	let collection = await getDocuments("content", {
		markdown: {
			html: {
				truncate: { maxChars: 300 },
			},
		},
		filters: [{ property: "type", value: "article" }],
		sorts: [{ property: "date", direction: "asc", type: "date" }],
	});

	// Return page props
	return {
		props: {
			// Return collection
			collection,
			// Include meta tags
			meta: {
				title: "Home",
				description: "Read new content from Columnist.",
			},
			// Include style
			style: {
				header: "hero",
			},
		},
	};
}
