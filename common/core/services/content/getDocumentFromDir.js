import fs from "fs";
// Utilities
import makeStringFromSlug from "../../utilities/content/makeStringFromSlug";
import makeRouteFromPath from "./utilities/makeRouteFromPath";
// Services
import getDocumentFromFile from "./getDocumentFromFile";

/**
 * @file Get document from directory
 *
 * @param {string} dir
 * @returns {object} doc
 */

export default function getDocumentFromDir(dir) {
  let doc;

  const dirHasIndex = fs.existsSync(`${dir}/index.md`);

  if (dirHasIndex) {
    doc = getDocumentFromFile(`${dir}/index.md`);
  } else {
    const type = "directory";
    const { route, slug, params } = makeRouteFromPath(dir);
    const title = makeStringFromSlug(slug);

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
