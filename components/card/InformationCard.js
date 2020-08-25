import { stringToDate } from "../../redux/utils/format";
import InformationDialog from "../dialog/InformationDialog";

const InformationCard = ({ item = {} }) => {
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
		console.log(`Close ! ${!open}`);
	};
	const handleClick = () => {
		setOpen(true);
		console.log(`Open ! ${open}`);
	};
	return (
		<React.Fragment>
			<div
				className="w-full h-full rounded shadow-lg p-2 my-2 flex items-center justify-start cursor-pointer"
				onClick={handleClick}
			>
				<div className="w-1/4 h-full flex justify-center items-center">
					<img
						src={item.image_url}
						className="object-cover w-full h-full rounded"
					></img>
				</div>
				<div className="w-3/4 h-full">
					<article className="prose md:prose-md px-4">
						<h5 className="font-semibold text-sm md:text-lg">{item.title}</h5>
						<h6 className="text-gray-600 text-xs md:text-normal">
							{"Terakhir diperbarui " + stringToDate(item.updated_at)}
						</h6>
					</article>
				</div>
			</div>
			<InformationDialog
				open={open}
				onClose={handleClose}
				item={item}
			></InformationDialog>
		</React.Fragment>
	);
};

export default React.memo(InformationCard);
