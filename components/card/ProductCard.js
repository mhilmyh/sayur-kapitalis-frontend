import ProductDetailDialog from "../dialog/ProductDetailDialog";
import ProductImage from "../image/ProductImage";
import { useDispatch } from "react-redux";
import { cartsAdd } from "../../redux/actions/creator/cart";
import PriceSection from "../section/PriceSection";
import DiscountTag from "../tag/DiscountTag";

const ProductCard = (props) => {
	const dispatch = useDispatch();

	const [selected, setSelected] = React.useState(false);
	const [open, setOpen] = React.useState(false);

	const handleClickToCart = (event) => {
		event.preventDefault();
		if (!!props.stock) {
			dispatch(cartsAdd(props));
		}
		setSelected(true);
		setTimeout(() => setSelected(false), 2000);
	};
	return (
		<React.Fragment>
			<div className="rounded overflow-hidden shadow-lg sm:w-3/4 m-2 md:m-8 relative">
				<ProductImage
					src={props.image_url}
					name={props.name}
					onClick={() => setOpen(true)}
				></ProductImage>
				<div className="px-4 py-2">
					<div className="w-full relative">
						<div className="font-bold text-lg text-green-500 mb-2">
							{props.name}
						</div>
						<PriceSection
							price={props.price}
							promoPrice={props.promo_price}
						></PriceSection>
						<DiscountTag discount={props.discount}></DiscountTag>
					</div>
				</div>
				<div className="py-2 absolute top-0 right-0">
					<span
						className="inline-block bg-gray-200 rounded px-2 py-1 text-xs font-semibold text-gray-700 mr-2 max-w-xs cursor-pointer"
						onClick={() => setOpen(true)}
					>
						{props.category.name}
					</span>
				</div>
				<div className="px-4">
					{selected ? (
						<div className="bg-gray-200 text-gray-600 rounded shadow-md px-4 py-2 w-full my-2 flex justify-center items-center">
							<svg className="svg-icon" viewBox="0 0 20 20">
								<path
									fill="none"
									d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
								></path>
							</svg>
						</div>
					) : (
						<button
							className="bg-green-500 text-gray-100 rounded shadow-md px-4 py-2 w-full my-2 font-semibold"
							onClick={handleClickToCart}
						>
							Tambah
						</button>
					)}
				</div>
			</div>
			<ProductDetailDialog
				open={open}
				onClose={() => setOpen(false)}
				{...props}
			></ProductDetailDialog>
		</React.Fragment>
	);
};

export default React.memo(ProductCard);
