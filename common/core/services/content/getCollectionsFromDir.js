import fs from "fs";
// services
import getDocumentFromDir from "./getDocumentFromDir";
import getCollectionFromDir from "./getCollectionFromDir";
// services/utilities
import checkFileOrDirFromPath from "./utilities/checkFileOrDirFromPath";

/**
 * @file Get Collection From Directory
 *
 * @param {string} dir
 * @param {object} config
 * @return {array} collections
 */

export default function getCollectionsFromDir(dir, config) {
  let collections = [];

  fs.readdirSync(dir).map((item) => {
    const path = `${dir}/${item}`;

    checkFileOrDirFromPath(path, null, (dir) => {
      let collection;
      let doc;

      const dirHasIndex = fs.existsSync(`${dir}/index.md`);

      if (!dirHasIndex) {
        collection = getCollectionFromDir(dir, config);
        doc = getDocumentFromDir(dir, config);
      }

      if (collection) {
        collections.push({ ...doc, collection });
      }
    });
  });

  return collections.length > 0 ? collections : null;
}
