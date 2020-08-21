import Cookies from "js-cookie";

const STR_TOKEN = "X_API_TOKEN_";

export default class CookieService {
	static setToken(token = "", expires = 1) {
		Cookies.set(STR_TOKEN, token, { expires: expires });
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
