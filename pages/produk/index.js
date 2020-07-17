import Layout from "../../layouts/default";
import ProdukNav from "../../components/navigation/ProdukNav";
import ProdukWrapper from "../../components/wrapper/ProdukWrapper";
import { ProtectRoute } from "../../contexts/auth";

const ProdukPage = (props) => {
	return (
		<Layout pathname={props.pathname}>
			<div className="fixed top-0 w-full bg-white">
				<ProdukNav></ProdukNav>
			</div>
			<div className="spacing-small"></div>
			<ProdukWrapper produk={props.produk}></ProdukWrapper>
		</Layout>
	);
};

ProdukPage.getInitialProps = async ({ pathname }) => {
	return {
		produk: ["satu", "dua", "tiga", "tiga", "tiga", "tiga"],
		pathname: pathname,
	};
};

export default ProtectRoute(ProdukPage);
