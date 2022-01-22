/**
 * @File Take a slug and return a title
 *
 * @param {string} slug
 * @returns {string} title
 */

export default function deslug(slug) {
  var words = slug.split("-");
  return words
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");
  return title;
}
