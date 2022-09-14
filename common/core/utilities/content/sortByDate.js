// # Sort by date
export const sortByDate = (array) => {
	return array.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});
};

export default sortByDate;
