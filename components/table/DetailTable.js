import { stringToDate, convertToRupiah } from "../../redux/utils/format";
import OrderDialog from "../dialog/OrderDialog";

const DetailTable = ({ data }) => {
	const [open, setOpen] = React.useState(false);
	return (
		<React.Fragment>
			<OrderDialog
				order={data}
				open={open}
				onClose={() => setOpen(false)}
			></OrderDialog>
			<div className="w-full flex flex-wrap justify-center items-center">
				<div className="w-full flex bg-gray-200 p-2 my-1 mx-2 justify-between items-center rounded">
					<div className="font-bold text-green-500 text-xs uppercase">
						Tanggal Pembuatan
					</div>
					<div className="font-semibold text-gray-600 text-xs uppercase">
						{stringToDate(data.created_at)}
					</div>
				</div>
				<div className="w-full flex bg-gray-200 p-2 mt-1 mx-2 justify-between items-center rounded-t">
					<div className="font-bold text-green-500 text-xs uppercase">
						Detail Produk
					</div>
					<div className="font-bold bg-green-500 w-2 h-2 rounded-full"></div>
				</div>
				<div className="w-full bg-gray-600 p-2 mx-2 rounded-b">
					{data.order_details.map((order, index) => (
						<div
							key={index}
							className="flex justify-between items-center border-b-2 border-gray-500 my-1 py-1"
						>
							<div className="w-1/3 font-semibold text-gray-200 text-xs text-left">
								{order.product_snapshot.product_name}
							</div>
							<div className="w-1/3 font-semibold text-gray-200 text-xs text-center">
								{convertToRupiah(order.price)}
							</div>
							<div className="w-1/3 text-right">
								<div className="font-bold bg-gray-500 w-2 h-2 rounded-full float-right"></div>
							</div>
						</div>
					))}
				</div>
				<div className="w-full flex bg-gray-200 p-2 my-3 mx-2 justify-between items-center rounded-t">
					<a
						className="font-bold text-green-500 text-xs uppercase flex justify-between items-center"
						href={`#buttonPay-${data.id}`}
					>
						<span>Bayar Sekarang</span>
						<svg className="svg-icon" viewBox="0 0 20 20">
							<path
								fill="none"
								d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
							></path>
						</svg>
					</a>
					<button
						id={`buttonPay-${data.id}`}
						className="px-6 py-2 bg-green-500 text-gray-100 rounded shadow-md"
						onClick={() => setOpen(true)}
					>
						Bayar
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default React.memo(DetailTable);
