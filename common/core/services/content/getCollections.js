import fs from "fs";
// services
import getCollection from "./getCollection";
import getDirectory from "./getDirectory";

/**
 * @file Get Collections From Directory
 * @param {string} dir
 * @param {object} config
 * @return {array} collections
 */

export default function getCollections(dir, config) {
  let collections = [];

  fs.readdirSync(dir).map((item) => {
    const path = `${dir}/${item}`;

    const isDir = fs.existsSync(path) && fs.lstatSync(path).isDirectory();

    if (isDir) {
      let collection;
      let doc;

      const hasIndex = fs.existsSync(`${path}/index.md`);

      if (!hasIndex) {
        collection = getCollection(path, config);
        doc = getDirectory(path);
      }

      if (collection) {
        collections.push({ ...doc, collection });
      }
    }
  });

  return collections.length > 0 ? collections : null;
}
