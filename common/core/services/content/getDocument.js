import { readFileSync as readFile } from "fs";
import truncate from "../../utilities/content/truncate";
import rehypeTruncate from "rehype-truncate";
import makeReadTime from "../../utilities/content/makeReadTime";
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
    // Process data
    const date = data && data.date ? data.date.toJSON() : null;
    const text = remark().use(stripMarkdown).processSync(content).toString();
    const readTime = makeReadTime(text);

    let doc = {
      params,
      slug,
      route,
      ...data,
      date,
      readTime,
    };

    if (config.truncation) {
      const truncated = truncate(text, config.truncation);
      doc.truncated = truncated;
    } else {
      const html = unified() // https://unifiedjs.com/learn/recipe/remark-html
        .use(treeParser)
        .use(HASTParser, { allowDangerousHtml: true })
        .use(HTMLParser)
        .use(stringParser)
        .processSync(content).contents;

      doc.html = html;

      if (data.gated) {
        const truncated = unified()
          .use(treeParser)
          .use(HASTParser, { allowDangerousHtml: true })
          .use(rehypeTruncate, { maxChars: 1000 })
          .use(HTMLParser)
          .use(stringParser)
          .processSync(content).contents;

        doc.truncated = truncated;
      }
    }

    return doc;
  } else {
    throw "Error: Not a Markdown file";
  }
}
