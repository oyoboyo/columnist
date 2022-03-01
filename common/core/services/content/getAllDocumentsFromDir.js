// node_modules
import path from "path";
import { walk } from "@root/walk";
// services
import getDocumentFromFile from "./getDocumentFromFile";
// services/utilities
import processDocuments from "./utilities/processCollection";

/**
 * @file Get documents from directory and all sub directories
 *
 * @param {string} dir
 * @param {object} config
 * @returns {array} documents
 */

export default async function getAllDocumentsFromDir(dir, config) {
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
    const doc = getDocumentFromFile(`${file.path}/${file.name}`);
    return doc ? doc : null;
  });

  let processors = [];

  if (config.sorts) {
    processors.push(...config.sorts);
  }
  if (config.filters) {
    processors.push(...config.filters);
  }

  documents = processDocuments(documents, processors);

  return documents ? documents : null;
}
