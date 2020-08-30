import EasyCard from "../card/EasyCard";
import AddCustomerDialog from "../dialog/AddCustomerDialog";
const CustomerSection = ({ customers = [] }) => {
	const [open, setOpen] = React.useState(false);
	return (
		<EasyCard>
			<div className="w-full flex justify-end rounded bg-gray-200">
				<div className="p-2">
					<button
						className="bg-green-500 text-white rounded shadow px-2 py-1 text-sm font-semibold"
						onClick={() => setOpen(true)}
					>
						Tambah
					</button>
				</div>
			</div>
			<div className="w-full p-1">
				{customers.length > 0 ? (
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
				)}
			</div>
			<AddCustomerDialog
				open={open}
				onClose={() => setOpen(false)}
			></AddCustomerDialog>
		</EasyCard>
	);
};

export default React.memo(CustomerSection);
