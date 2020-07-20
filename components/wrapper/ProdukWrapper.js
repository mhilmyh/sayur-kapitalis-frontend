import ProdukCategorySection from "../section/ProdukCategorySection";
import ProdukCard from "../card/ProdukCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useGlobal } from "../../contexts/global";
import API from "../../services/axios";
import Cookies from "js-cookie";
import { green } from "@material-ui/core/colors";

export default (props) => {
	const ctx = useGlobal();
	const style = {
		color: green[500],
	};
	const [product, setProduct] = React.useState([]);
	const [loading, setLoading] = React.useState([]);
	const getProduct = async () => {
		setLoading(true);
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		await API.get("/product")
			.then((res) => {
				const { data } = res.data;
				setProduct(data);
				console.log(
					product.filter(
						(each) => !ctx.category.map((el) => el.id).includes(each)
					)
				);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	};
	React.useEffect(() => {
		getProduct();
	}, []);
	return (
		<div className="mx-3 p-3">
			<h5 className="font-bold text-green-500 text-lg">Kategori Produk</h5>
			<div className="pb-8 pt-4">
				<ProdukCategorySection></ProdukCategorySection>
			</div>
			<h5 className="font-bold text-green-500 text-lg">Daftar Produk</h5>
			{loading ? (
				<div className="pt-4 w-full flex justify-center">
					<CircularProgress
						size={40}
						thickness={6}
						disableShrink
						style={style}
					></CircularProgress>
				</div>
			) : (
				<div className="pb-8 pt-4">
					{product ? (
						<div className="flex flex-wrap">
							{product
								.filter(
									(each) => !ctx.category.map((el) => el.id).includes(each)
								)
								.map((each) => {
									return (
										<div
											key={"produk-" + each.id}
											className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
										>
											<ProdukCard product={each}></ProdukCard>
										</div>
									);
								})}
						</div>
					) : (
						<span className="inline-block py-1 text-sm font-semibold text-gray-500 mr-2">
							Belum ada produk
						</span>
					)}
				</div>
			)}
		</div>
	);
};
