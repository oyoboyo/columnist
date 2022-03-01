import fs from "fs";

/**
 * @file Check File Or Dir From Params
 *
 * @param {array} params
 * @param {function} ifFile
 * @param {function} ifDir
 * @returns {function} with path
 */

export default async function checkFileOrDirFromParams(params, ifFile, ifDir) {
  let dir = `content/${params.join("/")}`;
  let file = `content/${params.join("/")}.md`;

  const isDir = fs.existsSync(dir) && fs.lstatSync(dir).isDirectory();
  const isFile = fs.existsSync(file) && fs.lstatSync(file).isFile();

  if (ifFile && isFile) {
    return ifFile(file);
  } else if (ifDir && isDir) {
    return ifDir(dir);
  }
}
