import EasyCard from "../card/EasyCard";
import AddCustomerDialog from "../dialog/AddCustomerDialog";
import LocalTable from "../table/LocalTable";
const CustomerSection = ({ customers = [] }) => {
	const [open, setOpen] = React.useState(false);
	return (
		<React.Fragment>
			<div className="w-full">
				{/* {customers.length > 0 ? (
					customers.map((item, index) => (
						<div
							key={`customer-${index}`}
							className="flex my-2 rounded items-center px-1 bg-blue-100 cursor-pointer justify-between"
						>
							<div className="w-2 h-2 mx-1 my-2 bg-green-500 rounded-full"></div>
							<div className="w-full flex justify-between">
								<div className="mx-2 p-2 font-semibold text-gray-600 text-xs">
									{`${item.first_name} ${item.last_name}`}
								</div>
								<div className="mx-2 p-2 font-semibold text-gray-600 text-xs">
									{`${item.phone_number}`}
								</div>
							</div>
						</div>
					))
				) : (
					<div className="flex my-1 rounded items-center px-1 justify-center">
						<div className="mx-2 p-2 text-gray-500 text-sm">
							Belum Ada Customer
						</div>
					</div>
				)} */}
				<LocalTable
					title="Pelanggan"
					columns={[
						{ title: "Nama", field: "full_name" },
						{ title: "Telepon", field: "phone_number" },
						{ title: "Alamat", field: "address" },
					]}
					options={{
						rowStyle: {
							fontSize: "0.8rem",
							fontWeight: 600,
							padding: 0,
							color: "#718096",
						},
					}}
					data={customers}
					actions={[
						{
							icon: () => (
								<button className="bg-green-500 text-white rounded shadow px-2 py-1 text-sm font-semibold">
									Tambah
								</button>
							),
							isFreeAction: true,
							tooltip: "Tambah",
							onClick: (_, row) => setOpen(true),
						},
					]}
				></LocalTable>
			</div>
			<AddCustomerDialog
				open={open}
				onClose={() => setOpen(false)}
			></AddCustomerDialog>
		</React.Fragment>
	);
};

export default React.memo(CustomerSection);
