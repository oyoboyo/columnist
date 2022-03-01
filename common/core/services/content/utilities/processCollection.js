const processCollection = (array, processors) => {
  if (processors) {
    processors.map((processor) => {
      array = processor(array);
    });
    return array;
  }
};

export default processCollection;
