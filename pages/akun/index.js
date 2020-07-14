import Layout from "../../layouts/default";
import ProfileWrapper from "../../components/wrapper/ProfileWrapper";

const AkunPage = (props) => {
	return (
		<Layout pathname={props.pathname}>
			<ProfileWrapper type="agent"></ProfileWrapper>
		</Layout>
	);
};

AkunPage.getInitialProps = async ({ pathname }) => {
	return {
		user: {},
		pathname: pathname,
	};
};

export default AkunPage;
