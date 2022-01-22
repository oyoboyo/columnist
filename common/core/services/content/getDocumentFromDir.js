import fs from "fs";
import deSlug from "../../utilities/text/deslug";
import makeRouteFromPath from "./utilities/makeRouteFromPath";
import getDocumentFromFile from "./getDocumentFromFile";

/**
 * @file Get document from directory
 *
 * @param {string} dir
 * @returns {object} doc
 */

export default function getDocumentFromDir(dir, options) {
  let doc;

  // Check if "index.md" in dir
  const indexExists = fs.existsSync(`${dir}/index.md`);

  if (indexExists) {
    // Get document from file
    doc = getDocumentFromFile(`${dir}/index.md`, options);
  } else if (!indexExists) {
    // Make document from directory
    const type = "directory";
    // Make route, slug and params from directory path
    const { route, slug, params } = makeRouteFromPath(dir);
    // Make title from slug
    const title = deSlug(slug);

    doc = {
      type,
      slug,
      params,
      route,
      title,
    };
  }
  return doc;
}
