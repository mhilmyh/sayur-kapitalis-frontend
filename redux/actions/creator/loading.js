import { LOADING_SET } from "../types";
import { goodWay } from "../../utils/format";

// Loading Action
export const loadingSet = (value) => {
	return goodWay(LOADING_SET, !!value);
};
