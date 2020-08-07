import { USER_SAVE } from "../types";
import { goodWay } from "../../utils/format";
import { loadingSet } from "./loading";
import { alertSet } from "./alert";
import UserServices from "../../services/user.service";

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
			.then(() => {})
			.catch(() => {})
			.finally(() => dispatch(loadingSet(false)));
	};
};
export const userLogin = (email, password) => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserServices.login(email, password)
			.then(() => {})
			.catch(({ data: message }) => {
				dispatch(alertSet({ show: true, error: true, message: message }));
			})
			.finally(() => dispatch(loadingSet(false)));
	};
};
export const userLogout = () => {
	return (dispatch) => {
		dispatch(loadingSet(true));
		UserServices.logout().finally(() => dispatch(loadingSet(false)));
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

// User Action Local
export const userSave = (data) => {
	return goodWay(USER_SAVE, { data });
};
