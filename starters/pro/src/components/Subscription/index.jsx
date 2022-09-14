// Import components
import Card from "./Card";
import Item from "./Item";

// # Subscription component
export default function Subscription({ content, current, card, item }) {
	// Render subscription as card or
	return card ? (
		<Card content={content} current={current} />
	) : item ? (
		<Item content={content} current={current} />
	) : null;
}
