const EasyButton = ({ text = "", onClick = () => {} }) => {
	return (
		<div className="mt-6 w-full px-3">
			<button
				className="bg-green-500 text-gray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow-lg mb-1 w-full"
				onClick={onClick}
				type="button"
			>
				{text}
			</button>
		</div>
	);
};

export default React.memo(EasyButton);
