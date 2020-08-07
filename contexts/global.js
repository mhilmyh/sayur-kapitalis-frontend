import React, { createContext, useContext } from "react";

export const GlobalContext = createContext({});
export const useGlobal = () => {
	const context = useContext(GlobalContext);
	return context;
};

export const GlobalProvider = (props) => {
	const [search, setSearch] = React.useState("");
	return (
		<GlobalContext.Provider
			value={{
				search,
				setSearch,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default useGlobal;
