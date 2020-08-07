import { ORDERS_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import OrderServices from "../../services/order";

// Order Action API
export const ordersFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		OrderServices.fetch()
			.then(() => {})
			.catch(() => {})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// Order Action Local
export const ordersSave = (data) => {
	return goodWay(ORDERS_SAVE, { data });
};
