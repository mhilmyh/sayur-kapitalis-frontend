import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import API from "../../services/axios";
import Cookies from "js-cookie";
import useGlobal from "../../contexts/global";
import { CircularProgress } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import DialogOrderPayment from "../modal/DialogOrderPayment";

const useRowStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
});

function convertDate(input = null) {
	if (!input) return null;
	const date = new Date(input);
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

function multiply(a, b) {
	if (a == null || a == undefined || b == null || b == undefined) return null;
	return parseInt(a, 10) * parseInt(b, 10);
}

function Row(props) {
	const ctx = useGlobal();
	const style = {
		color: green[500],
	};

	const [dialog, setDialog] = React.useState(false);

	const products = ctx.getProductFromLocal(true) || [];

	const findProductById = (id) => {
		if (Array.isArray(products) && products.length === 0) return null;
		for (let i = 0; i < products.length; i++) {
			if (products[i].id) {
				if (parseInt(products[i].id, 10) === parseInt(id, 10))
					return products[i].name;
			} else {
				return null;
			}
		}
	};

	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const classes = useRowStyles();

	const handlePayment = () => {
		setDialog(true);
	};

	const handleDelete = () => {
		setLoading(true);
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		API.delete("orderHeader/" + row.id)
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
			.finally(() =>
				ctx.getOrderHistoryProduct(() => {
					setOpen(false);
					setLoading(false);
				})
			);
	};

	return (
		<React.Fragment>
			<TableRow className={classes.root} onClick={() => setOpen(!open)}>
				<TableCell>
					<IconButton aria-label="expand row" size="small">
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.order_number || "Tidak ada data"}
				</TableCell>
				<TableCell align="right" className="cursor-pointer">
					{convertDate(row.created_at) || "Tidak ada data"}
				</TableCell>
				<TableCell align="right" className="cursor-pointer">
					{convertDate(row.shipment_date) || "Tidak ada data"}
				</TableCell>
				<TableCell align="right" className="cursor-pointer">
					{row.status ? row.status.name : "Tidak ada data"}
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box margin={1} paddingBottom={5}>
							{Array.isArray(row.order_details) &&
							row.order_details.length > 0 ? (
								<React.Fragment>
									<Table size="small" aria-label="purchases">
										<TableHead>
											<TableRow>
												<TableCell>Produk</TableCell>
												<TableCell align="right">Kuantitas</TableCell>
												<TableCell align="right">Harga</TableCell>
												<TableCell align="right">Total</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{row.order_details.map((historyRow) => (
												<TableRow
													key={
														"history-" +
														historyRow.id +
														"-" +
														historyRow.customer_id
													}
												>
													<TableCell>
														{findProductById(historyRow.product_id) ||
															"Tidak ada data"}
													</TableCell>
													<TableCell align="right">
														{historyRow.quantity || "Tidak ada data"}
													</TableCell>
													<TableCell align="right">
														{parseInt(historyRow.price, 10) || "Tidak ada data"}
													</TableCell>
													<TableCell align="right">
														{multiply(historyRow.quantity, historyRow.price) ||
															"Tidak ada data"}
													</TableCell>
												</TableRow>
											))}
											<TableRow>
												<TableCell>
													<a
														href={"#button-pay-" + row.id}
														className="bg-gray-200 py-2 flex justify-center content-center items-center rounded"
													>
														<span className="capitalize ml-5 font-bold text-gray-600">
															bayar
														</span>
														<svg
															className="svg-icon inline-block mx-5"
															viewBox="0 0 20 20"
														>
															<path
																fill="none"
																d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
	l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
	c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
	c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
	S1.293,9.212,1.729,9.212z"
															></path>
														</svg>
													</a>
												</TableCell>
												<TableCell>
													<DialogOrderPayment
														orderHeaderID={row.id}
														open={dialog}
														onClose={setDialog}
													></DialogOrderPayment>
												</TableCell>
												<TableCell colSpan="2">
													<button
														id={"button-pay-" + row.id}
														className="bg-green-500 px-10 py-2 rounded text-gray-100 shadow-md w-full"
														onClick={handlePayment}
													>
														Pembayaran
													</button>
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</React.Fragment>
							) : (
								<Table className="w-full flex justify-center flex-wrap">
									<caption className="w-full text-center py-3">
										Tidak ada data
									</caption>
									{loading ? (
										<TableBody className="px-10 py-1 flex justify-center">
											<CircularProgress
												size={40}
												thickness={6}
												disableShrink
												style={style}
											></CircularProgress>
										</TableBody>
									) : (
										<button
											className="bg-red-500 px-10 py-1 rounded text-gray-100 shadow-md"
											onClick={handleDelete}
										>
											Hapus
										</button>
									)}
								</Table>
							)}
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export default function OrderHistoryTable(props) {
	const rows = props.data || [];

	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead className="bg-gray-200 text-gray-600 uppercase">
					<TableRow>
						<TableCell />
						<TableCell>No. Order</TableCell>
						<TableCell align="right">Tanggal Pembuatan</TableCell>
						<TableCell align="right">Tanggal Pengiriman</TableCell>
						<TableCell align="right">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => (
						<Row key={"row-" + i + "-" + row.id} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
