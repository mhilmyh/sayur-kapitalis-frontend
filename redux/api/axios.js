import axios from "axios";
import CookieServices from "../services/cookie.service";

export const BASE_URL = "http://api-bukitroyal.kiplikipli.my.id/api/v1";

const handleRequestSend = (config) => {
	// Set token
	const token = CookieServices.getToken();
	if (!!token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
};

const handleRequestError = (error) => {
	return Promise.reject(error);
};

const handleResponseReceive = (response) => {
	// Status Code 2xx
	return response.data;
};

const handleResponseError = (error) => {
	// Status Code 4xx
	return Promise.reject(error.response ? error.response.data : error.message);
};

const API = axios.create({
	baseURL: BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

API.interceptors.request.use(handleRequestSend, handleRequestError);
API.interceptors.response.use(handleResponseReceive, handleResponseError);

export default API;
