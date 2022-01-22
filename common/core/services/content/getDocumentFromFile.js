import quantify from "../../utilities/text/quantify";
import truncate from "../../utilities/text/truncate";

import processMarkdownFromFile from "./utilities/processMarkdownFromFile";
import makeRouteFromFile from "./utilities/makeRouteFromPath";

/**
 *
 * @file Get Document From File
 *
 * @param {string} file
 * @param {object} include
 * @param {object} options
 * @returns {object} document
 */

export default function getDocumentFromFile(file, options) {
  // file is md?
  const fileIsMd = file.includes(".md");

  if (fileIsMd) {
    // Process document
    const { params, slug, route } = makeRouteFromFile(file);
    const { data, html, text } = processMarkdownFromFile(file);

    // Default truncation limit
    const limit = options && options.truncation ? options.truncation : 200;
    // Process text
    const teaser = truncate(text, limit);
    const quantities = quantify(text);

    // Make document
    const doc = {
      // Route
      params,
      slug,
      route,
      // Data
      ...data,
      // Details
      ...quantities,
    };

    // Check includes
    if (options) {
      if (options.text) {
        // Include plain text
        doc.text = text;
      }
      if (options.html) {
        // Include HTML
        doc.html = html;
      }
      if (options.teaser) {
        // Include teaser
        doc.teaser = teaser;
      }
    }

    return { ...doc };
  }
}
