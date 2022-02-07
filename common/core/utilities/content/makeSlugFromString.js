import slugify from "slugify";

/**
 * @file Make slug
 *
 * @param {string} string
 * @returns string - slug
 */

const makeSlugFromString = (text) => {
  return slugify(text, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: false,
    locale: "en",
    trim: true,
  });
};

export default makeSlugFromString;
