import axios from "axios";

const urls = {
	development: "http://api-sayurmayur.herokuapp.com/api/v1",
	production: "http://api-sayurmayur.herokuapp.com/api/v1",
};

const API = axios.create({
	baseURL: "http://api-sayurmayur.herokuapp.com/api/v1",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default API;
