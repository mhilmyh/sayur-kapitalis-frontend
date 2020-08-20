import API from "../api/axios";

export default class PaymentServices {
	static fetch() {
		return API.get("/orderPayment");
	}
	static payOrder(data = new FormData()) {
		return API.post("/orderPayment", data);
	}
}
