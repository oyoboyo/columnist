// # Filter Articles
export const filterArticles = (array) => {
	return array.filter((item) => item.type === "article");
};

export default filterArticles;
