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
import processMarkdownToHtml from "./utilities/processMarkdown";
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

		// Initialize doc
		let doc = {
			params,
			slug,
			route,
			...data,
		};
		// Process markdown
		if (options.markdown.html) {
			doc.html = processMarkdownToHtml(content, options.markdown);
		}

		if (options.markdown.text) {
			doc.text = remark().use(stripMarkdown).processSync(content).toString();
		}

		// If date serialize date
		if (doc.date) {
			doc.date = doc.date.toJSON();
		}

		return doc;
	} else {
		// Directory is documents
		path = isParam ? `content/${location.join("/")}` : location;

		if (exists(path) && status(path).isDirectory) {
			const index = `${path}/index.md`;
			let doc = exists(index)
				? getDocument(index, options)
				: getDirectory(path);

			return doc;
		}
	}
}
