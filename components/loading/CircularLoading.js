import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";

const CircularLoading = () => {
	const style = {
		color: green[500],
	};
	return (
		<div className="text-center w-full mt-1 mb-2">
			<CircularProgress
				size={40}
				thickness={5}
				disableShrink
				style={style}
			></CircularProgress>
		</div>
	);
};

export default React.memo(CircularLoading);
