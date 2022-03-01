import getDocumentFromDir from "./getDocumentFromDir";
import getDocumentFromFile from "./getDocumentFromFile";
import checkFileOrDirFromParams from "./utilities/checkFileOrDirFromParams";

/**
 * @file Get Document From Params
 * @param {params} params
 * @returns {object} doc
 */

export default function getDocumentFromParams(params) {
  let doc;

  checkFileOrDirFromParams(
    params,
    (file) => {
      doc = getDocumentFromFile(file);
    },
    (dir) => {
      doc = getDocumentFromDir(dir);
    }
  );

  return doc;
}
