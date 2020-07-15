export default (props) => {
	return (
		<div className="container shadow-lg rounded">
			<div className="font-bold text-white text-2xl bg-green-500 rounded rounded-b-none py-2">
				<h3 className="px-5 text-left">{props.title || "Data diri"}</h3>
			</div>
			<div className="relative md:w-1/2 p-5">
				<div className="absolute inline-flex items-center p-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6 text-gray-400"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
						<circle cx="10" cy="10" r="7" />
						<line x1="21" y1="21" x2="15" y2="15" />
					</svg>
				</div>
				<input
					type="search"
					className="w-full pl-10 pr-4 py-2 rounded shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
					placeholder="Cari..."
				></input>
			</div>
			<table className="table-auto whitespace-no-wrap bg-white m-5 border-collapse border-1 border-gray-200">
				<thead className="flex bg-gray-200 rounded rounded-b-none overflow-x-auto text-left">
					<tr className="w-full flex">
						<th className="w-1/2 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
							Nama
						</th>
						<th className="w-1/2 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
							Telepon
						</th>
					</tr>
				</thead>
				<tbody className="flex flex-wrap pb-5 overflow-x-auto">
					{props.data ? (
						props.data.map((element, index) => {
							return (
								<tr
									key={element + "-" + index}
									className="flex flex-wrap w-full border-dashed border-t border-gray-200 overflow-x-auto p-3"
								>
									<td className="w-1/2 text-sm text-gray-600 overflow-x-auto pr-5">
										{element.name}
									</td>
									<td className="w-1/2 text-sm text-gray-600 overflow-x-auto pl-5">
										{element.telp}
									</td>
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
			<div className="flex flex-wrap p-5">
				<div className="lg:w-8/12 w-full pb-5">
					<div className="relative text-gray-600 focus-within:text-gray-400">
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<svg className="svg-icon" viewBox="0 0 20 20" strokeWidth="1">
								<path
									fill="none"
									d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"
								></path>
								<path
									fill="none"
									d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"
								></path>
							</svg>
						</span>
						<input
							className="rounded text-sm pl-10 bg-white focus:text-gray-900 py-3 px-5 w-full shadow"
							placeholder="Tambahkan customer baru"
						></input>
					</div>
				</div>
				<div className="lg:w-4/12 w-full pb-5 lg:px-5">
					<button
						className="rounded bg-green-500 hover:bg-green-700 text-white h-full w-full py-3 shadow-lg text-center"
						type="button"
					>
						<span className="font-semibold">Tambah</span>
					</button>
				</div>
			</div>
		</div>
	);
};
