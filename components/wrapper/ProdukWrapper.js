import CircularLoad from "../loading/CircularLoad";
import { useSelector, useDispatch } from "react-redux";
import { productsFetch } from "../../redux/actions/creator/product";

const ProdukWrapper = () => {
	const loading = useSelector((state) => state.loading);
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(productsFetch());
	}, []);

	return (
		<div className="w-full flex flex-wrap justify-center items-center pt-8 mt-8">
			{loading ? (
				<CircularLoad></CircularLoad>
			) : (
				products.map((item, index) => (
					<div key={`product-${index}`}>{item.name}</div>
				))
			)}
		</div>
	);
};

export default React.memo(ProdukWrapper);
