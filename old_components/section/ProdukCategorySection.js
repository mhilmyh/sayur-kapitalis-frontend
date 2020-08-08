import ProdukCategoryPill from "../pill/ProdukCategoryPill";
import CircularLoading from "../loading/CircularLoading";
import { useSelector } from "react-redux";
export default () => {
	const categories = useSelector((state) => state.categories);
	const loading = useSelector((state) => state.loading);
	return (
		<React.Fragment>
			{loading ? (
				<CircularLoading></CircularLoading>
			) : (
				<div>
					{categories.map((category, index) => (
						<ProdukCategoryPill
							key={`category-${index}`}
							data={category}
						></ProdukCategoryPill>
					))}
				</div>
			)}
		</React.Fragment>
	);
};
