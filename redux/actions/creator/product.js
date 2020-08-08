import { PRODUCTS_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import ProductService from "../../services/product.service";
import LocalStorageService from "../../services/localstorage.service";

// Product Action API
export const productsFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		ProductService.fetch()
			.then((response) => {
				console.log("ProductService Response");
				LocalStorageService.saveProducts(response.data);
				dispatch(productsSave(response.data));
			})
			.catch(({ message }) => {
				console.log(message);
				const data = LocalStorageService.getProducts();
				if (!!data) {
					dispatch(productsSave(data));
				}
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// Product Action Local
export const productsSave = (data) => {
	return goodWay(PRODUCTS_SAVE, { data });
};
