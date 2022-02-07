import getDocumentFromDir from "./getDocumentFromDir";
import getDocumentFromFile from "./getDocumentFromFile";
import checkFileOrDirFromParams from "./utilities/checkFileOrDirFromParams";

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

  console.log(doc);

  return doc;
}
