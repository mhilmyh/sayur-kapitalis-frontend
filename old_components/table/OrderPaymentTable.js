import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import API from "../../services/axios";
import Cookies from "js-cookie";
import { green } from "@material-ui/core/colors";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

export default function () {
	const classes = useStyles();
	const style = {
		color: green[500],
	};
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [alert, setAlert] = React.useState({
		value: false,
		error: false,
		message: "",
	});

	const convertDate = (input) => {
		if (!input) return null;
		const date = new Date(input);
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	};

	const getOrderPayment = () => {
		if (loading) return;
		setLoading(true);
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		API.get("orderPayment")
			.then((res) => {
				const { data } = res.data;
				setData(data);
			})
			.catch((err) => {
				console.log(err);
				setAlert({
					message: "Gagal mendapatkan list bukti pembayaran",
					error: true,
					value: true,
				});
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const deleteOrderPayment = (id) => {
		if (loading) return;
		setLoading(true);
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		API.delete("orderPayment/" + id)
			.then(() => getOrderPayment())
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	};

	React.useEffect(() => {
		getOrderPayment();
	}, []);
	return (
		<React.Fragment>
			{loading ? (
				<div className="w-full flex justify-center h-full items-center py-5">
					<CircularProgress
						size={40}
						thickness={6}
						disableShrink
						style={style}
					></CircularProgress>
				</div>
			) : (
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="caption table">
						<caption>
							{alert.value
								? alert.message
								: "List bukti pembayaran yang telah berhasil diupload"}
						</caption>
						<TableHead>
							<TableRow>
								<TableCell>Gambar</TableCell>
								<TableCell align="right">Rekening</TableCell>
								<TableCell align="right">Tanggal Dibuat</TableCell>
								<TableCell align="right">Opsi</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((row) => (
								<TableRow key={row.id}>
									<TableCell component="th" scope="row">
										<a
											href={row.image_url ? row.image_url : "#"}
											className={
												row.image_url ? "text-blue-500" : "text-gray-600"
											}
										>
											{row.image_url || "Tidak ada data"}
										</a>
									</TableCell>
									<TableCell align="right">
										{row.account_id || "Tidak ada data"}
									</TableCell>
									<TableCell align="right">
										{convertDate(row.created_at) || "Tidak ada data"}
									</TableCell>
									<TableCell align="right">
										{loading ? (
											<CircularProgress
												size={40}
												thickness={6}
												disableShrink
												style={style}
											></CircularProgress>
										) : (
											<Button
												size="small"
												variant="contained"
												color="secondary"
												onClick={() => deleteOrderPayment(row.id)}
											>
												Hapus
											</Button>
										)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</React.Fragment>
	);
}
