import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

function PaymentDialog({
	open = false,
	setOpen = () => {},
	onClick = () => {},
}) {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const [value, setValue] = React.useState(2);
	const handleChangeTab = (event, newValue) => {
		setValue(newValue);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleClick = () => {};

	return (
		<div>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				disableBackdropClick={true}
			>
				<DialogTitle>Pembayaran</DialogTitle>
				<DialogContent>
					<Tabs
						value={value}
						indicatorColor="primary"
						textColor="primary"
						onChange={handleChange}
						aria-label="disabled tabs example"
					>
						<Tab label="Active" />
						<Tab label="Disabled" disabled />
						<Tab label="Active" />
					</Tabs>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
						Tutup
					</Button>
					<Button onClick={handleClick} color="primary" autoFocus>
						Bayar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default React.memo(PaymentDialog);
