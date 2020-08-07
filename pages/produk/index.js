import Layout from "../../layouts/default";
import ProdukNav from "../../components/navigation/ProdukNav";
import ProdukWrapper from "../../components/wrapper/ProdukWrapper";
import CircularLoading from "../../components/loading/CircularLoading";
import { useSelector, useDispatch } from "react-redux";
import { productsFetch } from "../../redux/actions/creator/product";

const ProdukPage = (props) => {
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(productsFetch());
	}, []);
	return (
		<Layout pathname={props.pathname}>
			<div className="fixed top-0 w-full bg-white">
				<ProdukNav></ProdukNav>
			</div>
			<div className="spacing-small"></div>
			{loading ? (
				<CircularLoading></CircularLoading>
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
