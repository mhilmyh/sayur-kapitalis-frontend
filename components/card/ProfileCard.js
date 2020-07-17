import Link from "next/link";

export default (props) => {
	const [edit, setEdit] = React.useState(false);
	const [data, setData] = React.useState(props.data);
	const handleEdit = () => {
		setEdit(!edit);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const label = (element) => {
		switch (element) {
			case "firstName":
				return "Nama Depan";
			case "lastName":
				return "Nama Belakang";
			case "phoneNumber":
				return "Nomor Telepon";
			case "email":
				return "Email";
			case "address":
				return "Alamat";
			default:
				return "Label";
		}
	};
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
					{props.data ? (
						Object.keys(data).map((element, i) => {
							return (
								<tr
									key={element + "-" + i}
									className="flex flex-wrap w-full justify-between rounded bg-gray-200 m-2 p-2 overflow-x-auto"
								>
									<td className="w-1/2 text-sm text-gray-600 font-semibold capitalize">
										{label(element)}
									</td>
									{edit ? (
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
											{data[element]}
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
			{props.data && (
				<div className="w-full flex justify-center pb-5">
					<Link href="/login">
						<button
							className="rounded bg-green-500 hover:bg-green-700 text-white h-full px-10 py-3 shadow-lg text-center"
							type="button"
						>
							<span className="font-semibold">Keluar Akun</span>
						</button>
					</Link>
				</div>
			)}
		</div>
	);
};
