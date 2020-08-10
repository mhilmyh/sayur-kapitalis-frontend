const STR_USER = "__user";
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
			const categories = JSON.parse(localStorage.getItem(STR_CATEGORIES));
			if (Date.now() < expire) {
				return !!categories ? categories : null;
			}
		}
		return [];
	}

	static getProducts() {
		if (this.isAvailable()) {
			const expire = this.getTimeToLive(STR_PRODUCTS);
			const products = JSON.parse(localStorage.getItem(STR_PRODUCTS));
			if (Date.now() < expire) {
				return !!products ? products : null;
			}
		}
		return [];
	}

	static saveUser(data = {}) {
		if (this.isAvailable()) {
			localStorage.setItem(STR_USER, JSON.stringify(data));
		}
	}

	static getUser() {
		if (this.isAvailable()) {
			const user = JSON.parse(localStorage.getItem(STR_USER));
			return !!user ? user : null;
		}
		return null;
	}

	static getUserOnlyRole() {
		if (this.isAvailable()) {
			const user = JSON.parse(localStorage.getItem(STR_USER));
			if (!!user && user.is_agent != null) {
				return user.is_agent ? user.agent : user.customer;
			}
			return {
				id: null,
				name: "",
				email: "",
				agent: {
					id: null,
					first_name: "",
					last_name: "",
					phone_number: "",
					address: "",
					user_id: null,
					is_approved: 0,
					created_at: "",
					updated_at: "",
					customers: [],
				},
				customer: {
					id: null,
					first_name: "",
					last_name: "",
					phone_number: "",
					address: "",
					user_id: null,
					agent_id: null,
					created_at: "",
					updated_at: "",
					coverage_area_id: null,
					full_name: "",
				},
				customers: [],
				is_email_confirmed: 0,
				is_admin: 0,
				is_agent: 0,
				created_at: "",
				updated_at: "",
			};
		}
		return null;
	}

	static removeUser() {
		if (this.isAvailable()) {
			localStorage.removeItem(STR_USER);
		}
	}
}
