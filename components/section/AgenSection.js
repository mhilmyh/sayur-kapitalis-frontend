import EasyCard from "../card/EasyCard";
const AgenSection = ({ agen = {} }) => {
	if (!!agen) {
		return (
			<EasyCard>
				<div className="w-full p-2">
					<div className="flex my-1 rounded items-center px-1 justify-center">
						<div className="mx-2 p-2 text-gray-500 text-sm">Ada Agen</div>
					</div>
				</div>
			</EasyCard>
		);
	}
	return (
		<EasyCard>
			<div className="w-full p-2">
				<div className="flex my-1 rounded items-center px-1 justify-center">
					<div className="mx-2 p-2 text-gray-500 text-sm">Belum Ada Agen</div>
				</div>
			</div>
		</EasyCard>
	);
};

export default React.memo(AgenSection);
