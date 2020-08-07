import API from "../api/axios";

export default class CoverageAreaServices {
	static fetch() {
		return API.get("/coverageArea");
	}
}
