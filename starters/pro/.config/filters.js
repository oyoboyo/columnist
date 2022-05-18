// Filter articles
export const filterArticles = (array) => {
  return array.filter((item) => item.type === "article");
};

// Filter published
export const filterDrafts = (array) => {
  return array.filter((item) => !item.draft);
};
