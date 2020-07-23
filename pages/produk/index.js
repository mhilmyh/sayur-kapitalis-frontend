import Layout from "../../layouts/default";
import ProdukNav from "../../components/navigation/ProdukNav";
import ProdukWrapper from "../../components/wrapper/ProdukWrapper";
import { useGlobal } from "../../contexts/global";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Cookies from "js-cookie";
import Router from "next/router";

const ProdukPage = (props) => {
	const ctx = useGlobal();
	const style = {
		color: green[500],
	};
	React.useEffect(() => {
		const checkUser = Cookies.getJSON("user");
		if (
			!checkUser ||
			(Object.keys(checkUser).length === 0 && checkUser.constructor === Object)
		) {
			Router.replace("/login");
		}
		ctx.loadCart();
	}, []);
	return (
		<Layout pathname={props.pathname}>
			<div className="fixed top-0 w-full bg-white">
				<ProdukNav></ProdukNav>
			</div>
			<div className="spacing-small"></div>
			{ctx.loading ? (
				<div className="flex w-full justify-center">
					<CircularProgress
						size={40}
						thickness={6}
						disableShrink
						style={style}
					></CircularProgress>
				</div>
			) : (
				<ProdukWrapper></ProdukWrapper>
			)}
		</Layout>
	);
};

ProdukPage.getInitialProps = async ({ pathname }) => {
	return {
		pathname: pathname,
	};
};

export default ProdukPage;
