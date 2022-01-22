/**
 * @file Make Params From Path
 *
 * @param {string} path
 * @return {params} array of strings
 */

const makeParamsFromPath = (path) => {
  let params = path.replace("content/", "").replace(".md", "").split("/");
  return params;
};

export default makeParamsFromPath;
