// node_modules
import path from "path";
import { walk } from "@root/walk";
// services
import getDocument from "./getDocument";
import filterCollection from "./utilities/filterCollection";
import sortCollection from "./utilities/sortCollection";

/**
 * @file Get Documents From Directory (And Sub-Directories)
 *
 * @param {string} dir
 * @returns {array} documents
 */

export default async function getDocuments(dir, options) {
	// Initialize files
	let files = [];

	// Initialize walker
	const walker = async (error, pathname, item) => {
		if (error) {
			throw error;
		}

		// If item is file
		if (item.isFile() && item.name.includes(".md")) {
			// Push file to files
			files.push({
				name: item.name,
				path: path.dirname(pathname),
			});
		}
	};

	await walk(dir, walker);

	let documents = files.map((file) => {
		const doc = getDocument(`${file.path}/${file.name}`, options);
		return doc ? doc : null;
	});

	if (options.filters) {
		documents = filterCollection(documents, options.filters);
	}

	if (options.sorts) {
		documents = sortCollection(documents, options.sorts);
	}

	return documents ? documents : null;
}
