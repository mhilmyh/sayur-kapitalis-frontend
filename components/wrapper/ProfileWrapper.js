import ProfileCard from "../card/ProfileCard";
import ChangePassCard from "../card/ChangePassCard";
import ProfileCustomerListSection from "../section/ProfileCustomerListSection";
import useAuth from "../../contexts/auth";

export default () => {
	const ctx = useAuth();
	React.useEffect(() => {
		console.log("Render ProfileWrapper");
		ctx.getLastUser();
		console.log(ctx.user);
	}, []);
	return (
		<React.Fragment>
			<div className="flex flex-wrap justify-center">
				<div className="md:w-1/2 w-full p-6">
					<div className="w-full py-6">
						<ProfileCard
							title="Data diri"
							data={ctx.user.is_agent ? ctx.user.agent : ctx.user.customer}
							editable={true}
							doLogout={() => ctx.doLogout()}
						></ProfileCard>
					</div>
					<div className="w-full">
						<ChangePassCard></ChangePassCard>
					</div>
				</div>
				<div className="md:w-1/2 w-full p-6">
					{ctx.user.is_agent == false && (
						<div className="w-full pt-6">
							<ProfileCard
								title="Agen"
								data={ctx.user.agent}
								readonly
							></ProfileCard>
						</div>
					)}
					{ctx.user.is_agent == true && (
						<div className="w-full pt-6">
							<ProfileCustomerListSection
								title="Daftar Customer"
								data={ctx.user.customer}
							></ProfileCustomerListSection>
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};
