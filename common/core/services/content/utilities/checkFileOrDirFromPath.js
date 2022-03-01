import fs from "fs";

/**
 * @file Check File Or Directory From Path
 *
 * @param {string} path
 * @param {function} ifFile
 * @param {function} ifDir
 * @returns {function} with path
 */

const checkFileOrDirFromPath = (path, ifFile, ifDir) => {
  const isDir = fs.lstatSync(path).isDirectory();
  const isFile = fs.lstatSync(path).isFile();

  if (ifFile && isFile) {
    return ifFile(path);
  } else if (ifDir && isDir) {
    return ifDir(path);
  }
};

export default checkFileOrDirFromPath;
