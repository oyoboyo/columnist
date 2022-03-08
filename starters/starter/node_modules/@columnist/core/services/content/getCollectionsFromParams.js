import checkFileOrDirFromParams from "./utilities/checkFileOrDirFromParams";
import getCollectionsFromDir from "./getCollectionsFromDir";

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
