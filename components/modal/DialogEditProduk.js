import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const DialogEditProduk = (props) => {
	const { open, setOpen, loading } = props;
	const [data, setData] = React.useState(
		props.data || {
			order_number: 0,
			shipment_date: null,
			created_at: null,
			updated_at: null,
			total_price: null,
			status: {
				id: null,
				name: null,
			},
			order_detail: [],
		}
	);
	const theme = useTheme();
	const style = {
		color: green[500],
	};
	const convertDate = (input) => {
		const date = new Date(input);
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	};
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Dialog open={open} fullScreen={fullScreen} disableBackdropClick={true}>
			<DialogTitle className="bg-green-500 text-gray-200">
				Edit Pesanan
			</DialogTitle>
			<DialogContent>
				{loading ? (
					<div className="w-full h-full flex justify-center items-center">
						<CircularProgress
							size={40}
							thickness={6}
							disableShrink
							style={style}
						></CircularProgress>
					</div>
				) : (
					<table className="table-fixed w-full">
						<tbody>
							<tr className="border text-sm">
								<td className="w-1/2 font-bold text-gray-600 p-2">
									Nomor Order
								</td>
								<td className="w-1/2 font-semibold text-gray-600 p-2">
									{data.order_number}
								</td>
							</tr>
							<tr className="border text-sm">
								<td className="w-1/2 font-bold text-gray-600 p-2">Status</td>
								<td className="w-1/2 font-semibold text-gray-600 p-2">
									{data.status ? data.status.name : "Tidak ada data"}
								</td>
							</tr>
							<tr className="border text-sm">
								<td className="w-1/2 font-bold text-gray-600 p-2">
									Tanggal Dibuat
								</td>
								<td className="w-1/2 font-semibold text-gray-600 p-2">
									{convertDate(data.created_at)}
								</td>
							</tr>
							<tr className="border text-sm">
								<td className="w-1/2 font-bold text-gray-600 p-2">
									Tanggal Pengiriman
								</td>
								<td className="w-1/2 font-semibold text-gray-600 p-2">
									{convertDate(data.shipment_date)}
								</td>
							</tr>
						</tbody>
					</table>
				)}
			</DialogContent>
			<DialogActions>
				<Button
					autoFocus
					onClick={() => setOpen(false)}
					variant="contained"
					size="large"
					className="bg-gray-500 text-gray-100"
					fullWidth={true}
				>
					Tutup
				</Button>
				<Button
					autoFocus
					onClick={() => setOpen(false)}
					variant="contained"
					size="large"
					className="bg-green-500 text-gray-100"
					fullWidth={true}
				>
					Edit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogEditProduk;
