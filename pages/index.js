import Router from "next/router";

export default () => {
	React.useEffect(() => {
		setTimeout(() => Router.replace("/produk"), 1000);
	}, []);
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<span>Mengarahkan Ulang...</span>
		</div>
	);
};
