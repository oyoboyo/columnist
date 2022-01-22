import { slugify } from "@columnist/core";

const makeArticleFromDocument = (doc) => {
  let articleDetails = {};

  if (doc) {
    if (doc.author) {
      articleDetails.author = {
        name: doc.author,
        slug: slugify(doc.author),
        route: `/articles/?author=${slugify(doc.author)}`,
      };
    }
  }

  return {
    ...doc,
    ...articleDetails,
  };
};

export default makeArticleFromDocument;
