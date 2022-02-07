// Utilities
import checkFileOrDirFromParams from "./utilities/checkFileOrDirFromParams";
// Services
import getCollectionsFromDir from "./getCollectionsFromDir";

/**
 * @file Get Collections From Params
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */

export default async function getCollectionsFromParams(params, options) {
  let collections;

  checkFileOrDirFromParams(
    params,
    (file) => {
      collections = null;
    },
    (dir) => {
      collections = getCollectionsFromDir(dir, options);
    }
  );

  return collections;
}
