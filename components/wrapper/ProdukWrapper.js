import ProdukCategorySection from "../section/ProdukCategorySection";
import ProdukCard from "../card/ProdukCard";
import ProdukModal from "../modal/ProdukModal";

export default (props) => {
	return (
		<div className="mx-3 p-3">
			<h5 className="font-bold text-green-500 text-lg">Kategori Produk</h5>
			<div className="pb-8 pt-4">
				<ProdukCategorySection
					data={["makanan", "minuman", "bumbu dapur"]}
				></ProdukCategorySection>
			</div>
			<h5 className="font-bold text-green-500 text-lg">Daftar Produk</h5>
			<div className="pb-8 pt-4">
				{props.produk ? (
					<div className="flex flex-wrap">
						{props.produk.map((_, i) => {
							return (
								<div
									key={"produk-" + i}
									className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
								>
									<ProdukCard></ProdukCard>
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
			<ProdukModal></ProdukModal>
		</div>
	);
};
