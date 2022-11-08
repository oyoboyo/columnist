/**
 * @file Make string from date
 *
 * @param {string} date
 * @param {object} config
 * @returns { }
 */

const makeDate = (date, locale, dateStringFormat) => {
	return new Date(date.replace(".000Z", "")).toLocaleDateString(
		locale,
		dateStringFormat
	);
};

export default makeDate;
