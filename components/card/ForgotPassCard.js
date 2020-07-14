export default () => {
	return (
		<div className="container shadow-lg rounded bg-green-500">
			<div className="font-bold text-gray-100 text-2xl rounded rounded-b-none py-2">
				<span className="p-5">Lupa password</span>
			</div>
			<div className="text-gray-100 text-base rounded rounded-b-none py-2">
				<p className="px-5">
					Kirim link untuk mereset ulang password menggunakan email.
				</p>
			</div>
			<table className="w-full">
				<tbody>
					<tr className="flex flex-wrap w-full p-5">
						<td className="text-gray-600 w-2/3">
							<input
								name="email"
								className="w-full rounded block shadow-lg px-4 overflow-x-auto"
								placeholder="Email"
							></input>
						</td>
						<td className="text-gray-600 w-1/3">
							<button
								type="submit"
								className="w-full h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mx-2 rounded shadow-lg"
							>
								Kirim
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
