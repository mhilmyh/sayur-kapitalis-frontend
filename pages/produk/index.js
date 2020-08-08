import DefaultLayout from "../../layouts/default";
import SearchBar from "../../components/input/SearchBar";
import CategorySection from "../../components/section/CategorySection";
import ProdukWrapper from "../../components/wrapper/ProdukWrapper";
const ProdukPage = () => {
	return (
		<div className="flex flex-wrap w-full">
			<div className="w-full bg-green-500 mb-4">
				<SearchBar></SearchBar>
			</div>
			<div className="w-full px-8">
				<CategorySection></CategorySection>
			</div>
			<div className="w-full px-8">
				<ProdukWrapper></ProdukWrapper>
			</div>
		</div>
	);
};

ProdukPage.Layout = DefaultLayout;

export default ProdukPage;
