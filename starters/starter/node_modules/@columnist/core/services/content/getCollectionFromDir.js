import fs from "fs";

import getDocumentFromFile from "./getDocumentFromFile";
import getDocumentFromDir from "./getDocumentFromDir";

/**
 * @file Make Collection From Files In Directory
 *
 * @param {string} dir
 * @return {array} collection
 */

export default function getCollectionFromDir(dir, options) {
  // Initialize output:
  const collection = [];

  // Map directory:
  fs.readdirSync(dir).map((item) => {
    // Path:
    const path = `${dir}/${item}`;

    // If path is a file...
    const isDir = fs.lstatSync(path).isDirectory();
    const isFile = fs.lstatSync(path).isFile();
    if (isFile) {
      // ...and not an "index.md"
      const isIndex = item === "index.md";
      if (!isIndex) {
        // then get doc and push to collection
        let doc = getDocumentFromFile(path, options);
        collection.push(doc);
      }
      // otherwise, if directory...
    } else if (isDir) {
      //... has an "index.md"
      const hasIndex = fs.existsSync(`${path}/index.md`);
      if (hasIndex) {
        // then push directory index doc to collection
        let doc = getDocumentFromFile(`${path}/index.md`, options);
        collection.push(doc);
      }
    }
  });

  // Return and sort collection (if collection):
  if (collection.length > 0) {
    collection.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    return collection;
  } else {
    return null;
  }
}
