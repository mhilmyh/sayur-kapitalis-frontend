export default React.memo((props) => {
	const [edit, setEdit] = React.useState(false);
	const [data, setData] = React.useState(props.data || {});
	const handleEdit = () => {
		setEdit(!edit);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prev) => ({ ...prev, [name]: value }));
	};
	const convertDate = (date) => {
		const d = new Date(date);
		return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
	};
	const label = (element) => {
		switch (element) {
			case "id":
				return "Nomor Pelanggan";
			case "user_id":
				return "Nomor Pengguna";
			case "first_name":
				return "Nama Depan";
			case "last_name":
				return "Nama Belakang";
			case "phone_number":
				return "Nomor Telepon";
			case "email":
				return "Email";
			case "address":
				return "Alamat";
			case "is_approved":
				return "Terverifikasi";
			case "agent_id":
				return "Nomor Akun Agen";
			case "updated_at":
				return "Diperbarui";
			case "created_at":
				return "Dibuat";
			default:
				return "Label";
		}
	};
	React.useEffect(() => {
		console.log("Render ProfileCard");
		console.log(props);
	}, []);
	return (
		<div className="container shadow-lg rounded">
			<div className="font-bold text-white bg-green-500 px-5 py-2 rounded rounded-b-none flex">
				<h3 className="w-1/2 text-2xl">{props.title || "Data diri"}</h3>
				{props.editable &&
					(edit ? (
						<span className="w-1/2 text-right cursor-pointer self-center">
							<button
								className="rounded p-1 bg-white text-green-500 px-5 text-sm"
								onClick={() => handleEdit()}
							>
								Save
							</button>
						</span>
					) : (
						<span className="w-1/2 text-right cursor-pointer self-center">
							<button
								className="rounded p-1 bg-white text-green-500 px-5 text-sm"
								onClick={() => handleEdit()}
							>
								Edit
							</button>
						</span>
					))}
			</div>
			<table className="w-full">
				<tbody className="flex flex-wrap p-5">
					{props.data != null ? (
						Object.keys(data).map((element, i) => {
							return (
								<tr
									key={element + "-" + i}
									className="flex flex-wrap w-full justify-between rounded bg-gray-200 m-2 p-2 overflow-x-auto"
								>
									<td className="w-1/2 text-sm text-gray-600 font-semibold capitalize">
										{label(element)}
									</td>
									{edit == true &&
									element !== "created_at" &&
									element !== "updated_at" &&
									element !== "is_approved" &&
									element !== "id" &&
									element !== "agent_id" &&
									element !== "user_id" ? (
										<td className="w-1/2 text-sm text-gray-600">
											<input
												className="w-full p-1 rounded"
												name={element}
												value={data[element]}
												onChange={(e) => handleChange(e)}
												placeholder={element}
											></input>
										</td>
									) : (
										<td className="w-1/2 text-sm text-gray-600">
											{element !== "created_at" && element !== "updated_at"
												? data[element]
												: convertDate(data[element])}
										</td>
									)}
								</tr>
							);
						})
					) : (
						<tr className="w-full justify-center text-center rounded bg-gray-200 m-2 p-2 overflow-x-auto">
							<td className="w-full text-gray-600">Tidak ada data</td>
						</tr>
					)}
				</tbody>
			</table>
			<div className="w-full flex justify-center pb-5">
				{!props.readonly && (
					<button
						className="rounded bg-green-500 hover:bg-green-700 text-white h-full px-10 py-3 shadow-lg text-center"
						type="button"
						onClick={() => props.doLogout()}
					>
						<span className="font-semibold">Keluar Akun</span>
					</button>
				)}
			</div>
		</div>
	);
});
