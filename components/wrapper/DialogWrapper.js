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
	const [selected, setSelected] = React.useState(false);
	const handleClickYes = (event) => {
		onClickYes(event);
		setSelected(true);
		setTimeout(() => setSelected(false), 2000);
	};
	return (
		<Dialog
			open={open}
			fullScreen={fullScreen}
			maxWidth="sm"
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
				{selected ? (
					<div className="bg-gray-200 text-gray-600 rounded shadow-md px-4 py-2 w-full my-2 flex justify-center items-center">
						<svg className="svg-icon" viewBox="0 0 20 20">
							<path
								fill="none"
								d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
							></path>
						</svg>
					</div>
				) : (
					<button
						className="w-1/2 bg-green-500 text-white p-2 rounded shadow-md font-semibold"
						onClick={handleClickYes}
					>
						{textYes ? textYes : "Lanjutkan"}
					</button>
				)}
			</DialogActions>
		</Dialog>
	);
};

export default React.memo(DialogWrapper);
