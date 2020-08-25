import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
} from "@material-ui/core";
import { stringToDate } from "../../redux/utils/format";

const InformationDialog = ({ open = false, onClose = () => {}, item = {} }) => {
	return (
		<Dialog open={open} onClose={onClose} fullScreen={true} fullWidth={true}>
			<DialogContent className="p-0">
				<div className="w-full flex flex-wrap justify-center items-center">
					<div className="w-full flex justify-center pt-4">
						<img
							className="w-full md:w-1/3 bg-contain mb-4"
							src={item.image_url}
						></img>
					</div>
					<article className="prose md:prose-md px-4 w-full">
						<h3>{item.title}</h3>
						<p>{item.body}</p>
						<div className="w-full flex justify-between">
							<div className="text-xs">
								{"Tanggal dibuat " + stringToDate(item.created_at)}
							</div>
							<div className="text-xs">
								{"Terakhir diubah " + stringToDate(item.updated_at)}
							</div>
						</div>
					</article>
				</div>
			</DialogContent>
			<DialogActions disableSpacing={true}>
				<div className="w-full p-0 m-0 flex justify-center items-center">
					<button
						className="w-full p-4 bg-green-500 rounded shadow-lg font-semibold text-gray-100 text-lg max-w-md"
						onClick={() => onClose()}
					>
						Tutup
					</button>
				</div>
			</DialogActions>
		</Dialog>
	);
};

export default React.memo(InformationDialog);
