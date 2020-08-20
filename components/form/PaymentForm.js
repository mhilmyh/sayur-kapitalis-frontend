import EasySelection from "../input/EasySelection";
import TextField from "@material-ui/core/TextField";
import EasyInputImage from "../input/EasyInputImage";
const PaymentForm = () => {
	const [accountID, setAccountID] = React.useState(-1);
	const [shipmentDateID, setShipmentDateID] = React.useState(-1);
	const [shipmentTimeID, setShipmentTimeID] = React.useState(-1);
	const [img, setImg] = React.useState(null);
	return (
		<div className="w-full flex flex-wrap justify-center items-center">
			{/* Rekening */}
			<div className="py-2 w-full">
				<EasySelection
					label="Rekening"
					value={accountID}
					onChange={(e) => setAccountID(e.target.value)}
					data={[{ id: 1, name: "Wow" }]}
					val="id"
					printFunc={(item) => `${item.name}`}
				></EasySelection>
			</div>
			{/* Tanggal Pengiriman */}
			<div className="py-2 w-full">
				<TextField
					label="Tanggal Kirim"
					type="date"
					fullWidth={true}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
			{/* Waktu Pengiriman */}
			<div className="py-2 w-full">
				<EasySelection
					label="Jam Kirim"
					value={accountID}
					onChange={(e) => setAccountID(e.target.value)}
					data={[{ id: 1, name: "Wow" }]}
					val="id"
					printFunc={(item) => `${item.name}`}
				></EasySelection>
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
