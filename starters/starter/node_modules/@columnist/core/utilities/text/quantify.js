/**
 * @file Quantify string
 * Take a string and return some useful quantities
 *
 * @param {string} string - string to calculate,
 * @returns {object} {wordCount, readTime} - calculated properties
 */

const quantify = (string) => {
  // Process string
  string = string.replace(/\n/g, " "); // newlines to space
  string = string.replace(/(^\s*)|(\s*$)/gi, ""); // remove spaces from start + end
  string = string.replace(/[ ]{2,}/gi, " "); // 2 or more spaces to 1

  const wordCount = string.split(" ").length; // Count words
  const readTime = Math.ceil(wordCount / 225); // Calculate read time

  return { wordCount, readTime };
};

export default quantify;
