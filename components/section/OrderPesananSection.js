import { useGlobal } from "../../contexts/global";
export default () => {
	const ctx = useGlobal();
	const [products, setProducts] = React.useState([]);

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
			return (
				parseInt(prev, 10) -
				parseInt(amount[index], 10) * parseInt(deletedPrice, 10)
			);
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
	React.useEffect(() => {
		const listProduct = ctx.getProductFromLocal();
		setProducts(listProduct);

		const tempCart = ctx.loadCart();
		setCart(tempCart);

		let sum = 0;
		const tempAmount = [];
		for (let i = 0; i < tempCart.length; i++) {
			tempAmount.push(1);
			sum += parseInt(
				listProduct.find((el) => el.id === tempCart[i]).price,
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
										d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
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
								className="bg-green-500 text-gray-200 cursor-pointer shadow-md rounded-full w-6 h-6"
							>
								+
							</button>
						</div>
						<div className="text-sm font-normal text-gray-500 tracking-wide px-1 rounded-full">
							{amount[index]}
						</div>
						<div className="text-sm font-normal text-gray-500 tracking-wide px-1 rounded-full">
							<button
								onClick={() => handleDecrement(index)}
								className="bg-green-500 text-gray-200 cursor-pointer shadow-md rounded-full w-6 h-6"
							>
								-
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
					<div className="text-sm font-normal text-gray-500 tracking-wide px-1 rounded-full hover:bg-green-100">
						Rp {totalSum}
					</div>
				</div>
			</div>
			<div className="w-full text-gray-700 px-5">
				<div className="flex justify-end text-gray-700 my-2">
					<button className="bg-green-500 px-10 py-1 rounded text-gray-100 shadow-md">
						Pesanan
					</button>
				</div>
			</div>
		</div>
	);
};
