/**
 * @file Truncate text
 *
 * @param {string} text - Input text
 * @param {integer} limit - Maximum words
 * @return {string} text - Truncated text
 */
const truncate = (text, limit) => {
  if (text) {
    if (text.length > limit) {
      for (let i = limit; i > 0; i--) {
        if (
          text.charAt(i) === " " &&
          (text.charAt(i - 1) != "," ||
            text.charAt(i - 1) != "." ||
            text.charAt(i - 1) != ";")
        ) {
          return text.substring(0, i) + "...";
        }
      }
      return text.substring(0, limit) + "...";
    } else return text;
  } else return "";
};

export default truncate;
