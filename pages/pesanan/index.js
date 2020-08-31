import DefaultLayout from "../../layouts/default";
import OrderTable from "../../components/table/OrderTable";
import { alertReset } from "../../redux/actions/creator/alert";
import { useDispatch } from "react-redux";
const PesananPage = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(alertReset());
	}, []);
	return (
		<div className="w-full p-8">
			<div className="rounded bg-green-500 w-full my-2 py-2 px-4 text-gray-100">
				<h3 className="font-semibold">Histori Pesanan</h3>
			</div>
			<OrderTable></OrderTable>
		</div>
	);
};

PesananPage.Layout = DefaultLayout;

export default PesananPage;
