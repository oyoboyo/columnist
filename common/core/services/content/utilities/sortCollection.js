// Sort collection by sorts
export default function sortCollection(collection, sorts) {
	// Map collection by type with property and direction
	sorts.map(({ property, direction, type }) => {
		// Sort date type
		if (type === "date") {
			collection = collection.sort((a, b) => {
				return direction === "asc"
					? new Date(a[property]) - new Date(b[property])
					: new Date(b[property]) - new Date(a[property]);
			});
		} else {
			// Sort string type	(default)
			collection = collection.sort((a, b) => {
				return direction === "asc"
					? a.slug.localeCompare(b[property], undefined, {
							numeric: true,
							sensitivity: "base",
					  })
					: b.slug.localeCompare(a[property], undefined, {
							numeric: true,
							sensitivity: "base",
					  });
			});
		}
	});
	// Return sorted collection
	return collection;
}
