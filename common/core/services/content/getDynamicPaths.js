import {
  existsSync as exists,
  readdirSync as read,
  lstatSync as status,
} from "fs";

/**
 * @file Get Dynamic Paths
 *
 * @param {string} dir
 * @param {array} keyIndex
 * @return {array} paths
 */
export default function getDynamicPaths(dir, keyIndex) {
  let paths = [];

  fs.read(dir).map((item) => {
    const path = `${dir}/${item}`;
    const all = path.replace("content/", "").replace(".md", "").split("/");

    let index = {};

    keyIndex.map((pair) => {
      index[pair.key] = all[pair.index];
    });

    if (exists(path)) {
      if (status(path).isFile()) {
        paths.push({
          params: index,
        });
      }

      if (status(path).isDirectory()) {
        if (exists(`${path}/index.md`)) {
          paths.push({
            params: index,
          });
        }
      }
    }
  });

  return paths ? paths : null;
}
