import axios from "axios";

const API = axios.create({
	baseURL: "http://52.90.139.72/api/v1",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default API;
