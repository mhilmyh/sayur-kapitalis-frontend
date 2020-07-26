import { useGlobal } from "../../contexts/global";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Alert from "@material-ui/lab/Alert";
import Cookies from "js-cookie";

export default () => {
	const ctx = useGlobal();
	const [products, setProducts] = React.useState([]);
	const style = {
		color: green[500],
	};

	const [cart, setCart] = React.useState([]);
	const [amount, setAmount] = React.useState([]);
	const [totalSum, setTotalSum] = React.useState(0);

	const handleIncrement = (index) => {
		setAmount((prev) => {
			const newArr = [];
			for (let i = 0; i < prev.length; i++) {
				if (i === parseInt(index, 10)) newArr.push(prev[i] + 1);
				else newArr.push(prev[i]);
			}
			return newArr;
		});
		setTotalSum((prev) => {
			const productPrice = products.find(
				(el) => el.id === parseInt(cart[index], 10)
			).price;
			return parseInt(prev, 10) + parseInt(productPrice, 10);
		});
	};
	const handleDecrement = (index) => {
		setAmount((prev) => {
			const newArr = [];
			for (let i = 0; i < prev.length; i++) {
				if (i === parseInt(index, 10)) newArr.push(Math.max(0, prev[i] - 1));
				else newArr.push(prev[i]);
			}
			return newArr;
		});
		if (amount[index]) {
			setTotalSum((prev) => {
				const productPrice = products.find(
					(el) => el.id === parseInt(cart[index], 10)
				).price;
				return parseInt(prev, 10) - parseInt(productPrice, 10);
			});
		}
	};
	const handleDelete = (index) => {
		let lastCart = ctx.loadCart();
		lastCart = lastCart.filter((el, i) => i !== parseInt(index, 10));
		setTotalSum((prev) => {
			const deletedPrice = products.find(
				(el) => el.id === parseInt(cart[index], 10)
			).price;
			const newSum =
				parseInt(prev, 10) -
				parseInt(amount[index], 10) * parseInt(deletedPrice, 10);
			if (newSum === 0) ctx.setBadge(0);
			return newSum;
		});
		setCart((prev) => {
			const newArr = [];
			for (let i = 0; i < prev.length; i++) {
				if (i === parseInt(index, 10)) continue;
				newArr.push(prev[i]);
			}
			return newArr;
		});
		setAmount((prev) => {
			const newArr = [];
			for (let i = 0; i < prev.length; i++) {
				if (i === parseInt(index, 10)) continue;
				newArr.push(prev[i]);
			}
			return newArr;
		});
		ctx.saveCartArray(lastCart);
	};

	const resetData = () => {
		setCart([]);
		setAmount([]);
		setTotalSum(0);
		Cookies.remove("cart");
	};

	const handleOrder = () => {
		if (Array.isArray(cart) && cart.length === 0) {
			ctx.setAlert({
				message: "Tidak ada produk yg ingin di pesan",
				error: true,
				value: true,
			});
			return;
		}
		const data = [];
		for (let i = 0; i < cart.length; i++) {
			data.push({
				product_id: cart[i],
				quantity: amount[i],
			});
		}
		ctx.orderProduct(data, resetData);
	};

	React.useEffect(() => {
		ctx.setAlert({ value: false });
		const listProduct = ctx.getProductFromLocal(true) || [];
		setProducts(listProduct);

		const tempCart = ctx.loadCart() || [];
		setCart(tempCart);

		let sum = 0;
		const tempAmount = [];
		for (let i = 0; i < tempCart.length; i++) {
			tempAmount.push(1);
			sum += parseInt(
				listProduct.find((el) => el.id === tempCart[i]).price || 0,
				10
			);
		}
		setAmount(tempAmount);
		setTotalSum(sum);
	}, []);
	return (
		<div className="flex flex-wrap shadow-lg rounded py-2 my-5">
			<div className="w-full px-5 py-3">
				<h2 className="text-gray-700 font-semibold text-2xl">Pesanan</h2>
				<p className="text-gray-500 text-xs capitalize">
					Daftar pesanan yang ingin dipesan
				</p>
			</div>
			<hr className="mx-5 w-full"></hr>
			<div className="w-full mx-5">
				{ctx.alert.value && (
					<div className="relative w-full mb-3">
						<Alert severity={ctx.alert.error ? "error" : "success"}>
							<span>{ctx.alert.message}</span>
						</Alert>
					</div>
				)}
			</div>
			<div className="w-full font-semibold text-sm text-gray-700 px-5">
				{cart.map((id, index) => (
					<div
						key={id}
						className="flex justify-start text-gray-700 rounded-md px-2 py-2 my-2"
					>
						<span className="m-2">
							<button
								className="cursor-pointer shadow rounded-full"
								onClick={() => handleDelete(index)}
							>
								<svg className="svg-icon" viewBox="0 0 20 20">
									<path
										fill="none"
										d="M12.71,7.291c-0.15-0.15-0.393-0.15-0.542,0L10,9.458L7.833,7.291c-0.15-0.15-0.392-0.15-0.542,0c-0.149,0.149-0.149,0.392,0,0.541L9.458,10l-2.168,2.167c-0.149,0.15-0.149,0.393,0,0.542c0.15,0.149,0.392,0.149,0.542,0L10,10.542l2.168,2.167c0.149,0.149,0.392,0.149,0.542,0c0.148-0.149,0.148-0.392,0-0.542L10.542,10l2.168-2.168C12.858,7.683,12.858,7.44,12.71,7.291z M10,1.188c-4.867,0-8.812,3.946-8.812,8.812c0,4.867,3.945,8.812,8.812,8.812s8.812-3.945,8.812-8.812C18.812,5.133,14.867,1.188,10,1.188z M10,18.046c-4.444,0-8.046-3.603-8.046-8.046c0-4.444,3.603-8.046,8.046-8.046c4.443,0,8.046,3.602,8.046,8.046C18.046,14.443,14.443,18.046,10,18.046z"
									></path>
								</svg>
							</button>
						</span>
						<div className="flex-grow px-2">
							<h5 className="font-medium">
								{products.find((el) => el.id === id).name}
							</h5>
							<span className="font-normal text-gray-500 text-sm">
								Rp {products.find((el) => el.id === id).price}
							</span>
						</div>
						<div className="text-sm font-normal text-gray-500 tracking-wide px-1 rounded-full">
							<button
								onClick={() => handleIncrement(index)}
								className="text-gray-200 cursor-pointer shadow-md rounded-full w-6 h-6"
							>
								<svg className="svg-icon" viewBox="0 0 20 20">
									<path
										fill="none"
										d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
									></path>
								</svg>
							</button>
						</div>
						<div className="text-sm font-normal text-gray-500 tracking-wide px-1 rounded-full">
							{amount[index]}
						</div>
						<div className="text-sm font-normal text-gray-500 tracking-wide px-1 rounded-full">
							<button
								onClick={() => handleDecrement(index)}
								className="text-gray-200 cursor-pointer shadow-md rounded-full w-6 h-6"
							>
								<svg className="svg-icon" viewBox="0 0 20 20">
									<path
										fill="none"
										d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"
									></path>
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>
			<hr className="mx-5 w-full"></hr>
			<div className="w-full font-semibold text-sm text-gray-700 px-5">
				<div className="flex justify-start text-gray-700 rounded-md px-2 my-2">
					<span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
					<div className="flex-grow font-medium px-2">Total</div>
					<div className="text-sm font-normal text-gray-500 tracking-wide px-1">
						Rp {totalSum}
					</div>
				</div>
			</div>
			<div className="w-full text-gray-700 px-5">
				<div className="flex justify-end text-gray-700 my-2">
					{ctx.loading ? (
						<div className="px-10 py-1">
							<CircularProgress
								size={40}
								thickness={6}
								disableShrink
								style={style}
							></CircularProgress>
						</div>
					) : (
						<button
							className="bg-green-500 px-10 py-1 rounded text-gray-100 shadow-md"
							onClick={handleOrder}
						>
							Pesan
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
