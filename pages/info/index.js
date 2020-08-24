import DefaultLayout from "../../layouts/default";
import InformationWrapper from "../../components/wrapper/InformationWrapper";

const InformationPage = () => {
	return (
		<div className="w-full p-8">
			<div className="rounded bg-green-500 w-full my-2 py-2 px-4 text-gray-100">
				<h3 className="font-semibold">Informasi</h3>
			</div>
			<InformationWrapper></InformationWrapper>
		</div>
	);
};

InformationPage.Layout = DefaultLayout;

export default InformationPage;
