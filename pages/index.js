import Router from "next/router";

export default () => {
	React.useEffect(() => {
		setTimeout(() => Router.replace("/produk"), 100);
	}, []);
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<span>Mengarahkan Ulang...</span>
		</div>
	);
};
