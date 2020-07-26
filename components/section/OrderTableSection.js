import useGlobal from "../../contexts/global";
import { CircularProgress } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import OrderHistoryTable from "../table/OrderHistoryTable";
export default () => {
	const ctx = useGlobal();
	const style = {
		color: green[500],
	};
	const [loading, setLoading] = React.useState(false);
	React.useEffect(() => {
		setLoading(true);
		ctx.getListAccount();
		ctx.getOrderHistoryProduct(() => setLoading(false));
	}, []);
	return (
		<div className="flex flex-wrap shadow-lg rounded py-2 my-5">
			<div className="w-full px-5 py-3">
				<h2 className="text-gray-700 font-semibold text-2xl">Histori</h2>
				<p className="text-gray-500 text-xs capitalize">
					Daftar pesanan yang sudah dipesan
				</p>
			</div>
			<hr className="mx-5 w-full"></hr>
			<div className="w-full px-5 py-3 overflow-x-auto">
				{loading ? (
					<div className="w-full flex justify-center">
						<CircularProgress
							size={40}
							thickness={6}
							disableShrink
							style={style}
						></CircularProgress>
					</div>
				) : (
					<OrderHistoryTable data={ctx.listOrderHistory}></OrderHistoryTable>
				)}
			</div>
		</div>
	);
};
