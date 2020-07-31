import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Fab from "@material-ui/core/Fab";
import Badge from "@material-ui/core/Badge";
import { useGlobal } from "../../contexts/global";
const FABPesanan = ({ onClick }) => {
	const ctx = useGlobal();
	return (
		<div className="fixed bottom-0 right-0 mx-5 my-20 pb-5">
			<Fab
				className="bg-green-500"
				color="primary"
				onClick={onClick}
				variant="extended"
			>
				<Badge variant="dot" invisible={ctx.badge === 0} color="error">
					<ShoppingCartIcon className="mr-2"></ShoppingCartIcon>
				</Badge>
				<span className="ml-2">Pesanan</span>
			</Fab>
		</div>
	);
};

export default FABPesanan;
