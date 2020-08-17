import Alert from "@material-ui/lab/Alert";
import { useDispatch } from "react-redux";
import { alertReset } from "../../redux/actions/creator/alert";

const FlexibleAlert = ({ show = false, error = false, message = "" }) => {
	const dispatch = useDispatch();
	if (show) {
		return (
			<div className="my-2 w-full">
				<Alert
					severity={error ? "error" : "success"}
					onClose={() => dispatch(alertReset())}
				>
					{message}
				</Alert>
			</div>
		);
	}
	return null;
};

export default React.memo(FlexibleAlert);
