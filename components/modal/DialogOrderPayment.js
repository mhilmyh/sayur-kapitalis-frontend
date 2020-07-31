import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { green } from "@material-ui/core/colors";
import { useTheme } from "@material-ui/core/styles";
import {
	FormControl,
	InputLabel,
	FormHelperText,
	Select,
	MenuItem,
	Typography,
	CircularProgress,
	Tabs,
	Tab,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import useGlobal from "../../contexts/global";
import Cookies from "js-cookie";
import API from "../../services/axios";
import TabPanel from "../tabs/TabPanel";
import OrderPaymentTable from "../table/OrderPaymentTable";

export default (props) => {
	const ctx = useGlobal();
	const { onClose, open, orderHeaderID } = props;
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const style = {
		color: green[500],
	};

	const [loading, setLoading] = React.useState(false);
	const [alert, setAlert] = React.useState({
		value: false,
		error: false,
		message: "",
	});
	const [accountID, setAccountID] = React.useState(-1);
	const handleChangeSelectAccount = (e) => {
		setAccountID(e.target.value);
	};
	const [uploadedImage, setUploadedImage] = React.useState(null);
	const [base64Image, setBase64Image] = React.useState(null);
	const toBase64 = (file) =>
		new Promise((resolve, reject) => {
			if (typeof FileReader === "function") {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => resolve(reader.result);
				reader.onerror = (error) => reject(error);
			} else {
				console.error("Tidak browser mendukung convert file ke base64");
			}
		});
	const hiddenInputImage = React.useRef(null);
	const handleClickImage = () => {
		hiddenInputImage.current.click();
	};
	const handleChangeImage = (event) => {
		const file = event.target.files[0];
		setUploadedImage(file);
		toBase64(file)
			.then((res) => setBase64Image(res))
			.catch((err) => console.log(err));
	};

	const handleBayar = () => {
		if (loading) return;
		setLoading(true);
		setAlert({ value: false });
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		const body = new FormData();
		const now = new Date();
		body.set("order_header_id", orderHeaderID);
		body.set(
			"date",
			`${now.getFullYear()}-${
				now.getMonth() + 1
			}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
		);
		body.set("account_id", accountID);
		body.append("image", uploadedImage);
		API.post("orderPayment", body, {
			headers: {
				"content-type": "multipart/form-data", // do not forget this
			},
		})
			.then((res) => {
				const message =
					res.data && res.data.message
						? res.data.message
						: "Berhasil membayar produk";
				setAlert({
					message: message,
					error: false,
					value: true,
				});
			})
			.catch((err) => {
				console.log(err);
				const message =
					err.response && err.response.data
						? err.response.data.message
						: "Gagal membayar produk";
				setAlert({
					message: message,
					error: true,
					value: true,
				});
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const [tabValue, setTabValue] = React.useState(0);
	const handleChangeTab = (event, newVal) => {
		setAlert({ value: false });
		setTabValue(newVal);
	};

	const handleClose = () => {
		setUploadedImage(null);
		setBase64Image(null);
		setAlert({ value: false });
		setAccountID(-1);
		onClose(false);
	};

	return (
		<div>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				disableBackdropClick={true}
			>
				<DialogTitle id="responsive-dialog-title">
					Pembayaran Pesanan
				</DialogTitle>
				<DialogContent>
					<Tabs
						value={tabValue}
						onChange={handleChangeTab}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
					>
						<Tab label="Upload"></Tab>
						<Tab label="List Bukti"></Tab>
					</Tabs>
					<TabPanel value={tabValue} index={0}>
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
							<React.Fragment>
								{alert.value === true && (
									<div className="w-full flex justify-center pb-5">
										<div className="relative w-full mb-3">
											<Alert severity={alert.error ? "error" : "success"}>
												<span>{alert.message}</span>
											</Alert>
										</div>
									</div>
								)}
								<DialogContentText>
									Lakukan pembayaran ke akun rekening yang ada di bawah ini.
									Lalu upload bukti pembayarannya.
								</DialogContentText>
								<FormControl className="w-full">
									<InputLabel htmlFor="select-rekening">
										Rekening Bank
									</InputLabel>
									<Select
										value={accountID}
										onChange={handleChangeSelectAccount}
									>
										<MenuItem value={-1}>Tidak ada</MenuItem>
										{Array.isArray(ctx.accountList) &&
										ctx.accountList.length > 0 ? (
											ctx.accountList.map((item, i) => (
												<MenuItem
													value={item.id}
													key={"menu-" + item.id}
												>{`${item.bank_name} ${item.number} (${item.owner_name})`}</MenuItem>
											))
										) : (
											<MenuItem value={-1}>Tidak ada</MenuItem>
										)}
									</Select>
									<FormHelperText>
										Pilih rekening yang akan ditransfer
									</FormHelperText>
								</FormControl>
								<FormControl>
									<div className="w-full flex justify-start pt-5">
										<Typography
											variant="subtitle1"
											gutterBottom
											className="opacity-50"
										>
											Bukti Pembayaran
										</Typography>
									</div>
									<div className="w-full container pb-5 pt-1 flex justify-center">
										<div
											className="w-full h-48 rounded border-dashed border-2 border-gray-300 flex justify-center items-center cursor-pointer"
											onClick={handleClickImage}
										>
											{base64Image === null ? (
												<img
													src="/assets/placeholder.png"
													className="object-cover rounded h-16 w-16 shadow-lg"
												></img>
											) : (
												<img
													src={base64Image}
													className="object-contain w-full h-full"
												></img>
											)}
											<input
												ref={hiddenInputImage}
												onChange={handleChangeImage}
												type="file"
												accept="image/*"
												style={{ display: "none" }}
											></input>
										</div>
									</div>
									<FormHelperText id="my-helper-text">
										Upload bukti pembayaran mu di sini dan pastikan rekening yg
										dibayarkan sesuai dengan yang dipilih.
									</FormHelperText>
								</FormControl>
							</React.Fragment>
						)}
					</TabPanel>
					<TabPanel value={tabValue} index={1} className="h-full">
						<OrderPaymentTable></OrderPaymentTable>
					</TabPanel>
				</DialogContent>
				<DialogActions>
					<Button
						autoFocus
						onClick={handleClose}
						className="text-green-500"
						variant="contained"
						size="large"
						className="bg-gray-500 text-gray-100"
						fullWidth={true}
					>
						Tutup
					</Button>
					<Button
						onClick={handleBayar}
						className="text-green-500"
						autoFocus
						variant="contained"
						size="large"
						className="bg-green-500 text-gray-100"
						fullWidth={true}
					>
						Bayar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
