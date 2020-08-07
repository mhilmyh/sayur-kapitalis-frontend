import API from "../api/axios";

export default class AccountServices {
	static fetch() {
		return API.get("/account");
	}
}
