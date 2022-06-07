import {
  readFileSync as readFile,
  existsSync as exists,
  lstatSync as status,
} from "fs";
// Processors
import getFrontMatterAndContent from "gray-matter";
import remark from "remark";
import stripMarkdown from "strip-markdown";
// Utilities and services
import getAuthor from "../data/getAuthor";
import makeReadTime from "../../utilities/content/makeReadTime";
import truncate from "../../utilities/content/truncate";
import processMarkdown from "./utilities/processMarkdown";
import getDirectory from "./getDirectory";

/**
 * @file Get Document From File
 * @param {string} location
 * @param {object} options
 * @returns {object} doc
 */

export default function getDocument(location, options) {
  // Check if location is param
  const isParam = Array.isArray(location);
  // Make path from param or pass location
  let path = isParam ? `content/${location.join("/")}.md` : location;

  // If path exists and is file
  if (exists(path) && status(path).isFile()) {
    // Create params, route, and slug
    const params = path
      .replace("content/", "")
      .replace(".md", "")
      .replace("/index", "")
      .split("/");
    const route = "/" + params.join("/");
    const slug = params[params.length - 1];

    // Process Markdown from file contents
    const contents = readFile(path, "utf8");
    const { data, content } = getFrontMatterAndContent(contents);

    // Process content to text
    const text = remark()
      .use(stripMarkdown)
      .processSync(content)
      .toString();

    // Calculate read time from tex
    const readTime = makeReadTime(text);

    // Initialize doc
    let doc = {
      params,
      slug,
      route,
      ...data,
      readTime,
    };

    // Conditional post processing
    if (doc.date) {
      doc.date = doc.date.toJSON();
    }

    if (doc.author) {
      doc.author = getAuthor(doc.author);
    }

    if (options.html) {
      // Process Markdown with max characters
      doc.html = processMarkdown(content);
      // Process gated content
      if (doc.gated) {
        doc.gated = processMarkdown(content, options.maxCharacters);
      }
    } else {
      // Truncate text for teaser
      doc.teaser = truncate(text, options.maxCharacters);
    }

    return doc;
  } else {
    // Directory is documents
    path = isParam ? `content/${location.join("/")}` : location;

    if (exists(path) && status(path).isDirectory) {
      const index = `${path}/index.md`;
      let doc = exists(index)
        ? getDocument(index, { html: true })
        : getDirectory(path);

      return doc;
    }
  }
}
