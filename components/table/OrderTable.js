import LocalTable from "./LocalTable";
import { useDispatch, useSelector } from "react-redux";
import { ordersFetch } from "../../redux/actions/creator/order";
import DetailTable from "./DetailTable";
import { convertToRupiah } from "../../redux/utils/format";

const OrderTable = (props) => {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.orders);
	React.useEffect(() => {
		dispatch(ordersFetch());
	}, []);
	return (
		<LocalTable
			title="Order"
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
					fontSize: "0.75rem",
					padding: 0,
					margin: 0,
					fontWeight: 500,
					color: "#718096",
				},
			}}
			onRowClick={(event, rowData, togglePanel) => togglePanel()}
		></LocalTable>
	);
};

export default OrderTable;
