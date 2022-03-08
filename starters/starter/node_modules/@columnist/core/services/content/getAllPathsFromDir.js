import { walk } from "@root/walk";
import makeParamsFromPath from "./utilities/makeParamsFromPath";

/**
 * @file Get Paths From Directory
 *
 *
 * @param {string} dir - path of directory
 * @return {Promise<string>} paths - array of paths in directory
 */

export default async function getParamsFromDirectory(dir, keyIndex) {
  // Initialize path and walker
  let paths = [];

  const walker = async (error, path) => {
    if (error) {
      throw error;
    }
    // Make params from path
    let all = makeParamsFromPath(path);

    // params to ignore
    const ignore =
      all.includes(".DS_Store") ||
      all.includes("content") ||
      all.includes("index")
        ? true
        : false;

    // If key index provided...
    if (keyIndex && all.length > keyIndex.length + 1) {
      // ...use to construct params
      let indexed = {};
      keyIndex.map((pair) => {
        indexed[pair.key] = all[pair.index];
      });

      if (!ignore) {
        paths.push({
          params: { all: all },
        });
      }
      // ...otherwise,
    } else if (!keyIndex) {
      //... set slug param to all params
      if (!ignore) {
        paths.push({
          params: { all: all },
        });
      }
    }
  };

  // Walk directory to populate paths
  await walk(dir, walker);

  return paths;
}
