// Import utilities
import makeClasses from "./utilities/makeClasses";

// Column component
export default function Column({ children, name, style }) {
	// Make classes
	const { containerClass, columnClass } = makeClasses(name, style);
	return (
		<div className={`${containerClass}${columnClass} mb-3`}>{children}</div>
	);
}
