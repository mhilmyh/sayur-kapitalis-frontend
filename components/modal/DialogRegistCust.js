import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export default (props) => {
	const { onClose, open } = props;

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const handleClose = () => {
		onClose(false);
	};

	return (
		<Dialog onClose={handleClose} open={open} fullScreen={fullScreen}>
			<DialogTitle
				id="alert-dialog-title"
				className="bg-green-500 text-gray-200"
			>
				Pelanggan Baru
			</DialogTitle>
			<DialogContent dividers={true}>
				<form className="w-full" noValidate autoComplete="off">
					<TextField
						id="input-nama-depan"
						label="Nama Depan"
						style={{ margin: 8 }}
						placeholder="Ani"
						fullWidth
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
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="input-pass"
						label="Password"
						style={{ margin: 8 }}
						placeholder="XXX"
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} className="text-green-500">
					tutup
				</Button>
				<Button onClick={handleClose} className="text-green-500" autoFocus>
					simpan
				</Button>
			</DialogActions>
		</Dialog>
	);
};
