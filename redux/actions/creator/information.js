import { INFORMATIONS_SAVE, HEADING_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import InformationServices from "../../services/information.service";
import { alertSet } from "./alert";

// Information Action API
export const informationFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		InformationServices.fetch()
			.then((response) => {
				dispatch(informationSave(response.data));
			})
			.catch((error) => {
				dispatch(alertSet({ show: true, error: true, message: error.message }));
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

export const headingFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		InformationServices.heading()
			.then((response) => {
				dispatch(headingSave(response.data));
			})
			.catch((error) => {
				dispatch(alertSet({ show: true, error: true, message: error.message }));
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

export const informationSave = (data) => {
	return goodWay(INFORMATIONS_SAVE, { data });
};
export const headingSave = (data) => {
	return goodWay(HEADING_SAVE, { data });
};
