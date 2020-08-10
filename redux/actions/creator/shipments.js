import { SHIPMENT_TIME_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import ShipmentTimeServices from "../../services/shipment.service";

// Order Action API
export const ordersFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		ShipmentTimeServices.fetch()
			.then(() => {})
			.catch(() => {})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// Order Action Local
export const ordersSave = (data) => {
	return goodWay(SHIPMENT_TIME_SAVE, { data });
};
