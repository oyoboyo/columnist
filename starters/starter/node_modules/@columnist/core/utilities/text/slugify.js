import slugify from "slugify";

const slugifyWrapper = (content) => {
  return slugify(content, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: false,
    locale: "en",
    trim: true,
  });
};

export default slugifyWrapper;
