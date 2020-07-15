export default () => {
	const [added, setAdded] = React.useState(false);
	const handleClick = () => {
		setAdded(!added);
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
					<span className="text-gray-500 text-xs">Stock 3</span>
				</p>
				<p className="font-medium">
					<span className="text-green-700 text-sm">Rp. 500.000</span>
				</p>
				<div className="w-full pt-3">
					<button
						className={
							"container rounded shadow-lg py-2 " +
							(added
								? "bg-gray-500 text-gray-100"
								: "bg-green-500 text-gray-100")
						}
						onClick={() => handleClick()}
					>
						{added ? "Keluarkan" : "Tambahkan"}
					</button>
				</div>
			</div>
		</div>
	);
};
