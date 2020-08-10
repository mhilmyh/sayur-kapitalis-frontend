import { ALERT_SET } from "../types";
import { goodWay } from "../../utils/format";

export const alertSet = ({ show, error, message }) => {
	return goodWay(ALERT_SET, { show, error, message });
};
export const alertReset = () => {
	return goodWay(ALERT_SET, { show: false, error: false, message: "" });
};
