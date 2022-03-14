import { existsSync as exists, lstatSync as status } from "fs";
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

  if (exists(file) && status(file).isFile()) {
    doc = getDocument(file);
    collection = null;
    collections = null;
  }

  if (exists(dir) && status(dir).isDirectory()) {
    const index = `${dir}/index.md`;
    doc = exists(index) ? getDocument(index) : getDirectory(dir);

    collection = getCollection(dir, config);
    collections = getCollections(dir, config);
  }

  return { doc, collection, collections };
}
