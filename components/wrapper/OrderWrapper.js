import OrderPesananSection from "../section/OrderPesananSection";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import FABPesanan from "../button/FABPesanan";
import OrderTableSection from "../section/OrderTableSection";
export default () => {
	const [openPesanan, setOpenPesanan] = React.useState(false);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const handleClosePesanan = () => {
		setOpenPesanan(false);
	};

	const handleClickPesanan = () => {
		setOpenPesanan(true);
	};
	return (
		<div className="p-5 w-full">
			<Dialog
				fullScreen={fullScreen}
				open={openPesanan}
				disableBackdropClick={true}
			>
				<DialogContent className="p-2">
					<OrderPesananSection></OrderPesananSection>
				</DialogContent>
				<DialogActions>
					<Button
						autoFocus
						onClick={handleClosePesanan}
						variant="contained"
						size="large"
						className="bg-gray-500 text-gray-100"
						fullWidth={true}
					>
						Tutup
					</Button>
				</DialogActions>
			</Dialog>
			<OrderTableSection></OrderTableSection>
			<FABPesanan onClick={handleClickPesanan}></FABPesanan>
		</div>
	);
};
