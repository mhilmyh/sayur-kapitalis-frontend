export default () => {
	return (
		<div className="container shadow-lg rounded bg-green-500">
			<div className="font-bold text-gray-100 text-2xl rounded rounded-b-none py-2">
				<span className="px-5 py-2">Ganti password</span>
			</div>
			<table className="w-full">
				<tbody>
					<tr className="flex flex-wrap w-full px-5 py-2">
						<td className="text-gray-600 w-full">
							<input
								name="oldpass"
								className="w-full rounded block shadow-lg px-4 overflow-x-auto"
								placeholder="Password lama"
							></input>
						</td>
					</tr>
					<tr className="flex flex-wrap w-full px-5 py-2">
						<td className="text-gray-600 w-full">
							<input
								name="newpass"
								className="w-full rounded block shadow-lg px-4 overflow-x-auto"
								placeholder="Password baru"
							></input>
						</td>
					</tr>
					<tr className="flex flex-wrap w-full px-5 pt-2 pb-4">
						<td className="text-gray-600 w-full">
							<button
								type="submit"
								className="w-full h-full bg-blue-500 text-green-100 uppercase font-bold py-2 px-4 rounded shadow-lg"
							>
								Ganti
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
