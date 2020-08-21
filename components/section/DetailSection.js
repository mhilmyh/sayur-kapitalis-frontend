const DetailSection = ({ title = "", data = [] }) => {
	return (
		<React.Fragment>
			<div className="w-full flex bg-gray-100 p-2 mt-3 mx-2 justify-between items-center rounded-t">
				<div className="font-bold text-green-500 text-xs uppercase">
					{title}
				</div>
			</div>
			<div className="w-full bg-gray-600 p-2 mx-2 rounded-b">
				{data.map((thing, index) => (
					<div
						key={`xtx-${index}`}
						className="flex justify-between items-center border-b-2 border-gray-500 my-1 py-1"
					>
						<div className="w-1/3 font-semibold text-gray-200 text-xs text-left">
							{thing.name}
						</div>
						{!!thing.value ? (
							<div className="w-1/3 font-semibold text-gray-200 text-xs text-right">
								{thing.value}
							</div>
						) : (
							<div className="w-1/3 font-semibold text-gray-200 text-xs text-right">
								<a target="_blank" href={thing.url}>
									{thing.label}
								</a>
							</div>
						)}
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export default React.memo(DetailSection);
