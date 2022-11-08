// # Sort by order
export const sortByOrder = (array) => {
	return array.sort((a, b) => {
		return a.slug.localeCompare(b.slug, undefined, {
			numeric: true,
			sensitivity: "base",
		});
	});
};

export default sortByOrder;
