import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
const CenterWrapper = () => {
	return (
		<div className="w-full h-full flex justify-center items-center my-2">
			<CircularProgress></CircularProgress>
		</div>
	);
};

const FullWidthWrapper = ({ children }) => {
	return <div className="w-screen h-screen">{children}</div>;
};

const CircularLoad = ({ fullWidth = false }) => {
	if (fullWidth) {
		return (
			<FullWidthWrapper>
				<CenterWrapper></CenterWrapper>
			</FullWidthWrapper>
		);
	}

	return <CenterWrapper></CenterWrapper>;
};

export default React.memo(CircularLoad);
