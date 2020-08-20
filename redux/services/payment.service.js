import API from "../api/axios";

export default class PaymentServices {
	static fetch() {
		return API.get("/orderPayments");
	}
}
