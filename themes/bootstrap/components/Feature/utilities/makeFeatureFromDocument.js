import { slugify } from "@columnist/core";

const makeFeatureFromDocument = (doc) => {
  let featureDetails = {};

  if (doc) {
    if (doc.author) {
      featureDetails.author = {
        name: doc.author,
        slug: slugify(doc.author),
        route: `/features/?author=${slugify(doc.author)}`,
      };
    }
    if (doc.issue) {
      featureDetails.issue = {
        name: doc.issue,
        slug: slugify(doc.issue),
        route: `/issues/${slugify(doc.issue)}`,
      };
    }
    if (doc.feature) {
      featureDetails.feature = {
        name: doc.feature,
        slug: slugify(doc.feature),
        route: `/issues/${slugify(doc.issue)}#${slugify(doc.feature)}`,
      };
    }
  }

  return {
    ...doc,
    ...featureDetails,
  };
};

export default makeFeatureFromDocument;
