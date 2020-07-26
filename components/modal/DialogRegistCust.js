import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../tabs/TabPanel";
import Tabs from "@material-ui/core/Tabs";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import useGlobal from "../../contexts/global";
import API from "../../services/axios";
import { green } from "@material-ui/core/colors";
import Alert from "@material-ui/lab/Alert";
import Cookies from "js-cookie";

export default (props) => {
	const ctx = useGlobal();
	const { onClose, open } = props;
	const style = {
		color: green[500],
	};

	const [loading, setLoading] = React.useState(false);
	const [tabValue, setTabValue] = React.useState(0);
	const [user, setUser] = React.useState({
		first_name: "",
		last_name: "",
		phone_number: "",
		password: "",
		email: "",
		password_confirm: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prev) => ({ ...prev, [name]: value }));
	};

	const handleClickNewCustomer = () => {
		setLoading(true);
		ctx.setAlert({ value: false });
		console.log(user);
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		API.post("/auth/register/fromAgent", { ...user })
			.then((res) => {
				const { data } = res.data;
				const message =
					res.data && res.data.message
						? res.data.message
						: "Berhasil Perbarui Data";
				ctx.setAlert({
					message: message,
					error: false,
					value: true,
				});
			})
			.then(() => ctx.checkLogin(false))
			.catch((err) => {
				console.log(err.response);
				ctx.setAlert({
					value: true,
					error: true,
					message: err.response.data.message,
					listErr: err.response.data.errors,
				});
			})
			.finally(() => setLoading(false));
	};

	const handleClickOldCustomer = () => {};

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const handleClose = () => {
		onClose(false);
	};

	const handleChangeTab = (event, newValue) => {
		ctx.setAlert({
			value: false,
			error: false,
			message: "",
		});
		setTabValue(newValue);
	};

	return (
		<Dialog
			onClose={handleClose}
			open={open}
			fullScreen={fullScreen}
			disableBackdropClick={true}
		>
			<DialogTitle
				id="alert-dialog-title"
				className="bg-green-500 text-gray-200"
			>
				Daftarkan Pelanggan
			</DialogTitle>
			{loading ? (
				<DialogContent dividers={true}>
					<div className="w-full h-full flex justify-center items-center content-center">
						<CircularProgress
							size={40}
							thickness={6}
							disableShrink
							style={style}
						></CircularProgress>
					</div>
				</DialogContent>
			) : (
				<DialogContent dividers={true}>
					<Tabs
						value={tabValue}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth"
						onChange={handleChangeTab}
					>
						<Tab label="Akun Baru" />
						<Tab label="Akun Sudah Ada" />
					</Tabs>
					{ctx.alert.value && (
						<div className="relative w-full mb-3">
							<Alert severity={ctx.alert.error ? "error" : "success"}>
								<span>{ctx.alert.message}</span>
							</Alert>
						</div>
					)}
					<TabPanel value={tabValue} index={0}>
						<form className="w-full" noValidate autoComplete="off">
							<TextField
								id="input-nama-depan"
								label="Nama Depan"
								style={{ margin: 8 }}
								placeholder="Ani"
								fullWidth
								onChange={(e) => handleChange(e)}
								name="first_name"
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="input-nama-belakang"
								label="Nama Belakang"
								style={{ margin: 8 }}
								placeholder="Budi"
								fullWidth
								onChange={(e) => handleChange(e)}
								name="last_name"
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="input-nomor-telp"
								label="Nomor Telpon"
								style={{ margin: 8 }}
								placeholder="08123xxxxxxxx"
								fullWidth
								onChange={(e) => handleChange(e)}
								name="phone_number"
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="input-alamat"
								label="Alamat"
								style={{ margin: 8 }}
								placeholder="Jalan. XXX"
								fullWidth
								onChange={(e) => handleChange(e)}
								name="address"
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="input-email"
								label="Email"
								style={{ margin: 8 }}
								placeholder="mail@mail.com"
								fullWidth
								onChange={(e) => handleChange(e)}
								name="email"
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="input-pass"
								label="Password"
								type="password"
								style={{ margin: 8 }}
								placeholder="XXX"
								fullWidth
								onChange={(e) => handleChange(e)}
								name="password"
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</form>
					</TabPanel>
					<TabPanel value={tabValue} index={1}>
						Belum selesai
					</TabPanel>
				</DialogContent>
			)}
			<DialogActions>
				<Button onClick={handleClose} className="text-green-500">
					tutup
				</Button>
				<Button
					onClick={() => {
						tabValue === 0
							? handleClickNewCustomer()
							: handleClickOldCustomer();
					}}
					className="text-green-500"
					autoFocus
				>
					simpan
				</Button>
			</DialogActions>
		</Dialog>
	);
};
