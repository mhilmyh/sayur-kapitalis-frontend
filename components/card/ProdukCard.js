import { useGlobal } from "../../contexts/global";
import Cookies from "js-cookie";
export default (props) => {
	const ctx = useGlobal();
	const [added, setAdded] = React.useState(false);
	const handleClick = (p) => {
		setAdded(true);
		ctx.saveCart(p.id);
		setTimeout(() => setAdded(false), 1000);
	};
	return (
		<div className="rounded overflow-hidden shadow-lg mx-1 md:mx-5">
			{props.product.image_url ? (
				<img
					className="w-full object-cover h-32 max-h-full"
					src={props.product.image_url}
					alt="Sunset in the mountains"
				></img>
			) : (
				<img
					className="w-full object-cover h-32 max-h-full"
					src="/assets/placeholder.png"
					alt="Sunset in the mountains"
				></img>
			)}
			<div className="p-4">
				<div className="font-semibold text-sm text-gray-700 mb-2 container rounded">
					{props.product.name ? props.product.name : "Nama Produk"}
				</div>
				<p className="font-medium">
					<span className="text-gray-500 text-xs">
						Stock {props.product.stock ? props.product.stock : "0"}
					</span>
				</p>
				<p className="font-medium">
					<span className="text-green-700 text-sm">
						Rp {props.product.price ? props.product.price : "0"}
					</span>
				</p>
				<div className="w-full pt-3">
					<button
						className={
							"container rounded shadow-lg py-2 " +
							(added
								? "bg-gray-500 text-gray-100"
								: "bg-green-500 text-gray-100")
						}
						onClick={() => handleClick(props.product)}
					>
						{added ? "Sudah ditambah" : "Tambahkan"}
					</button>
				</div>
			</div>
		</div>
	);
};
