import getDocumentFromDir from "./getDocumentFromDir";
import getDocumentFromFile from "./getDocumentFromFile";
import checkFileOrDirFromParams from "./utilities/checkFileOrDirFromParams";

export default function getDocumentFromParams(params, options) {
  let doc;

  checkFileOrDirFromParams(
    params,
    (file) => {
      doc = getDocumentFromFile(file, options);
    },
    (dir) => {
      doc = getDocumentFromDir(dir, options);
    }
  );

  return doc;
}
