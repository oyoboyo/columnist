import fs from "fs";
// services/utilities
import makeParamsFromPath from "./utilities/makeParamsFromPath";
import checkFileOrDirFromPath from "./utilities/checkFileOrDirFromPath";

export default function getDynamicPathsFromDir(dir, keyIndex) {
  let paths = [];

  fs.readdirSync(dir).map((item) => {
    const path = `${dir}/${item}`;

    // Params
    const all = makeParamsFromPath(path);
    let index = {};

    keyIndex.map((pair) => {
      index[pair.key] = all[pair.index];
    });

    checkFileOrDirFromPath(
      path,
      (file) => {
        paths.push({
          params: index,
        });
      },
      (dir) => {
        if (fs.existsSync(`${path}/index.md`)) {
          paths.push({
            params: index,
          });
        }
      }
    );
  });

  return paths ? paths : null;
}
