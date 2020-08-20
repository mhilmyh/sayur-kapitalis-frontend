import {
	ORDERS_SAVE,
	ORDERS_ADD,
	PAYMENTS_SAVE,
	ACCOUNTS_SAVE,
} from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import OrderServices from "../../services/order.service";
import PaymentServices from "../../services/payment.service";
import { alertSet } from "./alert";
import { cartsReset } from "./cart";
import AccountServices from "../../services/account.service";

// Order Action API
export const ordersFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		OrderServices.fetch()
			.then((response) => {
				dispatch(ordersSave(response.data));
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

export const ordersBuyProduct = (products = []) => {
	const payload = products.map(({ id, quantity }) => ({
		product_id: id,
		quantity,
	}));
	return (dispatch) => {
		dispatch(loadingSet(true));
		OrderServices.buyProduct(payload)
			.then((response) => {
				ordersAdd(response.data);
				dispatch(
					alertSet({ show: true, error: false, message: response.message })
				);
				dispatch(cartsReset());
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// Payment Action API
export const paymentsFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		PaymentServices.fetch()
			.then((response) => {
				dispatch(paymentsSave(response.data));
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// Account Action API
export const accountsFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		AccountServices.fetch()
			.then((response) => {
				accountSave(response.data);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => loadingSet(false));
	};
};

// Order Action Local
export const ordersSave = (data) => {
	return goodWay(ORDERS_SAVE, { data });
};
export const ordersAdd = (data) => {
	return goodWay(ORDERS_ADD, { data });
};

// Payment Action Local
export const paymentsSave = (data) => {
	return goodWay(PAYMENTS_SAVE, { data });
};

// Account Action Local
export const accountSave = (data) => {
	return goodWay(ACCOUNTS_SAVE, { data });
};
