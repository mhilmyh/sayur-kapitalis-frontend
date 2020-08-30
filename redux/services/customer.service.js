import API from "../api/axios";

export default class CustomerService {
	static fetch() {
		return API.get("/customers");
	}
}
