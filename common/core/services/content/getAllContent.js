import fs from "fs";
// services/content
import getDocument from "./getDocument";
import getCollection from "./getCollection";
import getCollections from "./getCollections";
import getDirectory from "./getDirectory";

/**
 * @file Get Content From Params
 * @param {array} params - params
 * @param {array} config - config
 * @returns {object} - { doc, collection, collections }
 */

export default function getAllContent(all, config) {
  let doc;
  let collection;
  let collections;

  const dir = `content/${all.join("/")}`;
  const file = `content/${all.join("/")}.md`;

  const isDir = fs.existsSync(dir) && fs.lstatSync(dir).isDirectory();
  const isFile = fs.existsSync(file) && fs.lstatSync(file).isFile();

  if (isFile) {
    doc = getDocument(file);
    collection = null;
    collections = null;
  }

  if (isDir) {
    const index = `${dir}/index.md`;
    const hasIndex = fs.existsSync(index);

    if (hasIndex) {
      doc = getDocument(index);
    } else {
      collection = getCollection(path, config);
      doc = getDirectory(path);
    }

    collection = getCollection(dir, config);
    collections = getCollections(dir, config);
  }

  return { doc, collection, collections };
}
