import MaterialTable, { MTableToolbar } from "material-table";

import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => (
		<div className="text-green-500">
			<ChevronRight {...props} ref={ref} />
		</div>
	)),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => (
		<ChevronLeft {...props} ref={ref} />
	)),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

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
			icons={tableIcons}
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
			components={{
				Toolbar: (props) => (
					<div style={{ color: "#48bb78" }}>
						<MTableToolbar {...props} />
					</div>
				),
			}}
			options={{ ...defaultOptions, ...options }}
		></MaterialTable>
	);
};

export default React.memo(LocalTable);
