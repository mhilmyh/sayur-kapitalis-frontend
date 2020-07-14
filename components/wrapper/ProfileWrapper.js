import ProfileCard from "../card/ProfileCard";
import ChangePassCard from "../card/ChangePassCard";
import ProfileCustomerListSection from "../section/ProfileCustomerListSection";

export default (props) => {
	const user = {
		name: "Muhamad Hilmy Haidar",
		telp: "081314131073",
		email: "mhilmy021@gmail.com",
		address: "Jl Gn Salak Perumnas Kota Cirebon",
	};
	const customer = [
		{
			name: "Muhamad Hilmy Haidar",
			telp: "081314131073",
		},
		{
			name: "Muhamad Hilmy Haidar",
			telp: "081314131073",
		},
		{
			name: "Muhamad Hilmy Haidar",
			telp: "081314131073",
		},
	];
	return (
		<React.Fragment>
			<div className="flex flex-wrap justify-start">
				<div className="md:w-1/2 w-full container p-6">
					<div className="w-full py-6">
						<ProfileCard
							title="Data diri"
							data={user}
							editable={true}
						></ProfileCard>
					</div>
					<div className="w-full">
						<ChangePassCard></ChangePassCard>
					</div>
				</div>
				<div className="md:w-1/2 w-full container p-6">
					{props.type === "customer" && (
						<div className="w-full pt-6">
							<ProfileCard title="Agen"></ProfileCard>
						</div>
					)}
					{props.type === "agent" && (
						<div className="w-full pt-6">
							<ProfileCustomerListSection
								title="Daftar Customer"
								data={customer}
							></ProfileCustomerListSection>
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};
