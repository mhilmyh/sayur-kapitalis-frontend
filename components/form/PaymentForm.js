import EasySelection from "../input/EasySelection";
import TextField from "@material-ui/core/TextField";
import EasyInputImage from "../input/EasyInputImage";
import { useSelector } from "react-redux";
import FlexibleAlert from "../alert/FlexibleAlert";
import { dateNow } from "../../redux/utils/format";
const PaymentForm = ({
	paidDate,
	accountID,
	shipmentDate,
	shipmentTimeID,
	setPaidDate = () => {},
	setAccountID = () => {},
	setShipmentDate = () => {},
	setShipmentTimeID = () => {},
	setImg = () => {},
}) => {
	const alert = useSelector((state) => state.alert);
	const accounts = useSelector((state) => state.accounts);
	const shipmentTimes = useSelector((state) => state.shipmentTimes);

	return (
		<div className="w-full flex flex-wrap justify-center items-center p-6">
			{/* Rekening */}
			<div className="pb-2 w-full">
				<FlexibleAlert {...alert}></FlexibleAlert>
			</div>
			<div className="py-2 w-full">
				<EasySelection
					label="Rekening"
					value={accountID}
					onChange={(e) => setAccountID(e.target.value)}
					data={accounts}
					val="id"
					printFunc={(item) =>
						`[${item.bank_name}] ${item.number} - ${item.owner_name}`
					}
				></EasySelection>
			</div>
			{/* Tanggal Pengiriman */}
			<div className="py-2 w-full">
				<TextField
					label="Tanggal Kirim"
					type="date"
					value={shipmentDate}
					onChange={(e) => setShipmentDate(e.target.value)}
					fullWidth={true}
					InputLabelProps={{
						shrink: true,
					}}
					inputProps={{
						min: dateNow(),
					}}
				/>
			</div>
			{/* Waktu Pengiriman */}
			<div className="py-2 w-full">
				<EasySelection
					label="Jam Kirim"
					value={shipmentTimeID}
					onChange={(e) => setShipmentTimeID(e.target.value)}
					data={shipmentTimes}
					val="id"
					printFunc={(item) =>
						`(${item.name}) ${item.start_time} - ${item.end_time}`
					}
				></EasySelection>
			</div>
			{/* Tanggal Pembayaran */}
			<div className="py-2 w-full">
				<TextField
					label="Tanggal Pembayaran"
					type="datetime-local"
					value={paidDate}
					onChange={(e) => setPaidDate(e.target.value)}
					fullWidth={true}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
			{/* Upload Bukti Pembayaran */}
			<div className="py-2 w-full">
				<EasyInputImage
					title="Gambar"
					desc="Bukti Pembayaran"
					onChange={(v) => setImg(v)}
				></EasyInputImage>
			</div>
		</div>
	);
};

export default React.memo(PaymentForm);
