const DiscountTag = ({ discount = "", absolute = true, sizing = "xs" }) => {
	if (!!discount) {
		return (
			<div className={`${absolute ? "absolute" : ""} bottom-0 right-0`}>
				<div
					class={`ml-4 text-${sizing} inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full`}
				>
					<div>{`-100%`}</div>
				</div>
			</div>
		);
	}
	return null;
};

export default React.memo(DiscountTag);
