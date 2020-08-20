import LocalTable from "./LocalTable";
import { useDispatch, useSelector } from "react-redux";
import { ordersFetch, accountsFetch } from "../../redux/actions/creator/order";
import DetailTable from "./DetailTable";
import { convertToRupiah } from "../../redux/utils/format";
import { shipmentFetch } from "../../redux/actions/creator/shipments";

const OrderTable = () => {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.orders);
	React.useEffect(() => {
		// Order
		dispatch(ordersFetch());
		// Account
		dispatch(accountsFetch());
		// Shipment Time
		dispatch(shipmentFetch());
	}, []);
	return (
		<LocalTable
			title="List Pesanan"
			columns={[
				{ title: "No", field: "order_number" },
				{
					title: "Total",
					field: "total_price",
					render: (data) => convertToRupiah(data.total_price),
				},
				{ title: "Status", field: "status.name" },
			]}
			detailPanel={(row) => <DetailTable data={row} />}
			data={orders}
			options={{
				rowStyle: {
					fontSize: "0.8rem",
					fontWeight: 600,
					color: "#718096",
				},
			}}
			onRowClick={(event, rowData, togglePanel) => togglePanel()}
		></LocalTable>
	);
};

export default OrderTable;
