// Return format
export const goodWay = (type, payload) => ({ type, payload });

export const convertToRupiah = (price = "") => {
	return Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(parseInt(price, 10));
};

export const stringToDate = (str = "") => {
	const t = Date.parse(str);
	const d = new Date(t);
	return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};
