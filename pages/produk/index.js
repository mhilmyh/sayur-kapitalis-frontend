import DefaultLayout from "../../layouts/default";
import SearchBar from "../../components/input/SearchBar";
import CategorySection from "../../components/section/CategorySection";
import ProdukWrapper from "../../components/wrapper/ProdukWrapper";
import HeadingSection from "../../components/section/HeadingSection";
const ProdukPage = () => {
	return (
		<div className="flex flex-wrap w-full">
			<div className="w-full bg-green-500 mb-4 fixed z-10">
				<SearchBar></SearchBar>
			</div>
			<div className="h-24 w-full"></div>
			<div className="w-full px-8">
				<HeadingSection></HeadingSection>
			</div>
			<div className="w-full px-8 relative">
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
