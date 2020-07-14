import Router from "next/router";
import { useEffect } from "react";

export default () => {
	useEffect(() => {
		Router.replace("/produk");
	}, []);
	return <div></div>;
};
