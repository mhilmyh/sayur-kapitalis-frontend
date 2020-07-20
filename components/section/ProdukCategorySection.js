import ProdukCategoryPill from "../pill/ProdukCategoryPill";
import { green } from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import Cookies from "js-cookie";
import API from "../../services/axios";
import { useGlobal } from "../../contexts/global";
export default () => {
	const ctx = useGlobal();
	const style = {
		color: green[500],
	};
	const [loading, setLoading] = React.useState([]);
	const getCategory = async () => {
		setLoading(true);
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		await API.get("/category")
			.then((res) => {
				const { data } = res.data;
				ctx.setCategory(data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	};
	React.useEffect(() => {
		getCategory();
	}, []);
	const handleClickTest = () => {
		console.log(ctx.selectedCategory);
		console.log(ctx.category.map((el) => el.id));
		console.log(ctx.selectedCategory.length);
	};
	return (
		<React.Fragment>
			{loading ? (
				<div className="w-full flex justify-center">
					<CircularProgress
						size={40}
						thickness={6}
						disableShrink
						style={style}
					></CircularProgress>
				</div>
			) : (
				<div>
					{ctx.category ? (
						ctx.category.map((data, i) => {
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
					<div>
						<button
							className="bg-yellow-500 shadow px-5"
							onClick={handleClickTest}
						>
							Test
						</button>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};
