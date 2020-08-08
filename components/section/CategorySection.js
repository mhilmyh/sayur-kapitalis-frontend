import CircularLoad from "../loading/CircularLoad";
import Selection from "../input/Selection";

import { useGlobal } from "../../contexts/global";

import { useSelector, useDispatch } from "react-redux";
import { categoriesFetch } from "../../redux/actions/creator/category";

const CategorySection = () => {
	const loading = useSelector((state) => state.loading);
	const categories = useSelector((state) => state.categories);
	const dispatch = useDispatch();

	const context = useGlobal();

	const handleChangeCategory = ({ target }) => {
		context.pickCategory(target.value);
	};
	const handleChangeSubCategory = ({ target }) => {
		context.pickSubCategory(target.value);
	};

	React.useEffect(() => {
		dispatch(categoriesFetch());
	}, []);
	return (
		<div className="w-full bg-white flex justify-center items-start">
			{loading ? (
				<CircularLoad></CircularLoad>
			) : (
				<React.Fragment>
					<div className="w-1/2 flex justify-center mr-2">
						<Selection
							entity="Kategori Produk"
							value={context.categoryID}
							data={categories}
							onChange={handleChangeCategory}
						></Selection>
					</div>
					<div className="w-1/2 flex justify-center ml-2">
						<Selection
							entity="Sub Kategori Produk"
							value={context.subCategoryID}
							data={context.subCategories}
							onChange={handleChangeSubCategory}
						></Selection>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default React.memo(CategorySection);
