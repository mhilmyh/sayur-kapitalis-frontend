import { useGlobal } from "../../contexts/global";
export default (props) => {
	const { setSearch } = useGlobal();
	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	return (
		<div className="flex py-5 justify-center">
			<div className="w-11/12 mx-2">
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
						onChange={(e) => handleChange(e)}
					></input>
				</div>
			</div>
		</div>
	);
};
