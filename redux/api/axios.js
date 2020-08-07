import axios from "axios";
import Cookies from "js-cookie";

const handleRequestSend = (config) => {
	// Set token
	const token = Cookies.get("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
};

const handleRequestError = (error) => {
	return Promise.reject(error);
};

const handleResponseReceive = (response) => {
	// Status Code 2xx
	console.log("Axios Response");
	return response.data;
};

const handleResponseError = (error) => {
	// Status Code 4xx
	console.log("Axios Response Error");
	return Promise.reject(error.response);
};

const API = axios.create({
	baseURL: "http://52.90.139.72/api/v1",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

API.interceptors.request.use(handleRequestSend, handleRequestError);
API.interceptors.response.use(handleResponseReceive, handleResponseError);

export default API;
