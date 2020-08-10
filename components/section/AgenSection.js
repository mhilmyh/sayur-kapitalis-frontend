import EasyCard from "../card/EasyCard";
const AgenSection = ({ agen }) => {
	return (
		<EasyCard>
			<div className="w-full py-1">
				<div className="flex flex-wrap my-1 rounded items-center justify-center">
					<div className="w-full flex justify-between my-1 text-gray-600 text-sm bg-gray-200 rounded py-1">
						<div className="mx-2 text-xs font-semibold">Nama Depan</div>
						<div className="mx-2 text-xs ">
							{agen.first_name || "Belum ada data"}
						</div>
					</div>
					<div className="w-full flex justify-between my-1 text-gray-600 text-sm bg-gray-200 rounded py-1">
						<div className="mx-2 text-xs font-semibold">Nama Belakang</div>
						<div className="mx-2 text-xs ">
							{agen.last_name || "Belum ada data"}
						</div>
					</div>
					<div className="w-full flex justify-between my-1 text-gray-600 text-sm bg-gray-200 rounded py-1">
						<div className="mx-2 text-xs font-semibold">No. Telp</div>
						<div className="mx-2 text-xs ">
							{agen.phone_number || "Belum ada data"}
						</div>
					</div>
					<div className="w-full flex justify-between my-1 text-gray-600 text-sm bg-gray-200 rounded py-1">
						<div className="mx-2 text-xs font-semibold">Alamat</div>
						<div className="mx-2 text-xs ">
							{agen.address || "Belum ada data"}
						</div>
					</div>
				</div>
			</div>
		</EasyCard>
	);
};

export default React.memo(AgenSection);
