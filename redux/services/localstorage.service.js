const STR_CATEGORIES = "__categories";
const STR_PRODUCTS = "__products";
const STR_TTL = "_ttl";
const STR_TEST_KEY = "(._.)";
const STR_TEST_VALUE = "1$Itw0Rk-3d?";

export default class LocalStorageService {
	static isAvailable() {
		try {
			localStorage.setItem(STR_TEST_KEY, STR_TEST_VALUE);
			const retrieve = localStorage.getItem(STR_TEST_KEY, STR_TEST_VALUE);
			localStorage.removeItem(STR_TEST_KEY);
			return retrieve === STR_TEST_VALUE;
		} catch (e) {
			return false;
		}
	}

	static setTimeToLive(key = "", hour = 24) {
		const now = new Date();
		localStorage.setItem(STR_TTL + key, hour * 3600000 + now.getTime());
	}

	static getTimeToLive(key = "") {
		return JSON.parse(localStorage.getItem(STR_TTL + key));
	}

	static saveCategories(data = []) {
		if (this.isAvailable()) {
			localStorage.setItem(STR_CATEGORIES, JSON.stringify(data));
			this.setTimeToLive(STR_CATEGORIES);
		}
	}

	static saveProducts(data = []) {
		if (this.isAvailable()) {
			localStorage.setItem(STR_PRODUCTS, JSON.stringify(data));
			this.setTimeToLive(STR_PRODUCTS);
		}
	}

	static getCategories() {
		if (this.isAvailable()) {
			const expire = this.getTimeToLive(STR_CATEGORIES);
			if (Date.now() > expire) {
				return JSON.parse(localStorage.getItem(STR_CATEGORIES));
			}
		}
		return null;
	}

	static getProducts() {
		if (this.isAvailable()) {
			const expire = this.getTimeToLive(STR_PRODUCTS);
			if (Date.now() > expire) {
				return JSON.parse(localStorage.getItem(STR_PRODUCTS));
			}
		}
		return null;
	}
}
