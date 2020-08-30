import DialogWrapper from "../wrapper/DialogWrapper";
import EasyTextfield from "../input/EasyTextField";
import FlexibleAlert from "../alert/FlexibleAlert";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../redux/actions/creator/user";
import { alertReset, alertSet } from "../../redux/actions/creator/alert";
import { useRouter } from "next/router";

const AddCustomerDialog = ({ open, onClose }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const alert = useSelector((state) => state.alert);
	const loading = useSelector((state) => state.loading);

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [rePassword, setRePassword] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const [address, setAddress] = React.useState("");

	const handleRegisterNewCustomer = () => {
		if (loading) return;
		if (!!password && !!rePassword && password === rePassword) {
			const data = new FormData();
			data.set("email", email);
			data.set("password", password);
			data.set("address", address);
			data.set("first_name", firstName);
			data.set("last_name", lastName);
			data.set("phone_number", phoneNumber);
			data.set("is_agent", 0);
			dispatch(userRegister(data, true, () => router.replace()));
		} else {
			dispatch(
				alertSet({
					show: true,
					error: true,
					message: "Password yang ditulis ulang tidak sama.",
				})
			);
		}
	};

	React.useEffect(() => {
		dispatch(alertReset());
	}, []);
	return (
		<DialogWrapper
			open={open}
			onClose={onClose}
			onClickYes={() => handleRegisterNewCustomer()}
			textYes="Daftarkan"
		>
			<div className="p-4">
				<form className="flex flex-wrap items-center justify-center">
					<FlexibleAlert {...alert}></FlexibleAlert>
					<EasyTextfield
						label="Nama Depan"
						type="text"
						name="first_name"
						placeholder="Ani"
						half={true}
						onChange={(e) => setFirstName(e.target.value)}
					></EasyTextfield>
					<EasyTextfield
						label="Nama Belakang"
						type="text"
						name="last_name"
						placeholder="Budi"
						half={true}
						onChange={(e) => setLastName(e.target.value)}
					></EasyTextfield>
					<EasyTextfield
						label="Email"
						type="email"
						name="email"
						placeholder="test@example.com"
						onChange={(e) => setEmail(e.target.value)}
					></EasyTextfield>
					<EasyTextfield
						label="Nomor HP"
						type="number"
						name="phone"
						placeholder="08123xxxxxxx"
						onChange={(e) => setPhoneNumber(e.target.value)}
					></EasyTextfield>
					<EasyTextfield
						label="Password"
						type="password"
						name="password"
						placeholder="******"
						onChange={(e) => setPassword(e.target.value)}
					></EasyTextfield>
					<EasyTextfield
						label="Ulangi Password"
						type="password"
						name="repassword"
						placeholder="******"
						onChange={(e) => setRePassword(e.target.value)}
					></EasyTextfield>
					<EasyTextfield
						label="Alamat"
						type="text"
						name="address"
						placeholder="Jalan. XX no. 1 Kota XXXX"
						onChange={(e) => setAddress(e.target.value)}
					></EasyTextfield>
					<div className="w-full h-4"></div>
				</form>
			</div>
		</DialogWrapper>
	);
};
export default React.memo(AddCustomerDialog);
