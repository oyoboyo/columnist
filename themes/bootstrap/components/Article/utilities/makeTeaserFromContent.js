// Utilities
import {
  calcReadTimeFromText,
  makeStringFromDate,
  truncateText,
} from "@columnist/core";
// Hook
import { useConfig } from "@columnist/core";

/**
 * @files Make teaser from content
 *
 * @param {object} content
 * @returns object - teaser
 */

const makeTeaserFromContent = (content) => {
  // Get collection config from config
  let config = useConfig();
  const teaserConfig = config.collections[content.collection].teaser;

  // Make date string (if date)
  const contentDate = content.date
    ? makeStringFromDate(content.date, teaserConfig.date)
    : false;

  // Make teaser and read time
  const contentTruncated = teaserConfig.limit
    ? truncateText(content.text, teaserConfig.limit)
    : false;

  // Calculate read time from content text if read time in detail config
  const contentReadTime = teaserConfig.readTime
    ? calcReadTimeFromText(content.text)
    : false;

  return {
    ...content,
    date: contentDate,
    truncated: contentTruncated,
    readTime: contentReadTime,
  };
};

export default makeTeaserFromContent;
