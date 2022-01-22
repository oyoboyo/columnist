const capitalize = (string) => {
	const array = string.split(" ");

	array.map((string, index) => {
		array[index] = array[index].charAt(0).toUpperCase() + array[index].slice(1);
	});
};
