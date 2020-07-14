import OrderPesananSection from "../section/OrderPesananSection";
import OrderTableSection from "../section/OrderTableSection";
export default () => {
	return (
		<div className="p-5 w-full">
			<OrderPesananSection></OrderPesananSection>
			<OrderTableSection></OrderTableSection>
		</div>
	);
};
