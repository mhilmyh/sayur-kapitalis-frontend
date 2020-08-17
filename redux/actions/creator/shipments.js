import { SHIPMENT_TIME_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import ShipmentTimeServices from "../../services/shipment.service";

// Order Action API
export const shipmentFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		ShipmentTimeServices.fetch()
			.then((response) => {
				dispatch(shipmentSave(response.data));
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// Order Action Local
export const shipmentSave = (data) => {
	return goodWay(SHIPMENT_TIME_SAVE, { data });
};
