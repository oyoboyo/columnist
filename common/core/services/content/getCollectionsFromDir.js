import fs from "fs";
// Services
import getDocumentFromDir from "./getDocumentFromDir";
import getCollectionFromDir from "./getCollectionFromDir";

/**
 * @file Get Collection From Directory
 *
 * @param {string} dir
 * @return {object} {doc, collections}
 */

const getCollectionsFromDirectory = (dir, options) => {
  // Initialize collections
  let collections = [];

  // Iterate directory
  fs.readdirSync(dir).map((item) => {
    // Check item path
    const itemPath = `${dir}/${item}`;
    const itemIsDir = fs.lstatSync(itemPath).isDirectory();

    if (itemIsDir) {
      // Get sub-collection
      const collection = getCollectionFromDir(itemPath, options);
      const doc = getDocumentFromDir(itemPath, options);

      collections.push({ ...doc, collection });
    }
  });

  // Return if collections
  if (collections.length > 0) {
    return collections;
  } else {
    return null;
  }
};

export default getCollectionsFromDirectory;
