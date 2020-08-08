const ImageWrapper = (props) => {
	if (props.src) {
		return (
			<div className="flex flex-grow justify-center items-center my-3">
				<img src={props.src} className="rounded object-contain h-48 w-48"></img>
			</div>
		);
	}
	return null;
};

export default React.memo(ImageWrapper);
