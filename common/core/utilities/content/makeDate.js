/**
 * @file Make string from date
 *
 * @param {string} date
 * @param {object} config
 * @returns { }
 */

const makeDate = (date, config) => {
	return new Date(date.replace(".000Z", "")).toLocaleDateString(
		config.locale,
		config.string
	);
};

export default makeDate;
