import makeTitle from "../../utilities/content/makeTitle";

/**
 * @file Get Directory
 * @param {string} dir
 * @return {object} doc
 */
export default function getDirectory(dir) {
  const type = "directory";
  const params = dir.replace("content/", "").split("/");
  const route = "/" + params.join("/");
  const slug = params[params.length - 1];
  const title = makeTitle(slug);
  return {
    type,
    params,
    slug,
    route,
    title,
  };
}
