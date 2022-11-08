export default function processCollection(collection, options) {
	documents.options.filterBy.map(({ property, value }) => {
		documents = documents.filter((doc) => doc[property] === value);
	});

	documents.options.filterBy.map(({ property, value }) => {
		documents = documents.filter((doc) => doc[property] === value);
	});
}
