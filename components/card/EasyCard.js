import { Paper } from "@material-ui/core";
const EasyCard = ({ children }) => {
	return (
		<Paper elevation={4}>
			<div className="p-4">{children}</div>
		</Paper>
	);
};

export default EasyCard;
