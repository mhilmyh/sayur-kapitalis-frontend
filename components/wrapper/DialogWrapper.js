import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const DialogWrapper = ({
	title = "",
	open = false,
	onClose = () => {},
	children,
	textYes = "",
	textNo = "",
	onClickYes = () => {},
}) => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
	const handleClickYes = (event) => {
		onClickYes(event);
	};
	return (
		<Dialog
			open={open}
			fullScreen={fullScreen}
			maxWidth="md"
			fullWidth={true}
			disableBackdropClick={true}
		>
			{!!title === true && (
				<DialogTitle className="bg-green-500 text-gray-100">
					{title}
				</DialogTitle>
			)}
			<DialogContent className="p-0" dividers={true}>
				{children}
			</DialogContent>
			<DialogActions>
				<button
					className="w-1/2 bg-gray-500 text-white p-2 rounded shadow-md font-semibold"
					onClick={onClose}
				>
					{textNo ? textNo : "Tutup"}
				</button>

				<button
					className="w-1/2 bg-green-500 text-white p-2 rounded shadow-md font-semibold"
					onClick={handleClickYes}
				>
					{textYes ? textYes : "Lanjutkan"}
				</button>
			</DialogActions>
		</Dialog>
	);
};

export default React.memo(DialogWrapper);
