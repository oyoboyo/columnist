import processMarkdownFromFile from "./utilities/processMarkdownFromFile";
import makeRouteFromFile from "./utilities/makeRouteFromPath";

/**
 * @file Get Document From File
 *
 * @param {string} file
 * @param {object} config
 * @returns {object} doc
 */

const calcOrderFromFile = (slug) => {
  let hasNum = /^\d+\-/;

  if (hasNum.test(slug)) {
    let dash = slug.indexOf("-");
    let number = slug.slice(0, dash);
  }
};

export default function getDocumentFromFile(file, config) {
  const isMd = file.includes(".md") || file.includes(".mdx");

  if (isMd) {
    const { params, slug, route } = makeRouteFromFile(file);
    const { data, html, text } = processMarkdownFromFile(file);

    calcOrderFromFile(slug);

    return {
      params,
      slug,
      route,
      ...data,
      text,
      html,
    };
  } else {
    throw "Error: Not a Markdown file";
  }
}
