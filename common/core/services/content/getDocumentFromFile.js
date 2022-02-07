import processMarkdownFromFile from "./utilities/processMarkdownFromFile";
import makeRouteFromFile from "./utilities/makeRouteFromPath";

/**
 * @file Get Document From File
 *
 * @param {string} file
 * @param {object} include
 * @param {object} options
 * @returns {object} document
 */

export default function getDocumentFromFile(file) {
  // file is md?
  const fileIsMd = file.includes(".md");

  if (fileIsMd) {
    // Process document
    const { params, slug, route } = makeRouteFromFile(file);
    const { data, html, text } = processMarkdownFromFile(file);
    // Get collection from params
    const collection = params[params.length - 2];

    // Make document
    const doc = {
      // Route
      params,
      slug,
      route,
      collection,
      // Data
      ...data,
      // Content
      text,
      html,
    };
    return { ...doc };
  }
}
