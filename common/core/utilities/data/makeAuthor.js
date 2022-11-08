/**
 * Make author from config object string
 */

export default function makeAuthor(contentAuthor, config) {
  if (config.authors) {
    if (config.authors[contentAuthor]) {
      return config.authors[contentAuthor];
    } else {
      return { name: contentAuthor };
    }
  } else {
    return { name: contentAuthor };
  }
}
