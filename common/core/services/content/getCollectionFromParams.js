// Services
import getCollectionFromDir from "./getCollectionFromDir";
// Utilities
import checkFileOrDirFromParams from "./utilities/checkFileOrDirFromParams";

/**
 * @file Get Collection From Params
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */

export default async function getCollectionFromParams(params, options) {
  let collection;

  checkFileOrDirFromParams(
    params,
    (file) => {
      collection = null;
    },
    (dir) => {
      collection = getCollectionFromDir(dir, options);
    }
  );

  return collection;
}
