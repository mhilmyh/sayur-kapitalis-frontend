import React, { createContext, useContext } from "react";
import API from "../services/axios";
import Cookies from "js-cookie";
import Router from "next/router";

export const GlobalContext = createContext({});
export const useGlobal = () => {
	const context = useContext(GlobalContext);
	return context;
};

export const GlobalProvider = (props) => {
	const [loading, setLoading] = React.useState(false);
	const [badge, setBadge] = React.useState(false);

	const [alert, setAlert] = React.useState({
		value: false,
		error: false,
		message: "",
	});

	const saveCart = (id) => {
		let intID = parseInt(id, 10);
		const lastCart = Cookies.getJSON("cart");
		if (lastCart === undefined) Cookies.set("cart", [intID], { expires: 2 });
		else {
			lastCart.push(intID);
			Cookies.set(
				"cart",
				lastCart.filter((item, pos) => lastCart.indexOf(item) === pos),
				{ expires: 2 }
			);
		}
	};
	const saveCartArray = (arr) => {
		Cookies.set("cart", arr);
	};
	const loadCart = () => {
		if (Cookies.get("cart")) return Cookies.getJSON("cart");
		return [];
	};

	const [category, setCategory] = React.useState([]);
	const [selectedCategory, setSelectedCategory] = React.useState([]);
	const saveCategoryToLocal = (data) => {
		localStorage.setItem("category", JSON.stringify(data));
	};
	const getCategoryFromLocal = () => {
		const result = JSON.parse(localStorage.getItem("category"));
		const now = new Date();
		const ttl = parseInt(localStorage.getItem("ttl"), 10);
		if (ttl < now.getTime()) return null;
		return result;
	};

	const [product, setProduct] = React.useState([]);
	const saveProductToLocal = (data) => {
		localStorage.setItem("product", JSON.stringify(data));
		const hour = 1000 * 60 * 60;
		const now = new Date();
		const ttl = now.setTime(now.getTime() + hour);
		localStorage.setItem("ttl", ttl);
	};
	const getProductFromLocal = () => {
		const result = JSON.parse(localStorage.getItem("product"));
		const now = new Date();
		const ttl = parseInt(localStorage.getItem("ttl"), 10);
		if (ttl < now.getTime()) return null;
		return result;
	};

	const [search, setSearch] = React.useState("");

	const [user, setUser] = React.useState(Cookies.getJSON("user"));

	const doLogin = (email, password) => {
		setLoading(true);
		setAlert({ value: false });
		API.post("auth/login", { email, password })
			.then(async (response) => {
				const message =
					response.data && response.data.message
						? response.data.message
						: "Berhasil Login";
				setAlert({
					message: message,
					error: false,
					value: true,
				});
				const { access_token, expires } = await response.data.data;
				Cookies.set("access_token", access_token, {
					expires: parseInt(expires, 10) / 14400,
				});
				API.defaults.headers.Authorization = `Bearer ${access_token}`;
			})
			.then(() => checkLogin())
			.catch((err) => {
				const message =
					err.response && err.response.data
						? err.response.data.message
						: "Gagal Login";
				setAlert({
					message: message,
					error: true,
					value: true,
				});
			})
			.finally(() => setLoading(false));
	};

	const checkLogin = async (redirect = true) => {
		setLoading(true);
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		const isLogin = await API.post("auth/getUser")
			.then((response) => {
				setUser({ ...response.data.data });
				Cookies.set("user", { ...response.data.data });
				return true;
			})
			.catch((err) => {
				console.log(err);
				return false;
			})
			.finally(() => setLoading(false));

		if (isLogin == true && redirect) Router.replace("/produk");
		else if (redirect) Router.replace("/login");
		return isLogin;
	};

	const doLogout = async () => {
		setLoading(true);
		setAlert((prev) => ({ ...prev, value: false }));
		Cookies.remove("access_token");
		Cookies.remove("user");
		await API.post("auth/logout")
			.then(() => {
				return true;
			})
			.catch((err) => {
				console.log(err);
				return false;
			})
			.finally(() => {
				setLoading(false);
			});
		Router.replace("/login");
	};

	const getLastUser = () => {
		const lastUser = Cookies.getJSON("user");
		if (Object.keys(lastUser).length === 0 && lastUser.constructor === Object) {
			return {
				email: "",
				customer: {
					first_name: "",
					last_name: "",
					phone_number: "",
					address: "",
				},
				agent: {
					first_name: "",
					last_name: "",
					phone_number: "",
					address: "",
				},
				is_agent: 0,
				is_admin: 0,
				created_at: "",
				updated_at: "",
			};
		} else {
			setUser((prev) => ({ ...prev, ...lastUser }));
			return lastUser;
		}
	};

	React.useEffect(() => {
		if (Cookies.get("user") == null && user != null) {
			Cookies.set("user", JSON.stringify(user));
		}
		if (user == null) {
			const lastUser = Cookies.getJSON("user");
			setUser((prev) => ({ ...prev, ...lastUser }));
		}
	}, [user]);
	return (
		<GlobalContext.Provider
			value={{
				doLogin,
				doLogout,
				checkLogin,
				user,
				setUser,
				loading,
				setLoading,
				alert,
				setAlert,
				getLastUser,
				product,
				setProduct,
				saveProductToLocal,
				getProductFromLocal,
				saveCart,
				saveCartArray,
				loadCart,
				category,
				setCategory,
				selectedCategory,
				setSelectedCategory,
				saveCategoryToLocal,
				getCategoryFromLocal,
				search,
				setSearch,
				badge,
				setBadge,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default useGlobal;
