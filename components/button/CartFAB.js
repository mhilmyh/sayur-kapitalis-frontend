import CartDialog from "../dialog/CartDialog";

import { Fab, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

const CartFAB = () => {
	const carts = useSelector((state) => state.carts);

	const [open, setOpen] = React.useState(false);
	return (
		<div className="fixed bottom-0 right-0 pb-12 mb-12 pr-2 mr-2">
			<Fab
				color="primary"
				size="large"
				onClick={() => setOpen(true)}
				className="hover:bg-green-700"
			>
				<Badge max={99} badgeContent={carts.length} color="error">
					<ShoppingCartIcon></ShoppingCartIcon>
				</Badge>
			</Fab>
			<CartDialog open={open} onClose={() => setOpen(false)}></CartDialog>
		</div>
	);
};

export default React.memo(CartFAB);
