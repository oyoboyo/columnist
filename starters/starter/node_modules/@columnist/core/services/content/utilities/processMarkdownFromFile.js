import fs from "fs";

import unified from "unified";
import remark from "remark";
import treeParser from "remark-parse";
import HASTParser from "remark-rehype";
import HTMLParser from "rehype-raw";
import stringParser from "rehype-stringify";

import getDataAndContent from "gray-matter";
import stripMarkdown from "strip-markdown";

/**
 * @file Process Markdown From File
 *
 * @param {string} filePath
 * @return {object} { data, text, html }
 
 */

const processMarkdownFromFile = (filePath) => {
  // Process file contents to data and content
  const contents = fs.readFileSync(filePath, "utf8");
  const { data, content } = getDataAndContent(contents);

  // Process Markdown to HTML...
  // https://unifiedjs.com/learn/recipe/remark-html
  const processed = unified()
    .use(treeParser)
    .use(HASTParser, { allowDangerousHtml: true })
    .use(HTMLParser)
    .use(stringParser)
    .processSync(content);
  const html = processed.contents;

  // ...and text
  const text = remark().use(stripMarkdown).processSync(content).toString();

  // Process date
  let date;
  if (data && data.date) {
    date = data.date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } else {
    date = null;
  }

  return { data: { ...data, date }, text, html };
};

export default processMarkdownFromFile;
