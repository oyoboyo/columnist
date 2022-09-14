// Filter published
export const filterDrafts = (array) => {
	return array.filter((item) => !item.draft);
};

export default filterDrafts;
