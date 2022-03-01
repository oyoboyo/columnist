// node_modules
import { walk } from "@root/walk";
// services/utilities
import makeParamsFromPath from "./utilities/makeParamsFromPath";

/**
 * @file Get Paths From Directory
 *
 * @param {string} dir
 * @return {Promise<array>} paths
 */

export default async function getAllPathsFromDir(dir) {
  let paths = [];

  const walker = async (error, path) => {
    let all = makeParamsFromPath(path);

    const ignore =
      all.includes(".DS_Store") ||
      all.includes("content") ||
      all.includes("index")
        ? true
        : false;

    if (error) {
      throw error;
    }

    if (!ignore) {
      paths.push({
        params: { all: all },
      });
    }
  };

  await walk(dir, walker);

  return paths;
}
