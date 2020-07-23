import { useGlobal } from "../../contexts/global";
import Cookies from "js-cookie";
export default (props) => {
	const ctx = useGlobal();
	const [added, setAdded] = React.useState(false);
	const handleClick = (p) => {
		setAdded(true);
		ctx.saveCart(p.id);
		ctx.setBadge(1);
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
							"container rounded shadow-lg py-2 text-center " +
							(added
								? "bg-gray-200 text-gray-100"
								: "bg-green-500 text-gray-100")
						}
						onClick={() => handleClick(props.product)}
					>
						{added ? (
							<div className="w-full flex-justify-center text-center">
								<svg className="svg-icon w-full" viewBox="0 0 20 20">
									<path
										fill="none"
										d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
									></path>
								</svg>
							</div>
						) : (
							"Tambahkan"
						)}
					</button>
				</div>
			</div>
		</div>
	);
};
