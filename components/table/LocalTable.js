import MaterialTable from "material-table";

const LocalTable = ({ options, ...other }) => {
	const defaultOptions = {
		actionsColumnIndex: -1,
		pageSize: 5,
		pageSizeOptions: [5, 10],
		paginationType: "stepped",
	};
	return (
		<MaterialTable
			{...other}
			localization={{
				pagination: {
					labelDisplayedRows: "{from}-{to} dari {count}",
					labelRowsSelect: "baris",
					firstAriaLabel: "Halaman Pertama",
					firstTooltip: "Halaman Pertama",
					previousAriaLabel: "Halaman Sebelumnya",
					previousTooltip: "Halaman Sebelumnya",
					nextAriaLabel: "Halaman Selanjutnya",
					nextTooltip: "Halaman Selanjutnya",
					lastAriaLabel: "Halaman Terakhir",
					lastTooltip: "Halaman Terakhir",
				},
				toolbar: {
					nRowsSelected: "{0} Baris terpilih",
					searchTooltip: "Cari",
					searchPlaceholder: "Cari",
				},
				header: {
					actions: "Opsi",
				},
				body: {
					addTooltip: "Tambah",
					deleteTooltip: "Hapus",
					editTooltip: "Ubah",
					emptyDataSourceMessage: "Belum ada data",
					filterRow: {
						filterTooltip: "Filter",
					},
					editRow: {
						deleteText: "Yakin untuk menghapus ?",
						cancelTooltip: "Batal",
						saveTooltip: "Simpan",
					},
				},
			}}
			options={{ ...defaultOptions, ...options }}
		></MaterialTable>
	);
};

export default React.memo(LocalTable);
