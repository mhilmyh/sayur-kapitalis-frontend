import {
	CARTS_ADD,
	CARTS_REMOVE,
	CARTS_CHANGE_QUANTITY,
	CARTS_RESET,
	CARTS_CHANGE_BUYER,
} from "../types";
import { goodWay } from "../../utils/format";

// Cart Action
export const cartsAdd = (product, userID = null) => {
	return goodWay(CARTS_ADD, { product, userID });
};
export const cartsChangeQuantity = (productID, quantity = 0) => {
	return goodWay(CARTS_CHANGE_QUANTITY, { productID, quantity });
};
export const cartsChangeBuyer = (productID, userID = null) => {
	return goodWay(CARTS_CHANGE_BUYER, { productID, userID });
};
export const cartsRemove = (productID) => {
	return goodWay(CARTS_REMOVE, { productID });
};
export const cartsReset = () => {
	return goodWay(CARTS_RESET, null);
};
