import DefaultLayout from "../../layouts/default";
import EasyWrapper from "../../components/wrapper/EasyWrapper";
import ProfileSection from "../../components/section/ProfileSection";
import CustomerSection from "../../components/section/CustomerSection";
import ChangePassSection from "../../components/section/ChangePassSection";
import CookieService from "../../redux/services/cookie.service";
import AgenSection from "../../components/section/AgenSection";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../../redux/actions/creator/user";
import { useRouter } from "next/router";

const ProfilPage = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const router = useRouter();

	React.useEffect(() => {
		if (CookieService.checkToken()) {
			dispatch(userFetch());
		} else {
			router.replace("/login");
		}
	}, []);
	return (
		<div className="w-full p-8 flex flex-wrap justify-center items-start">
			<EasyWrapper title="Profil Pengguna">
				<ProfileSection
					user={user.is_agent ? user.agent : user.customer}
				></ProfileSection>
			</EasyWrapper>
			<EasyWrapper title="Ganti Password">
				<ChangePassSection></ChangePassSection>
			</EasyWrapper>
			{user.is_agent ? (
				<EasyWrapper title="Daftar Customer">
					<CustomerSection customers={user.agent.customers}></CustomerSection>
				</EasyWrapper>
			) : (
				<EasyWrapper title="Agen">
					<AgenSection agen={user.agent}></AgenSection>
				</EasyWrapper>
			)}
		</div>
	);
};

ProfilPage.Layout = DefaultLayout;

export default ProfilPage;
