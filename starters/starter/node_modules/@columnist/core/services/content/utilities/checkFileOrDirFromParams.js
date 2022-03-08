import fs from "fs";

/**
 * @file Is Content File Or Dir (From Params)?
 *
 * @param {array} params
 * @param {function} ifFile
 * @param {function} ifDir
 * @returns
 */

export default async function checkFileOrDirFromParams(params, ifFile, ifDir) {
  // Make paths from params
  let dir = `content/${params.join("/")}`;
  let file = `content/${params.join("/")}.md`;

  // Check path types
  const isDir = fs.existsSync(dir) && fs.lstatSync(dir).isDirectory();
  const isFile = fs.existsSync(file) && fs.lstatSync(file).isFile();

  // Return functions with path as argument
  if (isFile) {
    return ifFile(file);
  } else if (isDir) {
    return ifDir(dir);
  }
}
