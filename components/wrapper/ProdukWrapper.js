import CircularLoad from "../loading/CircularLoad";
import ProductCard from "../card/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { productsFetch } from "../../redux/actions/creator/product";
import useGlobal from "../../contexts/global";

const ProdukWrapper = () => {
	const loading = useSelector((state) => state.loading);
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const context = useGlobal();

	React.useEffect(() => {
		dispatch(productsFetch());
	}, []);

	return (
		<div className="w-full flex flex-wrap justify-center items-center pt-4 mt-4">
			{loading ? (
				<CircularLoad></CircularLoad>
			) : (
				products
					.filter((item) => item.name.toLowerCase().includes(context.search))
					.filter((item) =>
						!!context.category ? item.category.name === context.category : true
					)
					.filter((item) =>
						!!context.subCategory
							? item.sub_category.name === context.subCategory
							: true
					)
					.map((item, index) => (
						<div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
							<ProductCard {...item}></ProductCard>
						</div>
					))
			)}
		</div>
	);
};

export default React.memo(ProdukWrapper);
