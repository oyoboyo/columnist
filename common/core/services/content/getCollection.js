import {
  existsSync as exists,
  readdirSync as read,
  lstatSync as status,
} from "fs";

// services
import getDocument from "./getDocument";

/**
 * @file Get Collection From Directory
 * @param {string} dir
 * @param {array} config
 * @return {array} collection
 */

export default function getCollection(dir, config) {
  let collection = [];

  read(dir).map((item) => {
    const path = `${dir}/${item}`;

    if (exists(path)) {
      if (status(path).isFile()) {
        if (!path.includes("index.md")) {
          const doc = getDocument(path);
          collection.push(doc);
        }
      }
      if (status(path).isDirectory()) {
        const index = `${path}/index.md`;
        if (exists(index)) {
          const doc = getDocument(index);
          collection.push(doc);
        }
      }
    }
  });

  if (collection.length > 0) {
    if (config.sorts) {
      config.sorts.map((func) => {
        collection = func(collection);
      });
    }
    if (config.filters) {
      config.filters.map((func) => {
        collection = func(collection);
      });
    }
    return collection;
  } else {
    return null;
  }
}
