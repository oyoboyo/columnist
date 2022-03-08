import makeTitle from "../../utilities/content/makeTitle";

/**
 * @file Get Directory
 * @param {string} dir
 * @return {object} doc
 */
export default function getDirectory(dir) {
  const type = "directory";

  const params = dir.replace("content/", "").split("/");
  const slug = params[params.length - 1];
  const route = `/${params.join("/")}`;

  const title = makeTitle(slug);

  return {
    type,
    params,
    slug,
    route,
    title,
  };
}
