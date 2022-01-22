/**
 * @file Make Route From File
 *
 * @param {string} file
 * @return {object} {params, route, slug}
 */

export default function makeRouteFromPath(file) {
  // make params from path
  const params = file
    .replace("content/", "")
    .replace(".md", "")
    .replace("/index", "")
    .split("/");

  // make slug from params
  const slug = params[params.length - 1];

  // rejoin params as route
  const route = `/${params.join("/")}`;

  return { route, slug, params };
}
