import { USER_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import { alertSet } from "./alert";
import UserService from "../../services/user.service";
import LocalStorageService from "../../services/localstorage.service";
import CookieService from "../../services/cookie.service";

// User Action API Call
export const userFetch = (router = null) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserService.getUser()
			.then((response) => {
				dispatch(userSave(response.data));
			})
			.catch(() => {
				if (!!router) {
					router.replace("/login");
				}
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};
export const userRegister = (data = {}) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserService.register(data)
			.then((response) => {
				dispatch(
					alertSet({ show: true, error: false, message: response.message })
				);
			})
			.catch((error) => {
				const data = error.data || null;
				dispatch(
					alertSet({
						show: true,
						error: true,
						message: data ? data.message : "Terjadi kesahalan",
					})
				);
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};
export const userLogin = (email, password, router = null) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserService.login(email, password)
			.then((response) => {
				CookieService.setToken(response.data.access_token);
				dispatch(
					alertSet({ show: true, error: false, message: response.message })
				);
			})
			.then(() => {
				if (!!CookieService.getToken() && !!router) {
					router.push("/produk");
				}
			})
			.catch((error) => {
				const data = error.data || null;
				dispatch(
					alertSet({
						show: true,
						error: true,
						message: data ? data.message : "Terjadi kesahalan",
					})
				);
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};
export const userLogout = (router = null) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserService.logout()
			.then(() => {
				router.replace("/login");
				CookieService.removeToken();
			})
			.catch(() => {
				dispatch(
					alertSet({
						show: true,
						error: true,
						message: "Gagal logout",
					})
				);
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};
export const userUpdate = (data) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserService.update(data)
			.then((response) => {
				dispatch(userSave(response.data));
				dispatch(
					alertSet({
						show: true,
						error: false,
						message: response.message,
					})
				);
			})
			.catch((error) => {
				dispatch(
					alertSet({
						show: true,
						error: true,
						message: error.data.message,
					})
				);
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};
export const userAddCustomer = (data) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserService.addCustomer(data).finally(() => dispatch(loadingSet(false)));
	};
};
export const userForgotPassword = (email) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserService.forgotPassword(email)
			.then(() => {
				dispatch(
					alertSet({
						show: true,
						error: false,
						message: "Berhasil mengirim email",
					})
				);
			})
			.catch(() => {
				dispatch(
					alertSet({
						show: true,
						error: true,
						message: "Terjadi kesalahan, periksa kembali email anda.",
					})
				);
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};

// User Action Local
export const userSave = (data) => {
	return goodWay(USER_SAVE, { data });
};
