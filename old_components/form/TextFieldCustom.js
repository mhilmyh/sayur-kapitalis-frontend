const TextFieldCustom = ({
	label,
	type,
	name,
	onChange,
	placeholder,
	...other
}) => {
	return (
		<div className="relative sm:w-1/2 mb-3 flex-grow">
			<div className="pr-2">
				<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
					{label || "Label"}
				</label>
				<input
					type={type || "text"}
					name={name || "field"}
					onChange={onChange}
					className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
					placeholder={placeholder || "..."}
					{...other}
				></input>
			</div>
		</div>
	);
};

export default React.memo(TextFieldCustom);
