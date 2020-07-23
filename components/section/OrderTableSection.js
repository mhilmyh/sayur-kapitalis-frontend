export default () => {
	return (
		<div className="flex flex-wrap shadow-lg rounded py-2 my-5">
			<div className="w-full px-5 py-3">
				<h2 className="text-gray-700 font-semibold text-2xl">Histori</h2>
				<p className="text-gray-500 text-xs capitalize">
					Daftar pesanan yang sudah dipesan
				</p>
			</div>
			<hr className="mx-5 w-full"></hr>
			<div className="w-full px-5 py-3 overflow-x-auto">
				<table className="table-auto whitespace-no-wrap bg-white w-full overflow-x-auto">
					<thead className="w-full text-left text-xs uppercase">
						<tr className="">
							<th className="px-5 py-2 bg-gray-200 text-gray-600 tracking-wider">
								Barang
							</th>
							<th className="px-5 py-2 bg-gray-200 text-gray-600 tracking-wider">
								Tanggal Pemesanan
							</th>
							<th className="px-5 py-2 bg-gray-200 text-gray-600 tracking-wider">
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="text-sm text-gray-600">
							<td className="px-5 py-5">Ayam mentah</td>
							<td className="px-5 py-5">21-09-2020</td>
							<td className="px-5 py-5">Sedang diproses</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
