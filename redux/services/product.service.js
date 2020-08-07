import API from "../api/axios";

export default class ProductServices {
	static fetch() {
		return API.get("/product");
	}
}
