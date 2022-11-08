// Import components
import Teaser from "./Teaser";
import Detail from "./Detail";

// # Article component
export default function Article({ content, teaser, detail }) {
	// Render article

	return teaser ? (
		// Render teaser
		<Teaser content={content} />
	) : detail ? (
		// Render detail
		<Detail content={content} />
	) : null;
}
