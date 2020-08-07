import * as act from "../actions/types";

import _ from "lodash";

const initState = {
	carts: {},
	products: [],
	categories: [],
	orders: [],
	accounts: [],
	user: {
		id: null,
		name: "",
		email: "",
		agent: {},
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
			return {
				...state,
				carts: { ...state.carts, [action.payload.productID]: 1 },
			};
		case act.CARTS_CHANGE_QUANTITY:
			const carts = _.cloneDeep(state.carts);
			carts[action.payload.productID] = action.payload.quantity;
			return { ...state, carts: carts };
		case act.CARTS_REMOVE:
			return { ...state };
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
			console.log("Unknown action type");
			return state;
	}
};

export default reducer;
