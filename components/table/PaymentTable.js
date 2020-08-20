import LocalTable from "./LocalTable";
import { useDispatch, useSelector } from "react-redux";
import { paymentsFetch } from "../../redux/actions/creator/order";
import { convertToRupiah, stringToDate } from "../../redux/utils/format";

const PaymentTable = ({ payments = [] }) => {
	return (
		<LocalTable
			title="List Pembayaran"
			columns={[
				{
					title: "Bukti Pembayaran",
					field: "image_url",
					render: (data) => (
						<a href={data.image_url} target="_blank">
							<img src={data.image_url} className="object-contain"></img>
						</a>
					),
				},
				{
					title: "Tanggal Terbuat",
					field: "created_at",
					render: (data) => stringToDate(data.created_at),
				},
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
