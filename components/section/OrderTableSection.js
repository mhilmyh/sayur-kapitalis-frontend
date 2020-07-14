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
			<div className="w-full px-5 py-3">
				<table className="table-auto whitespace-no-wrap bg-white border-collapse border-1 border-gray-200 w-full">
					<thead className="w-full overflow-x-auto text-left text-xs uppercase">
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
							<td class="px-5 py-5">Ayam mentah</td>
							<td class="px-5 py-5">21-09-2020</td>
							<td class="px-5 py-5">Sedang diproses</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="inline-flex w-full justify-center p-5">
				<button class="bg-gray-300 opacity-50 cursor-not-allowed hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
					Prev
				</button>
				<button class="bg-gray-300 opacity-50 cursor-not-allowed hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
					Next
				</button>
			</div>
		</div>
	);
};
