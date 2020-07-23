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
import API from "../../services/axios";
import { green } from "@material-ui/core/colors";
import { CircularProgress } from "@material-ui/core";
import Cookies from "js-cookie";
import useGlobal from "../../contexts/global";
import Alert from "@material-ui/lab/Alert";

export default (props) => {
	const ctx = useGlobal();

	const { onClose, open, initData } = props;
	const style = {
		color: green[500],
	};

	const [tabValue, setTabValue] = React.useState(0);
	const [loading, setLoading] = React.useState(false);
	const [firstName, setFirstName] = React.useState(initData.first_name || "");
	const [lastName, setLastName] = React.useState(initData.last_name || "");
	const [address, setAddress] = React.useState(initData.address || "");
	const [oldPass, setOldPass] = React.useState(null);
	const [newPass, setNewPass] = React.useState(null);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const handleChangeTab = (event, newValue) => {
		ctx.setAlert({
			value: false,
			error: false,
			message: "",
		});
		setTabValue(newValue);
	};

	const handleChangeInputFirstName = (e) => {
		setFirstName(e.target.value);
	};
	const handleChangeInputLastName = (e) => {
		setLastName(e.target.value);
	};
	const handleChangeInputAddress = (e) => {
		setAddress(e.target.value);
	};
	const handleChangeInputOldPass = (e) => {
		setOldPass(e.target.value);
	};
	const handleChangeInputNewPass = (e) => {
		setNewPass(e.target.value);
	};
	const handleClose = () => {
		onClose(false);
	};

	const handleClickUpdate = () => {
		setLoading(true);
		const body = new FormData();
		if (tabValue === 0) {
			if (firstName !== "") body.set("first_name", firstName);
			if (lastName !== "") body.set("last_name", lastName);
			if (address !== "") body.set("address", address);
		} else {
			if (oldPass !== "") body.set("old_password", oldPass);
			if (newPass !== "") body.set("new_password", newPass);
		}
		API.defaults.headers.Authorization = `Bearer ${Cookies.get(
			"access_token"
		)}`;
		API.post("/auth/user", body)
			.then((res) => {
				const { data } = res.data;
				console.log(data);
				Cookies.set("user", data);
				ctx.setUser(data);
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
			.catch((err) => {
				console.log(err);
				const message =
					err.response && err.response.data
						? err.response.data.message
						: "Gagal Perbarui Data";
				ctx.setAlert({
					message: message,
					error: true,
					value: true,
				});
			})
			.finally(() => {
				setLoading(false);
				setFirstName("");
				setLastName("");
				setAddress("");
				setNewPass("");
				setOldPass("");
			});
	};

	React.useEffect(() => {
		ctx.setAlert({
			value: false,
			error: false,
			message: "",
		});
	}, []);

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
				Perbarui
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
						onChange={handleChangeTab}
					>
						<Tab label="Data" />
						<Tab label="Password" />
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
								fullWidth
								onChange={handleChangeInputFirstName}
								placeholder={initData.first_name}
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="input-nama-belakang"
								label="Nama Belakang"
								style={{ margin: 8 }}
								fullWidth
								onChange={handleChangeInputLastName}
								placeholder={initData.last_name}
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="input-alamat"
								label="Alamat"
								style={{ margin: 8 }}
								fullWidth
								onChange={handleChangeInputAddress}
								placeholder={initData.address}
								multiline
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</form>
					</TabPanel>
					<TabPanel value={tabValue} index={1}>
						<form className="w-full" noValidate autoComplete="off">
							<TextField
								id="input-old-pass"
								label="Password Lama"
								type="password"
								style={{ margin: 8 }}
								fullWidth
								onChange={handleChangeInputOldPass}
								required
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="input-new-pass"
								label="Password Baru"
								type="password"
								style={{ margin: 8 }}
								fullWidth
								onChange={handleChangeInputNewPass}
								required
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</form>
					</TabPanel>
				</DialogContent>
			)}

			<DialogActions>
				<Button onClick={handleClose} className="text-green-500">
					tutup
				</Button>
				<Button
					onClick={handleClickUpdate}
					className="text-green-500"
					autoFocus
				>
					simpan
				</Button>
			</DialogActions>
		</Dialog>
	);
};
