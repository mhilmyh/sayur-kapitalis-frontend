export default (props) => {
	return (
		<div className="flex py-5">
			<div className="w-8/12 sm:w-8/12 md:w-10/12 mx-2">
				<div className="relative text-gray-600 focus-within:text-gray-400">
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 text-gray-400"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
							<circle cx="10" cy="10" r="7" />
							<line x1="21" y1="21" x2="15" y2="15" />
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
