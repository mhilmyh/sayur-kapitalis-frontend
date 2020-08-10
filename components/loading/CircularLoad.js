import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
const CircularLoad = () => {
	return (
		<div className="w-full h-full flex justify-center items-center my-2">
			<CircularProgress></CircularProgress>
		</div>
	);
};

export default React.memo(CircularLoad);
