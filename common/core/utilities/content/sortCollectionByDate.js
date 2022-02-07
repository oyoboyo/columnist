/**
 * @file Sort array by date
 *
 * @param {*} array
 * @return {*} array - sorted by date
 */
const sortCollectionByDate = (array) => {
  array.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return array;
};

export default sortCollectionByDate;
