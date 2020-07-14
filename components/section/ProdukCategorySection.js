import ProdukCategoryPill from "../pill/ProdukCategoryPill";

export default (props) => {
	return (
		<React.Fragment>
			{props.data ? (
				props.data.map((data, i) => {
					return (
						<ProdukCategoryPill
							key={"kategori-" + i}
							data={data}
						></ProdukCategoryPill>
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
