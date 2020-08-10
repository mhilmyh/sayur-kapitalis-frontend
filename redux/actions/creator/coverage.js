import { COVERAGE_AREA_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import CoverageAreaService from "../../services/coverage.service";

// Order Action API
export const coverageFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		CoverageAreaService.fetch()
			.then((response) => {
				dispatch(coverageSave(response.data));
			})
			.catch(() => {})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// Order Action Local
export const coverageSave = (data) => {
	return goodWay(COVERAGE_AREA_SAVE, { data });
};
