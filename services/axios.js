import axios from "axios";

const API = axios.create({
	baseURL: "http://api-sayurmayur.herokuapp.com/api/v1",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default API;
