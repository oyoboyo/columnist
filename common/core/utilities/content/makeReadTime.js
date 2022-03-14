/**
 * @file Make read time
 * Take a string and return some useful quantities
 *
 * @param {string} string - string to calculate,
 * @returns {object} {wordCount, readTime} - calculated properties
 */

const makeReadTime = (text) => {
  // Process string
  text = text.replace(/\n/g, " "); // newlines to space
  text = text.replace(/(^\s*)|(\s*$)/gi, ""); // remove spaces from start + end
  text = text.replace(/[ ]{2,}/gi, " "); // 2 or more spaces to 1

  const wordCount = text.split(" ").length; // Count words
  const readTime = Math.ceil(wordCount / 225); // Calculate read time

  return readTime;
};

export default makeReadTime;
