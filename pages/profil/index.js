import DefaultLayout from "../../layouts/default";
import EasyWrapper from "../../components/wrapper/EasyWrapper";
import ProfileSection from "../../components/section/ProfileSection";
import CustomerSection from "../../components/section/CustomerSection";
import ChangePassSection from "../../components/section/ChangePassSection";
import AgenSection from "../../components/section/AgenSection";
const ProfilPage = () => {
	return (
		<div className="w-full p-8 flex flex-wrap justify-center items-start">
			<EasyWrapper title="Profil Pengguna">
				<ProfileSection></ProfileSection>
			</EasyWrapper>
			<EasyWrapper title="Ganti Password">
				<ChangePassSection></ChangePassSection>
			</EasyWrapper>
			<EasyWrapper title="Daftar Customer">
				<CustomerSection></CustomerSection>
			</EasyWrapper>
			<EasyWrapper title="Agen">
				<AgenSection></AgenSection>
			</EasyWrapper>
		</div>
	);
};

ProfilPage.Layout = DefaultLayout;

export default ProfilPage;
