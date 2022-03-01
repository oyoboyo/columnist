import fs from "fs";
// services
import getDocumentFromDir from "./getDocumentFromDir";
import getDocumentFromFile from "./getDocumentFromFile";
// services/utilities
import checkFileOrDirFromPath from "./utilities/checkFileOrDirFromPath";
import processCollection from "./utilities/processCollection";

/**
 * @file Make Collection From Files In Directory
 *
 * @param {string} dir
 * @return {array} collection
 */

export default function getCollectionFromDir(dir, config) {
  let collection = [];

  fs.readdirSync(dir).map((item) => {
    const path = `${dir}/${item}`;

    checkFileOrDirFromPath(
      path,
      (file) => {
        const fileIsIndex = file.includes("index.md");
        if (!fileIsIndex) {
          const doc = getDocumentFromFile(file);
          collection.push(doc);
        }
      },
      (dir) => {
        const dirHasIndex = fs.existsSync(`${dir}/index.md`);
        if (dirHasIndex) {
          const doc = getDocumentFromFile(`${dir}/index.md`);
          collection.push(doc);
        }
      }
    );
  });

  if (collection.length > 0) {
    let processors = [];
    if (config.sorts) {
      processors.push(...config.sorts);
    }
    if (config.filters) {
      processors.push(...config.filters);
    }

    collection = processCollection(collection, processors);

    return collection;
  } else {
    return null;
  }
}
