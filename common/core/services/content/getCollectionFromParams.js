import checkFileOrDirFromParams from "./utilities/checkFileOrDirFromParams";
import getCollectionFromDir from "./getCollectionFromDir";

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
