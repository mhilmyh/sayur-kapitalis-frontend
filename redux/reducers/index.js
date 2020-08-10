import * as act from "../actions/types";

import _ from "lodash";

const initState = {
	carts: [],
	products: [],
	categories: [],
	orders: [],
	accounts: [],
	shipmentTimes: [],
	user: {
		id: null,
		name: "",
		email: "",
		agent: {},
		is_agent: 0,
		customers: [],
	},
	loading: false,
	alert: {
		show: false,
		error: false,
		message: "",
	},
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case act.CARTS_ADD:
			if (!!action.payload.product) {
				const lastCartsBeforeAdd = _.cloneDeep(state.carts);
				const isExist = lastCartsBeforeAdd
					.map((item) => item.id)
					.includes(action.payload.product.id);
				if (!isExist) {
					return {
						...state,
						carts: [...state.carts, { ...action.payload.product, quantity: 1 }],
					};
				}
				return state;
			}
			return state;
		case act.CARTS_CHANGE_QUANTITY:
			const lastQuantityCarts = _.cloneDeep(state.carts);
			const index = lastQuantityCarts.findIndex(
				(item) => item.id === action.payload.productID
			);
			lastQuantityCarts[index].quantity = action.payload.quantity;
			return { ...state, carts: lastQuantityCarts };
		case act.CARTS_REMOVE:
			const lastAvailableCarts = _.cloneDeep(state.carts);
			return {
				...state,
				carts: lastAvailableCarts.filter(
					(item) => item.id !== action.payload.productID
				),
			};
		case act.SHIPMENT_TIME_SAVE:
			return { ...state, orders: action.payload.data };
		case act.ORDERS_SAVE:
			return { ...state, orders: action.payload.data };
		case act.ACCOUNTS_SAVE:
			return { ...state, accounts: action.payload.data };
		case act.CATEGORIES_SAVE:
			return { ...state, categories: action.payload.data };
		case act.PRODUCTS_SAVE:
			return { ...state, products: action.payload.data };
		case act.USER_SAVE:
			return { ...state, user: { ...state.user, ...action.payload.data } };
		case act.ALERT_SET:
			return { ...state, alert: { ...state.alert, ...action.payload } };
		case act.LOADING_SET:
			return { ...state, loading: action.payload };
		default:
			return state;
	}
};

export default reducer;
