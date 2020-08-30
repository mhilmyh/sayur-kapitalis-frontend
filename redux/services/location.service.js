import API from "../api/axios";

export default class LocationServices {
	static province() {
		return API.get("/indonesia/provinces");
	}
	static kotakab(province_id = null) {
		return API.get("/indonesia/cities?province_id=" + province_id);
	}
	static kecamatan(kotakab_id = null) {
		return API.get("/indonesia/districts?city_id=" + kotakab_id);
	}
}
