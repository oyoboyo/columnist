import {
  existsSync as exists,
  readdirSync as read,
  lstatSync as status,
} from "fs";
// services
import getCollection from "./getCollection";
import getDirectory from "./getDirectory";

/**
 * @file Get Collections From Directory
 * @param {string} dir
 * @param {object} config
 * @return {array} collections
 */

export default function getCollections(location, config) {
  let isParams = Array.isArray(location);
  // Make dir from param or pass location
  const dir = isParams ? `content/${location.join("/")}` : location;

  let collections = [];

  if (exists(dir) && status(dir).isDirectory()) {
    read(dir).map((item) => {
      const path = `${dir}/${item}`;

      if (exists(path) && status(path).isDirectory()) {
        let collection;
        let doc;

        if (!exists(`${path}/index.md`)) {
          collection = getCollection(path, config);
          doc = getDirectory(path);
        }

        if (collection) {
          collections.push({ ...doc, collection });
        }
      }
    });
  }

  return collections.length > 0 ? collections : null;
}
