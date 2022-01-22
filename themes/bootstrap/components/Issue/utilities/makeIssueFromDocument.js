import { slugify } from "@columnist/core";

const makeIssueFromDocument = (doc) => {
  let issueDetails = {};

  if (doc) {
    if (doc.features) {
      issueDetails.features = doc.features.map((feature) => {
        return {
          ...feature,
          slug: slugify(feature.name),
          path: `/issues/${doc.slug}#${slugify(feature.name)}`,
        };
      });
    }
  }

  return {
    ...doc,
    ...issueDetails,
  };
};

export default makeIssueFromDocument;
