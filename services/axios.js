import axios from "axios";
import Cookies from "js-cookie";

// Request
const handleRequestSend = (config) => {
	// Assign JWT if exist
	const token = Cookies.get("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
};
const handleRequestError = (error) => {
	console.log(error);
	return Promise.reject(error);
};

// Response
const handleResponseReceive = (reponse) => {
	console.log(response);
	return response.data;
};
const handleResponseError = (error) => {
	console.log(error);
	return Promise.reject(error);
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
