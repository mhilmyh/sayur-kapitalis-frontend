// Return format
export const goodWay = (type, payload) => ({ type, payload });

export const convertToRupiah = (price = "") => {
	return Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(parseInt(price, 10));
};
