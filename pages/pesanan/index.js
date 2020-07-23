import Layout from "../../layouts/default";
import OrderWrapper from "../../components/wrapper/OrderWrapper";
import Cookies from "js-cookie";
import Router from "next/router";

const PesananPage = (props) => {
	React.useEffect(() => {
		const checkUser = Cookies.getJSON("user");
		if (
			!checkUser ||
			(Object.keys(checkUser).length === 0 && checkUser.constructor === Object)
		) {
			Router.replace("/login");
		}
	}, []);
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
