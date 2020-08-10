import LocalTable from "./LocalTable";
import { useDispatch, useSelector } from "react-redux";
import { ordersFetch } from "../../redux/actions/creator/order";

const OrderTable = (props) => {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.orders);
	React.useEffect(() => {
		dispatch(ordersFetch());
	}, []);
	return <LocalTable title=" " data={orders}></LocalTable>;
};

export default OrderTable;
