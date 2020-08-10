import Cookies from "js-cookie";

const STR_TOKEN = "X_API_TOKEN_";

export default class CookieService {
	static setToken(token = "") {
		Cookies.set(STR_TOKEN, token);
	}

	static getToken() {
		return Cookies.get(STR_TOKEN);
	}

	static checkToken() {
		const token = Cookies.get(STR_TOKEN);
		return !!token;
	}

	static removeToken() {
		Cookies.remove(STR_TOKEN);
	}
}
