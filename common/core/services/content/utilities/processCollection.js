export default function processCollection(collection, options) {
  if (collection.length > 0) {
    // Process array based on config
    if (options.sorts) {
      options.sorts.map((func) => {
        collection = func(collection);
      });
    }
    if (options.filters) {
      options.filters.map((func) => {
        collection = func(collection);
      });
    }
    if (options.limit) {
      collection = collection.slice(0, options.limit - 1);
    }
    return collection;
  } else {
    return null;
  }
}
