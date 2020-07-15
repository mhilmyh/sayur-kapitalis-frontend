export default () => {
	const [amount, setAmount] = React.useState(0);
	const handleIncrement = () => {
		setAmount((prev) => prev + 1);
	};
	const handleDecrement = () => {
		if (amount > 0) {
			setAmount((prev) => prev - 1);
		}
	};
	return (
		<div className="flex flex-wrap shadow-lg rounded py-2 my-5">
			<div className="w-full px-5 py-3">
				<h2 className="text-gray-700 font-semibold text-2xl">Pesanan</h2>
				<p className="text-gray-500 text-xs capitalize">
					Daftar pesanan yang ingin dipesan
				</p>
			</div>
			<hr className="mx-5 w-full"></hr>
			<div className="w-full font-semibold text-sm text-gray-700 px-5">
				<div className="flex justify-start text-gray-700 rounded-md px-2 py-2 my-2">
					<span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
					<div className="flex-grow px-2">
						<h5 className="font-medium">Ayam Mentah 2Kg</h5>
						<span className="font-normal text-gray-500 text-sm">
							Rp. 15.000
						</span>
					</div>
					<div className="text-sm font-normal text-gray-500 tracking-wide px-1 rounded-full">
						<svg
							onClick={() => handleIncrement()}
							className="svg-icon cursor-pointer shadow-md rounded-full border border-1 border-green-500"
							viewBox="0 0 20 20"
						>
							<path
								fill="none"
								d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
							></path>
						</svg>
					</div>
					<div className="text-sm font-normal text-gray-500 tracking-wide px-1 rounded-full">
						{amount}
					</div>
					<div className="text-sm font-normal text-gray-500 tracking-wide px-1 rounded-full">
						<svg
							onClick={() => handleDecrement()}
							className="svg-icon cursor-pointer shadow-md rounded-full border border-1 border-green-500"
							viewBox="0 0 20 20"
						>
							<path
								fill="none"
								d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"
							></path>
						</svg>
					</div>
				</div>
			</div>
			<hr className="mx-5 w-full"></hr>
			<div className="w-full font-semibold text-sm text-gray-700 px-5">
				<div className="flex justify-start text-gray-700 rounded-md px-2 my-2">
					<span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
					<div className="flex-grow font-medium px-2">Total</div>
					<div className="text-sm font-normal text-gray-500 tracking-wide px-1 rounded-full hover:bg-green-100">
						Rp. 15.000
					</div>
				</div>
			</div>
			<div className="w-full text-gray-700 px-5">
				<div className="flex justify-end text-gray-700 my-2">
					<button className="bg-green-500 px-10 py-1 rounded text-gray-100 shadow-md">
						Pesanan
					</button>
				</div>
			</div>
		</div>
	);
};
