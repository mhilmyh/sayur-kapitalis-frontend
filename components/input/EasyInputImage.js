const EasyInputImage = ({ title = "", desc = "", onChange = () => {} }) => {
	const [img, setImg] = React.useState("");

	const handleChange = (event) => {
		const file = event.target.files[0];
		if (!!file) {
			const reader = new FileReader();
			reader.onload = (item) => setImg(item.target.result);
			reader.readAsDataURL(file);
		}
		onChange(file);
	};
	return (
		<div className="px-1 w-full my-4">
			<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
				{!!title ? title : "Judul"}
			</label>
			<div className="w-full flex flex-wrap justify-center items-center relative border border-dashed border-gray-400 rounded h-56">
				<input
					type="file"
					accept="image/*"
					className="cursor-pointer absolute top-0 block opacity-0 py-12 w-full h-full z-10 rounded"
					onChange={(e) => handleChange(e)}
				></input>
				{!!img ? (
					<img
						src={img}
						className="object-contain h-48 text-center w-full"
					></img>
				) : (
					<article className="prose lg:prose-lg text-center px-4">
						<p className="text-xs">{desc ? desc : "Pilih Gambar"}</p>
					</article>
				)}
			</div>
		</div>
	);
};

export default React.memo(EasyInputImage);
