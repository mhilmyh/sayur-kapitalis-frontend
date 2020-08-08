import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
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
				Hapus Agen ?
			</DialogTitle>
			<DialogContent dividers={true}>
				<DialogContentText>
					Anda yakin ingin mengkeluar dari daftar pelanggan untuk agen ini ?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} className="text-green-500">
					tutup
				</Button>
				<Button onClick={handleClose} className="text-green-500" autoFocus>
					ya
				</Button>
			</DialogActions>
		</Dialog>
	);
};
