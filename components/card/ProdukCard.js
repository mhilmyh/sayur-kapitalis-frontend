export default () => {
	return (
		<div className="rounded overflow-hidden shadow-lg mx-4">
			<img
				className="w-full object-cover h-32 max-h-full"
				src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
				alt="Sunset in the mountains"
			></img>
			<div className="p-4">
				<div className="text-sm mb-2">Ayam Goreng Murah</div>
				<p className="font-bold text-green-500 text-base">Rp. 500.000</p>
			</div>
		</div>
	);
};
