import ProdukCategorySection from "../section/ProdukCategorySection";
import ProdukCard from "../card/ProdukCard";
import CircularLoading from "../loading/CircularLoading";
import { useGlobal } from "../../contexts/global";
import { useSelector } from "react-redux";

export default () => {
	const { search } = useGlobal();
	const products = useSelector((state) => state.products);
	const loading = useSelector((state) => state.loading);
	return (
		<div className="mx-3 p-3">
			<h5 className="font-bold text-green-500 text-lg">Kategori Produk</h5>
			<div className="pb-8 pt-4">
				<ProdukCategorySection></ProdukCategorySection>
			</div>
			<h5 className="font-bold text-green-500 text-lg">Daftar Produk</h5>
			{loading ? (
				<CircularLoading></CircularLoading>
			) : (
				<div className="pb-8 pt-4">
					<div className="flex flex-wrap">
						{products
							.filter((p) => String(p.name).toLowerCase().includes(search))
							.map((each, index) => {
								return (
									<div
										key={`produk-${each.id}-${index}`}
										className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
									>
										<ProdukCard product={each}></ProdukCard>
									</div>
								);
							})}
					</div>
				</div>
			)}
		</div>
	);
};
