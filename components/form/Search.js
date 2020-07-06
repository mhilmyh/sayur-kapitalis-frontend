export default (props) => {
	return (
		<div className="flex py-5">
			<div className="w-8/12 sm:w-8/12 md:w-10/12 mx-2">
				<div className="relative text-gray-600 focus-within:text-gray-400">
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1"
							viewBox="0 0 24 24"
							className="w-6 h-6"
						>
							<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</span>
					<input
						className="rounded text-sm pl-10 bg-white focus:text-gray-900 py-3 px-3 w-full shadow-lg"
						placeholder={props.placeholder}
					></input>
				</div>
			</div>
			<div className="w-4/12 sm:w-4/12 md:w-2/12 mx-2">
				<button
					className="rounded bg-green-500 hover:bg-green-700 text-white h-full px-3 w-full shadow-lg text-center"
					type="button"
				>
					<span className="font-semibold">{props.btnText || "Submit"}</span>
				</button>
			</div>
		</div>
	);
};
