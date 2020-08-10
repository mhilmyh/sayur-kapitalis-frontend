import EasyCard from "../card/EasyCard";
import LocalTable from "../table/LocalTable";
const CustomerSection = ({ customers = [] }) => {
	if (customers.length > 0) {
		return (
			<EasyCard>
				<div className="w-full p-2">
					<div className="flex my-1 rounded items-center px-1 hover:bg-blue-100 cursor-pointer">
						<div className="w-2 h-2 mx-1 my-2 bg-green-500 rounded-full"></div>
						<div className="mx-2 p-2 font-semibold text-gray-600 text-sm">
							Zulkipsboi Masbro Alakabumbum
						</div>
					</div>
				</div>
			</EasyCard>
		);
	}
	return (
		<EasyCard>
			<div className="w-full p-2">
				<div className="flex my-1 rounded items-center px-1 justify-center">
					<div className="mx-2 p-2 text-gray-500 text-sm">
						Belum Ada Customer
					</div>
				</div>
			</div>
		</EasyCard>
	);
};

export default React.memo(CustomerSection);
