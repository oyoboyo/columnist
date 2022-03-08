import fs from "fs";
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

  fs.readdirSync(dir).map((item) => {
    const path = `${dir}/${item}`;

    const isDir = fs.existsSync(dir) && fs.lstatSync(dir).isDirectory();
    const isFile = fs.existsSync(file) && fs.lstatSync(file).isFile();

    if (isFile) {
      const isIndex = path.includes("index.md");
      if (!isIndex) {
        const doc = getDocument(path);
        collection.push(doc);
      }
    }

    if (isDir) {
      const index = `${path}/index.md`;
      const hasIndex = fs.existsSync(index);
      if (hasIndex) {
        const doc = getDocument(index);
        collection.push(doc);
      }
    }
  });

  if (collection.length > 0) {
    let processors = [];
    if (config.sorts) {
      processors.push(...config.sorts);
    }
    if (config.filters) {
      processors.push(...config.filters);
    }

    collection = processors.map((processor) => {
      collection = processor(collection);
    });

    return collection;
  } else {
    return null;
  }
}
