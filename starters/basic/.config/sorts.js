export const sortByDate = (array) => {
  return array.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

export const sortByOrder = (array) => {
  return array.sort((a, b) => {
    return a.slug.localeCompare(b.slug, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });
};
