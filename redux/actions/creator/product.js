import { PRODUCTS_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import ProductService from "../../services/product.service";
import { alertSet } from "./alert";

// Product Action API
export const productsFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		ProductService.fetch()
			.then((response) => {
				dispatch(productsSave(response.data));
			})
			.catch((error) => {
				dispatch(alertSet({ show: true, error: true, message: error.message }));
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// Product Action Local
export const productsSave = (data) => {
	return goodWay(PRODUCTS_SAVE, { data });
};
