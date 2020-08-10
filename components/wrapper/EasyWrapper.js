const EasyWrapper = ({ title, children }) => {
	return (
		<div className="max-w-xl w-full sm:w-1/2 p-2">
			<div className="rounded bg-green-500 w-full my-2 py-2 px-4 text-gray-100">
				<h3 className="font-semibold">{title}</h3>
			</div>
			<div className="w-full my-2">{children}</div>
		</div>
	);
};

export default React.memo(EasyWrapper);
