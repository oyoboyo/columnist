import {
	existsSync as exists,
	readdirSync as read,
	lstatSync as status,
} from "fs";
//
import filterCollection from "./utilities/filterCollection";
import sortCollection from "./utilities/sortCollection";
// services
import getDocument from "./getDocument";

/**
 * @file Get Collection From Directory
 * @param {string} dir
 * @param {array} config
 * @return {array} collection
 */

export default function getCollection(location, options) {
	let isParams = Array.isArray(location);
	// Make dir from param or pass location
	const dir = isParams ? `content/${location.join("/")}` : location;

	let collection = [];

	if (exists(dir) && status(dir).isDirectory()) {
		read(dir).map((item) => {
			const path = `${dir}/${item}`;

			if (exists(path)) {
				if (status(path).isFile()) {
					if (!path.includes("index.md")) {
						const doc = getDocument(path, options);
						collection.push(doc);
					}
				}
				if (status(path).isDirectory()) {
					const index = `${path}/index.md`;
					if (exists(index)) {
						const doc = getDocument(index, options);
						collection.push(doc);
					}
				}
			}
		});
	}

	if (options.filters) {
		collection = filterCollection(collection, options.filters);
	}

	if (options.sorts) {
		collection = sortCollection(collection, options.sorts);
	}

	return collection ? collection : null;
}
