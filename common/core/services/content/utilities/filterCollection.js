// Pass array of filter objects
export default function filterCollectionByFilters(collection, filters) {
	// Map array with property and vale
	filters.map(({ property, value }) => {
		// Return filtered
		collection = collection.filter((doc) => doc[property] === value);
	});
	// Return filtered collection
	return collection;
}
