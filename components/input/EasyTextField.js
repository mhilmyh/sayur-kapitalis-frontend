const EasyTextField = ({
	label = "",
	type = "text",
	name = "name",
	placeholder = "...",
	half = false,
	onChange = () => {},
}) => {
	return (
		<div className={"relative mb-3 px-1 " + (half ? "w-1/2" : "w-full")}>
			<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
				{!!label ? label : "Label"}
			</label>
			<input
				type={type}
				name={name}
				onChange={onChange}
				className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
				placeholder={placeholder}
			></input>
		</div>
	);
};

export default React.memo(EasyTextField);
