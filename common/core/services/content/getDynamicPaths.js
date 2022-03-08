import fs from "fs";

/**
 * @file Get Dynamic Paths
 *
 * @param {string} dir
 * @param {array} keyIndex
 * @return {array} paths
 */
export default function getDynamicPaths(dir, keyIndex) {
  let paths = [];

  fs.readdirSync(dir).map((item) => {
    const path = `${dir}/${item}`;

    let all = path.replace("content/", "").replace(".md", "").split("/");

    let index = {};

    keyIndex.map((pair) => {
      index[pair.key] = all[pair.index];
    });

    const isDir = fs.existsSync(path) && fs.lstatSync(path).isDirectory();
    const isFile = fs.existsSync(path) && fs.lstatSync(path).isFile();

    if (isFile) {
      paths.push({
        params: index,
      });
    }

    if (isDir) {
      if (fs.existsSync(`${path}/index.md`)) {
        paths.push({
          params: index,
        });
      }
    }
  });

  return paths ? paths : null;
}
