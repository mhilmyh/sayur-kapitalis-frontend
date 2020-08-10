import { CATEGORIES_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import CategoryServices from "../../services/category.service";
import LocalStorageService from "../../services/localstorage.service";

// Category Action API
export const categoriesFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		CategoryServices.fetch()
			.then((response) => {
				LocalStorageService.saveCategories(response.data);
				dispatch(categoriesSave(response.data));
			})
			.catch(() => {
				const data = LocalStorageService.getCategories();
				if (!!data) {
					dispatch(categoriesSave(data));
				}
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// Category Action Local
export const categoriesSave = (data) => {
	return goodWay(CATEGORIES_SAVE, { data });
};
