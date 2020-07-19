import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);
	const addToCart = (product) => {
		setCart((prev) => [...prev, product]);
	};
	const findProductByAttr = (product, attr, value) => {
		let index = -1;
		for (let i = 0; i < product.length; i++) {
			if (product[i][attr] == value) {
				index = i;
				break;
			}
		}
		return index;
	};
	const saveCart = () => {
		localStorage.setItem("cart", JSON.stringify(cart));
	};
	const loadCart = () => {
		if (localStorage.getItem("cart")) {
			const lastCart = JSON.parse(localStorage.getItem("cart"));
			setCart({ ...lastCart });
		}
	};
	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addToCart,
				findProductByAttr,
				saveCart,
				loadCart,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default useCart;
