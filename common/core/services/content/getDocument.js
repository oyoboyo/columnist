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
 * @file Get Document From File
 *
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
  const isMarkdown = path.includes(".md");

  if (isMarkdown) {
    // Process path
    const params = path
      .replace("content/", "")
      .replace(".md", "")
      .replace("/index", "")
      .split("/");

    const slug = params[params.length - 1];
    const route = `/${params.join("/")}`;

    // Process Markdown
    const contents = fs.readFileSync(path, "utf8");

    const { data, content } = getDataAndContent(contents);

    const processed = unified() // https://unifiedjs.com/learn/recipe/remark-html
      .use(treeParser)
      .use(HASTParser, { allowDangerousHtml: true })
      .use(HTMLParser)
      .use(stringParser)
      .processSync(content);
    const html = processed.contents;

    const text = remark().use(stripMarkdown).processSync(content).toString();

    // Process date
    let date;
    if (data && data.date) {
      date = data.date.toJSON();
    } else {
      date = null;
    }

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
