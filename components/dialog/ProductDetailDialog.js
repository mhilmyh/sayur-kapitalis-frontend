import ProductImage from "../image/ProductImage";
import DialogWrapper from "../wrapper/DialogWrapper";
import { convertToRupiah } from "../../redux/utils/format";
import { useDispatch } from "react-redux";
import { cartsAdd } from "../../redux/actions/creator/cart";

const ProductDetailDialog = ({
	open = false,
	onClose = () => {},
	...product
}) => {
	const dispatch = useDispatch();
	const handleClickToCart = (event) => {
		event.preventDefault();
		if (!!product.stock) {
			dispatch(cartsAdd(product));
		}
	};
	return (
		<DialogWrapper
			open={open}
			onClose={onClose}
			textYes="Tambah"
			onClickYes={handleClickToCart}
		>
			<ProductImage src={product.image_url} name={product.name}></ProductImage>
			<div className="p-8">
				<article className="prose lg:prose-lg">
					<div className="w-full flex justify-between items-start">
						<div className="p-0 m-0">
							<h2 className="my-0 pr-4">{product.name}</h2>
							<span className="text-green-500 font-bold">
								{convertToRupiah(product.price)}
							</span>
						</div>
						<div className="p-0 m-0">
							<div className="bg-gray-200 text-gray-100 bg-red-600 rounded font-semibold px-2 py-1">
								<span className="pr-1">Sisa</span>
								<span className="pl-1">{product.stock}</span>
							</div>
						</div>
					</div>
					<span className="text-gray-600">{`Unit ${product.unit}`}</span>
					<p>{product.descriptions}</p>
					<div className="w-full">
						<span className="inline bg-yellow-400 rounded p-2 font-semibold mr-2">
							{product.category.name}
						</span>
						<span className="inline bg-yellow-400 rounded p-2 font-semibold ml-2">
							{product.sub_category.name}
						</span>
					</div>
				</article>
			</div>
		</DialogWrapper>
	);
};

export default React.memo(ProductDetailDialog);
