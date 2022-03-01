// Utilities
import {
  calcReadTimeFromText,
  makeStringFromDate,
  truncateText,
} from "@columnist/core";
// Hook
import { useConfig } from "@columnist/core";
import defConfig from "../../../defaults.config";

/**
 * @files Make teaser from content
 *
 * @param {object} content
 * @returns object - teaser
 */

const makeTeaserFromContent = (content) => {
  // Get collection config from config

  let config = useConfig();
  let configArticle = config.article ? config.article : defConfig.article;

  // Make date string (if date)
  const contentDate = content.date
    ? makeStringFromDate(content.date, configArticle.teaser.date)
    : false;

  // Make teaser and read time
  const contentTruncated = configArticle.teaser.limit
    ? truncateText(content.text, configArticle.teaser.limit)
    : false;

  // Calculate read time from content text if read time in detail config
  const contentReadTime = configArticle.teaser.readTime
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
