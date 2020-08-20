import { CATEGORIES_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import CategoryServices from "../../services/category.service";
import { alertSet } from "./alert";

// Category Action API
export const categoriesFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		CategoryServices.fetch()
			.then((response) => {
				dispatch(categoriesSave(response.data));
			})
			.catch((error) => {
				dispatch(alertSet({ show: true, error: true, message: error.message }));
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// Category Action Local
export const categoriesSave = (data) => {
	return goodWay(CATEGORIES_SAVE, { data });
};
