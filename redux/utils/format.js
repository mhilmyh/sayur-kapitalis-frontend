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

export const dateNow = (offsetDay = 0) => {
	const now = new Date();
	now.setDate(now.getDate() + offsetDay);
	const month = `${now.getMonth() + 1}`;
	return `${now.getFullYear()}-${
		month.length == 1 ? "0" + month : month
	}-${now.getDate()}`;
};

export const dateNowDetail = () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = `${now.getMonth() + 1}`;
	const date = now.getDate();
	const hour = now.getHours();
	const minute = now.getMinutes();
	const second = now.getSeconds();
	return `${year}-${
		month.length === 1 ? "0" + month : month
	}-${date} ${hour}:${minute}:${second}`;
};
