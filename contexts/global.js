import React from "react";
import { useSelector } from "react-redux";

export const GlobalContext = React.createContext({});

export const useGlobal = () => {
	const context = React.useContext(GlobalContext);
	return context;
};

export const GlobalProvider = (props) => {
	const categories = useSelector((state) => state.categories);

	const [search, setSearch] = React.useState("");
	const [categoryID, setCategoryID] = React.useState(0);
	const [category, setCategory] = React.useState("");
	const [subCategoryID, setSubCategoryID] = React.useState(0);
	const [subCategory, setSubCategory] = React.useState("");
	const [subCategories, setSubCategories] = React.useState([]);

	const pickCategory = (id = 0) => {
		if (!!id) {
			setCategoryID(id);
			for (let i = 0; i < categories.length; i++) {
				if (parseInt(id, 10) === parseInt(categories[i].id, 10)) {
					setCategory(categories[i].name);
					setSubCategories(categories[i].sub_categories);
					setSubCategory("");
					setSubCategoryID("");
					break;
				}
			}
		} else if (id === 0) {
			setCategoryID(0);
			setCategory("");
			setSubCategoryID(0);
			setSubCategory("");
		}
	};
	const pickSubCategory = (id = 0) => {
		if (!!id) {
			setSubCategoryID(id);
			for (let i = 0; i < subCategories.length; i++) {
				if (parseInt(id, 10) === parseInt(subCategories[i].id, 10)) {
					setSubCategory(subCategories[i].name);
					break;
				}
			}
		} else if (id === 0) {
			setSubCategoryID(0);
			setSubCategory("");
		}
	};
	return (
		<GlobalContext.Provider
			value={{
				search,
				setSearch,
				category,
				categoryID,
				subCategory,
				subCategoryID,
				subCategories,
				pickCategory,
				pickSubCategory,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default useGlobal;
