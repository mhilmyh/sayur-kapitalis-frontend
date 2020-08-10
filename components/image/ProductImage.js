const ProductImage = ({ src = "", name = "", onClick }) => {
	if (!!src) {
		return (
			<img
				className={"w-full bg-contain " + (!!onClick && "cursor-pointer")}
				src={src}
				alt={name}
				onClick={onClick}
			></img>
		);
	}
	return (
		<img
			className={"w-full bg-contain " + (!!onClick && "cursor-pointer")}
			src="/assets/placeholder.png"
			alt="Tidak ada gambar"
			onClick={onClick}
		></img>
	);
};

export default React.memo(ProductImage);
