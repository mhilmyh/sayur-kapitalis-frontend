const ProductImage = ({ src = "", name = "", onClick }) => {
	if (!!src) {
		return (
			<div className="w-full justify-center flex">
				<img
					className={
						"w-full max-w-sm bg-contain " + (!!onClick && "cursor-pointer")
					}
					src={src}
					alt={name}
					onClick={onClick}
				></img>
			</div>
		);
	}
	return (
		<div className="w-full justify-center flex">
			<img
				className={
					"w-full max-w-sm bg-contain " + (!!onClick && "cursor-pointer")
				}
				src="/assets/placeholder.png"
				alt="Tidak ada gambar"
				onClick={onClick}
			></img>
		</div>
	);
};

export default React.memo(ProductImage);
