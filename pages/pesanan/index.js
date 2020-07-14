import Layout from "../../layouts/default";
import OrderWrapper from "../../components/wrapper/OrderWrapper";

const PesananPage = (props) => {
	return (
		<Layout pathname={props.pathname}>
			<OrderWrapper></OrderWrapper>
		</Layout>
	);
};

PesananPage.getInitialProps = async ({ pathname }) => {
	return {
		pathname: pathname,
	};
};

export default PesananPage;
