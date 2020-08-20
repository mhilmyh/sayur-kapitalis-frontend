import LocalTable from "./LocalTable";
import { useDispatch, useSelector } from "react-redux";
import { paymentsFetch } from "../../redux/actions/creator/payment";

const PaymentTable = () => {
	const dispatch = useDispatch();
	const payments = useSelector((state) => state.payments);
	React.useEffect(() => {
		dispatch(paymentsFetch());
	}, []);
	return (
		<LocalTable
			title="List Pembayaran"
			columns={[
				{ title: "No", field: "order_number" },
				{
					title: "Total",
					field: "total_price",
					render: (data) => convertToRupiah(data.total_price),
				},
				{ title: "Status", field: "status.name" },
			]}
			data={payments}
			options={{
				rowStyle: {
					fontSize: "0.8rem",
					fontWeight: 600,
					color: "#718096",
				},
			}}
		></LocalTable>
	);
};

export default React.memo(PaymentTable);
