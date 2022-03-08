// node_modules
import { walk } from "@root/walk";

/**
 * @file Get Paths From Directory
 * @param {string} dir
 * @return {Promise<array>} paths
 */

export default async function getAllPaths(dir) {
  let paths = [];

  const walker = async (error, path) => {
    let all = path.replace("content/", "").replace(".md", "").split("/");

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
