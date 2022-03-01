import processCollection from "./processCollection";

const processCollections = (array, processors) => {
  return array.map((object) => {
    return {
      ...object,
      collection: processCollection(object.collection, processors),
    };
  });
};

export default processCollections;
