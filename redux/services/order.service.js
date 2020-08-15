import API from "../api/axios";

export default class OrderServices {
	static fetch() {
		return API.get("/orderHeader");
	}

	static buyProduct(
		details = {},
		shipment_date = "",
		shipment_time = "",
		user_id = ""
	) {
		return API.post("/orderHeader", {
			details,
			shipment_date,
			shipment_time,
			user_id,
		});
	}
}
