import { useConfig } from "@columnist/core";

/**
 * Make author from config object string
 */

export default function makeAuthor(contentAuthor) {
  const config = useConfig();

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
