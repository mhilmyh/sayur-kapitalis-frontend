import API from "../api/axios";

export default class OrderServices {
	static fetch() {
		return API.get("/orderHeader");
	}
}
