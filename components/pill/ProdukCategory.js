export default (props) => {
	return (
		<React.Fragment>
			{props.data ? (
				props.data.map((data, i) => {
					return (
						<span
							key={"kategori-" + i}
							className="inline-block bg-gray-200 rounded px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2"
						>
							{"#" + String(data).toLowerCase().split(" ").join("-")}
						</span>
					);
				})
			) : (
				<span className="inline-block py-1 my-1 text-sm font-semibold text-gray-500 mr-2">
					Belum ada kategori
				</span>
			)}
		</React.Fragment>
	);
};
