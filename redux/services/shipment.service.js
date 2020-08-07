import API from "../api/axios";

export default class ShipmentTimeServices {
	static fetch() {
		return API.get("/shipmentTime");
	}
}
