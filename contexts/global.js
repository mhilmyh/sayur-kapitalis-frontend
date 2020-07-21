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

	const [alert, setAlert] = React.useState({
		value: false,
		error: false,
		message: "",
	});

	const [category, setCategory] = React.useState([]);
	const [selectedCategory, setSelectedCategory] = React.useState([]);

	const [product, setProduct] = React.useState([]);

	const [search, setSearch] = React.useState("");

	const [user, setUser] = React.useState(
		Cookies.getJSON("user") || {
			email: "",
			id: "",
			created_at: "",
			updated_at: "",
		}
	);

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
				Cookies.set("access_token", access_token, { expires: expires });
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

	const checkLogin = async () => {
		setLoading(true);
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		const isLogin = await API.post("auth/getUser")
			.then((response) => {
				setUser({ ...response.data.data });
				return true;
			})
			.catch((err) => {
				console.log(err);
				return false;
			})
			.finally(() => setLoading(false));

		if (isLogin == true) Router.replace("/produk");
		if (isLogin == false) Router.replace("/login");
		return isLogin;
	};

	const doLogout = () => {
		setLoading(true);
		setAlert((prev) => ({ ...prev, value: false }));
		Cookies.remove("access_token");
		Cookies.remove("user");
		Router.replace("/login");
		setLoading(false);
	};

	const getLastUser = () => {
		if (Cookies.get("user")) {
			const lastUser = Cookies.getJSON("user");
			setUser((prev) => ({ ...prev, ...lastUser }));
		}
	};

	const saveCart = (id) => {
		let intID = parseInt(id, 10);
		const lastCart = Cookies.getJSON("cart");
		if (lastCart === undefined) Cookies.set("cart", [intID]);
		else {
			lastCart.push(intID);
			Cookies.set(
				"cart",
				lastCart.filter((item, pos) => lastCart.indexOf(item) === pos)
			);
		}
	};

	const loadCart = () => {
		if (Cookies.get("cart")) return Cookies.getJSON("cart");
		return null;
	};

	React.useEffect(() => {
		if (Cookies.get("user") == null) {
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
				saveCart,
				loadCart,
				category,
				setCategory,
				selectedCategory,
				setSelectedCategory,
				search,
				setSearch,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default useGlobal;
