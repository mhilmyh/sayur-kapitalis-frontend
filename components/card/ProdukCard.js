export default () => {
	const handleClick = () => {
		console.log("Clicked !");
	};
	return (
		<div
			onClick={() => handleClick()}
			className="rounded overflow-hidden shadow-lg mx-1 md:mx-5"
		>
			<img
				className="w-full object-cover h-32 max-h-full"
				src="https://images.unsplash.com/photo-1568595190540-629c27a62db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
				alt="Sunset in the mountains"
			></img>
			<div className="p-4">
				<div className="font-semibold text-sm text-gray-700 mb-2 container rounded">
					Telor Ayam Negeri 1KG
				</div>
				<p className="font-medium">
					<span className="text-green-700 text-sm">Rp. 500.000</span>
				</p>
				<div className="w-full pt-3">
					<button className="container bg-green-500 rounded shadow-lg py-2 text-white">
						Tambah
					</button>
				</div>
			</div>
		</div>
	);
};
