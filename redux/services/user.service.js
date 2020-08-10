import API from "../api/axios";
export default class UserService {
	static getUser() {
		return API.post("/auth/getUser");
	}

	static register(data = {}) {
		const headers = {
			"Content-Type": "multipart/from-data",
		};
		return API.post("/auth/register", data, { headers });
	}

	static login(email = "", password = "") {
		const headers = {
			"Content-Type": "application/json",
		};
		return API.post("/auth/login", { email, password }, { headers });
	}

	static logout() {
		return API.post("/auth/logout");
	}

	static update(data = {}) {
		return API.post("/auth/user", data);
	}

	static addCustomer(data = {}) {
		return API.post("/auth/register/fromAgent", data);
	}

	static forgotPassword(email = "") {
		return API.post("/auth/forgotPassword", email);
	}
}
