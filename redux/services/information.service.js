import API from "../api/axios";

export default class InformationServices {
	static fetch() {
		return API.get("/information");
	}
	static heading() {
		return API.get("/information/headings");
	}
}
