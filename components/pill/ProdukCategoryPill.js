export default (props) => {
	const [selected, setSelected] = React.useState(false);
	const handleClick = () => {
		setSelected(!selected);
	};
	return (
		<button
			onClick={() => handleClick()}
			className={
				"px-3 py-1 my-1 mr-2 rounded inline-block text-sm font-semibold " +
				(selected ? "bg-green-500 text-gray-100" : "bg-gray-200 text-gray-700")
			}
		>
			{String(props.data).toLowerCase().split(" ").join("-")}
		</button>
	);
};
