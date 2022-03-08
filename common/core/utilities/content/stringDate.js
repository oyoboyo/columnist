/**
 * @file Make string from date
 *
 * @param {string} date
 * @param {object} config
 * @returns { }
 */

const stringDate = (date, config) => {
  const dateString = new Date(date).toLocaleDateString(
    config.locale,
    config.options
  );
  return dateString;
};

export default stringDate;
