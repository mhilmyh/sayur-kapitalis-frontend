import React, { createContext, useContext } from "react";
import API from "../services/axios";
import Cookies from "js-cookie";
import Router from "next/router";

const AuthContext = createContext({});

export default function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

export const AuthProvider = ({ children }) => {
	return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const ProtectRoute = (Component) => {
	console.log(Component);
	return () => {
		return <Component></Component>;
	};
};
