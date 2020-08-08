import { productsSave } from "../../redux/actions/creator/product";

const ProductImage = ({ src = "", name = "" }) => {
	if (!!src) {
		return <img className="w-full" src={src} alt={name}></img>;
	}
	return <img className="w-full" src="" alt="Sunset in the mountains"></img>;
};

const ProductCard = ({
	name = "",
	price = "",
	stock = 0,
	image_url = "",
	units = "",
	description = "",
}) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<ProductImage src={image_url} name={name}></ProductImage>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
				<p className="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
					quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
					nihil.
				</p>
			</div>
			<div className="px-6 py-4">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					#photography
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					#travel
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
					#winter
				</span>
			</div>
		</div>
	);
};

export default React.memo(ProductCard);
