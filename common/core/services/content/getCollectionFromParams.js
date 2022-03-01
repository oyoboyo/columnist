// Services
import getCollectionFromDir from "./getCollectionFromDir";
// Utilities
import checkFileOrDirFromParams from "./utilities/checkFileOrDirFromParams";

/**
 * @file Get Collection From Params
 *
 * @param {*} params
 * @param {*} config
 * @returns
 */

export default async function getCollectionFromParams(params, config) {
  let collection;

  checkFileOrDirFromParams(
    params,
    (file) => {
      collection = null;
    },
    (dir) => {
      collection = getCollectionFromDir(dir, config);
    }
  );

  return collection;
}
