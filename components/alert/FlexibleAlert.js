import Alert from "@material-ui/lab/Alert";

const FlexibleAlert = ({ status }) => {
	if (status.show) {
		return (
			<div className="relative w-full mb-3">
				<Alert severity={status.error ? "error" : "success"}>
					<span>{status.message}</span>
				</Alert>
			</div>
		);
	}
	return null;
};

export default React.memo(FlexibleAlert);
