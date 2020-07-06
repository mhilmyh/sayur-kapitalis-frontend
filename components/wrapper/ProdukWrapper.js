import ProdukCategory from "../pill/ProdukCategory";
import ProdukCard from "../card/ProdukCard";

export default (props) => {
	return (
		<div className="mx-3 px-3">
			<h5 className="font-semibold text-green-500 text-2xl">Kategori Produk</h5>
			<div className="pb-8 pt-4">
				<ProdukCategory
					data={["makanan", "minuman", "bumbu dapur"]}
				></ProdukCategory>
			</div>
			<h5 className="font-semibold text-green-500 text-2xl">Daftar Produk</h5>
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
						Belum ada kategori
					</span>
				)}
			</div>
		</div>
	);
};
