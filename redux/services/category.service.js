import API from "../api/axios";

export default class CategoryServices {
	static fetch() {
		return API.get("/category");
	}
}
