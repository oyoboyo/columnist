// Services
import getDocumentFromDir from "./getDocumentFromDir";
import getDocumentFromFile from "./getDocumentFromFile";
import getCollectionFromDir from "./getCollectionFromDir";
import getCollectionsFromDir from "./getCollectionsFromDir";
// Utilities
import checkFileOrDirFromParams from "./utilities/checkFileOrDirFromParams";

/**
 * @file Get Content From Params
 * @param {array} params - all params
 * @param {array} config - all config
 * @returns {object} - { doc, collection, collections }
 */

export default function getContentFromAllParams(params, config) {
  let doc;
  let collection;
  let collections;

  checkFileOrDirFromParams(
    params,

    (file) => {
      doc = getDocumentFromFile(file);
      collection = null;
      collections = null;
    },

    (dir) => {
      doc = getDocumentFromDir(dir);
      collection = getCollectionFromDir(dir, config);
      collections = getCollectionsFromDir(dir, config);
    }
  );

  return { doc, collection, collections };
}
