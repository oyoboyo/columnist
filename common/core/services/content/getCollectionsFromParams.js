// Utilities
import checkFileOrDirFromParams from "./utilities/checkFileOrDirFromParams";
// Services
import getCollectionsFromDir from "./getCollectionsFromDir";

/**
 * @file Get Collections From Params
 *
 * @param {array} params
 * @param {array} options
 * @returns {array} collections
 */

export default async function getCollectionsFromParams(params, config) {
  let collections;

  checkFileOrDirFromParams(
    params,
    (file) => {
      collections = null;
    },
    (dir) => {
      collections = getCollectionsFromDir(dir, config);
    }
  );

  return collections;
}
