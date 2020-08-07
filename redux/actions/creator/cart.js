import { CARTS_ADD, CARTS_REMOVE, CARTS_CHANGE_QUANTITY } from "../types";
import { goodWay } from "../../utils/format";

// Cart Action
export const cartsAdd = (productID) => {
	return goodWay(CARTS_ADD, productID);
};
export const cartsChangeQuantity = (productID, quantity) => {
	return goodWay(CARTS_CHANGE_QUANTITY, { productID, quantity });
};
export const cartsRemove = (productID) => {
	return goodWay(CARTS_REMOVE, { productID });
};
