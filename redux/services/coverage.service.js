import API from "../api/axios";

export default class CoverageAreaService {
	static fetch() {
		return API.get("/coverageArea");
	}
}
