import DialogWrapper from "../wrapper/DialogWrapper";
import EasyTextfield from "../input/EasyTextField";
import FlexibleAlert from "../alert/FlexibleAlert";
import { useDispatch, useSelector } from "react-redux";
import {
	userRegister,
	userFetchProvinsi,
	userFetchKotakab,
	userFetchKecamatan,
} from "../../redux/actions/creator/user";
import { alertReset, alertSet } from "../../redux/actions/creator/alert";
import { useRouter } from "next/router";
import SuperEasySelection from "../input/SuperEasySelection";

const AddCustomerDialog = ({ open, onClose }) => {
	// const router = useRouter();
	const dispatch = useDispatch();
	const alert = useSelector((state) => state.alert);
	const loading = useSelector((state) => state.loading);
	const provinces = useSelector((state) => state.provinces);
	const cities = useSelector((state) => state.cities);
	const districs = useSelector((state) => state.districs);

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [rePassword, setRePassword] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const [address, setAddress] = React.useState("");
	const [provinceID, setProvinceID] = React.useState(-1);
	const [cityID, setCityID] = React.useState(-1);
	const [districtID, setDistrictID] = React.useState(-1);

	const handleRegisterNewCustomer = () => {
		if (loading) return;
		if (!!password && !!rePassword && password === rePassword) {
			const data = new FormData();
			data.set("email", email);
			data.set("password", password);
			data.set("address", address);
			data.set("province_id", provinceID);
			data.set("city_id", cityID);
			data.set("district_id", districtID);
			data.set("first_name", firstName);
			data.set("last_name", lastName);
			data.set("phone_number", phoneNumber);
			data.set("is_agent", 0);
			dispatch(userRegister(data, true));
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

	const handleChangeProvince = (e) => {
		setProvinceID(e.target.value);
		setCityID(-1);
		setDistrictID(-1);
	};
	const handleChangeCity = (e) => {
		setCityID(e.target.value);
		setDistrictID(-1);
	};
	const handleChangeDistrict = (e) => {
		setDistrictID(e.target.value);
	};

	React.useEffect(() => {
		dispatch(userFetchProvinsi());
	}, []);

	React.useEffect(() => {
		if (provinceID !== -1) dispatch(userFetchKotakab(provinceID));
	}, [provinceID]);

	React.useEffect(() => {
		if (cityID !== -1) dispatch(userFetchKecamatan(cityID));
	}, [cityID]);

	return (
		<DialogWrapper
			title="Daftarkan Pelanggan Baru"
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
					<SuperEasySelection
						label="Provinsi"
						value={provinceID}
						printFunc={(item) => item.name}
						data={provinces}
						onChange={(e) => handleChangeProvince(e)}
					></SuperEasySelection>
					<SuperEasySelection
						label="Kota/Kabupaten"
						value={cityID}
						printFunc={(item) => item.name}
						data={cities}
						onChange={(e) => handleChangeCity(e)}
					></SuperEasySelection>
					<SuperEasySelection
						label="Kecamatan"
						value={districtID}
						printFunc={(item) => item.name}
						data={districs}
						onChange={(e) => handleChangeDistrict(e)}
					></SuperEasySelection>
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
