// node_modules
import path from "path";
import { walk } from "@root/walk";
// services
import getDocument from "./getDocument";
import processCollection from "./utilities/processCollection";

/**
 * @file Get Documents From Directory (And Sub-Directories)
 *
 * @param {string} dir
 * @param {object} config
 * @returns {array} documents
 */

export default async function getDocuments(dir, options) {
  let files = [];

  const walker = async (error, pathname, item) => {
    if (error) {
      throw error;
    }

    if (item.isFile() && item.name.includes(".md")) {
      files.push({
        name: item.name,
        path: path.dirname(pathname),
      });
    }
  };

  await walk(dir, walker);

  let documents = files.map((file) => {
    const doc = getDocument(`${file.path}/${file.name}`, options);
    return doc ? doc : null;
  });

  documents = processCollection(documents, options);

  return documents ? documents : null;
}
