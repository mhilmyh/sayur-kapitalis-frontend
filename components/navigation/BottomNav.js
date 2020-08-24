import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import StorefrontIcon from "@material-ui/icons/Storefront";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

import { useRouter } from "next/router";

const BottomNav = () => {
	const router = useRouter();
	const handleChangeRoute = (_, value) => {
		router.push(value);
	};
	return (
		<BottomNavigation
			value={router.pathname}
			onChange={handleChangeRoute}
			className="w-full"
			showLabels
		>
			<BottomNavigationAction
				label="Produk"
				value="/produk"
				icon={<StorefrontIcon></StorefrontIcon>}
			></BottomNavigationAction>
			<BottomNavigationAction
				label="Informasi"
				value="/info"
				icon={<LocalLibraryIcon></LocalLibraryIcon>}
			></BottomNavigationAction>
			<BottomNavigationAction
				label="Pesanan"
				value="/pesanan"
				icon={<ReceiptIcon></ReceiptIcon>}
			></BottomNavigationAction>
			<BottomNavigationAction
				label="Profil"
				value="/profil"
				icon={<AccountCircleIcon></AccountCircleIcon>}
			></BottomNavigationAction>
		</BottomNavigation>
	);
};

export default React.memo(BottomNav);
