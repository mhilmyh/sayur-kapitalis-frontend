import Alert from "@material-ui/lab/Alert";

const FlexibleAlert = ({ show = false, error = false, message = "" }) => {
	if (show) {
		return (
			<div className="my-2 w-full">
				<Alert severity={error ? "error" : "success"}>{message}</Alert>
			</div>
		);
	}
	return null;
};

export default React.memo(FlexibleAlert);
