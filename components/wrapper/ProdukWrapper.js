import ProdukCategorySection from "../section/ProdukCategorySection";
import ProdukCard from "../card/ProdukCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useGlobal } from "../../contexts/global";
import API from "../../services/axios";
import Cookies from "js-cookie";
import { green } from "@material-ui/core/colors";
import useSWR from "swr";

export default () => {
	const ctx = useGlobal();
	const style = {
		color: green[500],
	};
	const [loading, setLoading] = React.useState([]);
	const [mounted, setMounted] = React.useState(false);

	const getProduct = () => {
		setLoading(true);
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		API.get("/product")
			.then((res) => {
				const { data } = res.data;
				ctx.setProduct(data);
				ctx.saveProductToLocal(data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	};

	useSWR(mounted ? "/produk" : null, getProduct);

	React.useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	if (!mounted) {
		return null;
	}

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
					{ctx.product ? (
						<div className="flex flex-wrap">
							{ctx.product
								.filter((p) => p.name.toLowerCase().includes(ctx.search))
								.filter((each) =>
									typeof ctx.selectedCategory !== "undefined" &&
									ctx.selectedCategory.length === 0
										? true
										: ctx.selectedCategory.includes(each.category_id)
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
