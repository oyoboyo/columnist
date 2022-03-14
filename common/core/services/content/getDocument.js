import { readFileSync as readFile } from "fs";
// Processors
import unified from "unified";
import remark from "remark";
import treeParser from "remark-parse";
import HASTParser from "remark-rehype";
import HTMLParser from "rehype-raw";
import stringParser from "rehype-stringify";
import getDataAndContent from "gray-matter";
import stripMarkdown from "strip-markdown";

/**
 * @file Get Document From File
 * @param {string} file
 * @param {object} config
 * @returns {object} doc
 */

const calcOrderFromFile = (slug) => {
  let hasNum = /^\d+\-/;
  if (hasNum.test(slug)) {
    let dash = slug.indexOf("-");
    let number = slug.slice(0, dash);
  }
};

export default function getDocument(path, config) {
  if (path.includes(".md")) {
    // Process directory
    const params = path
      .replace("content/", "")
      .replace(".md", "")
      .replace("/index", "")
      .split("/");
    const route = "/" + params.join("/");
    const slug = params[params.length - 1];

    // Process Markdown
    const contents = readFile(path, "utf8");
    const { data, content } = getDataAndContent(contents);
    const processed = unified() // https://unifiedjs.com/learn/recipe/remark-html
      .use(treeParser)
      .use(HASTParser, { allowDangerousHtml: true })
      .use(HTMLParser)
      .use(stringParser)
      .processSync(content);
    const html = processed.contents;
    const text = remark().use(stripMarkdown).processSync(content).toString();

    // Process data
    let date = data && data.date ? data.date.toJSON() : null;
    return {
      params,
      slug,
      route,
      ...data,
      date,
      text,
      html,
    };
  } else {
    throw "Error: Not a Markdown file";
  }
}
