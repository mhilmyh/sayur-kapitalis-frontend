import { USER_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import { alertSet } from "./alert";
import UserServices from "../../services/user.service";
import CookieService from "../../services/cookie.service";

// User Action API Call
export const userFetch = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserServices.getUser().finally(() => dispatch(loadingSet(false)));
	};
};
export const userRegister = (data = {}) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserServices.register(data)
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
		UserServices.login(email, password)
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
		UserServices.logout()
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
		UserServices.update(data).finally(() => dispatch(loadingSet(false)));
	};
};
export const userAddCustomer = (data) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserServices.addCustomer(data).finally(() => dispatch(loadingSet(false)));
	};
};
export const userForgotPassword = (email) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserServices.forgotPassword(email)
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
