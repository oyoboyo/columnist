import path from "path";
import { walk } from "@root/walk";
// Services
import getDocumentFromFile from "./getDocumentFromFile";

/**
 * @file Get documents from directory and all sub directories
 *
 * @param {string} dir
 * @param {object} include
 * @param {object} options
 * @returns {array} documents
 */

export default async function getAllDocumentsFromDir(dir, options) {
  // Initialize files
  let files = [];

  // Initialize walker
  const walker = async (error, pathname, item) => {
    if (error) {
      throw error;
    }

    // Find and push files
    if (item.isFile()) {
      // file is Md ?
      const fileIsMd = item.name.includes(".md");

      if (fileIsMd) {
        let file = {
          name: item.name,
          path: path.dirname(pathname),
        };
        files.push(file);
      }
    }
  };

  // Walk directory and directories
  await walk(dir, walker);

  // Then process files to collection
  const documents = files.map((file) => {
    const doc = getDocumentFromFile(`${file.path}/${file.name}`, options);
    return {
      ...doc,
    };
  });

  return documents;
}
