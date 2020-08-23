import GuestLayout from "../layouts/guest";
import EasyTextfield from "../components/input/EasyTextField";
import EasyRadio from "../components/input/EasyRadio";
import EasyInputImage from "../components/input/EasyInputImage";
import EasyButton from "../components/button/EasyButton";
import FlexibleAlert from "../components/alert/FlexibleAlert";
import CircularLoad from "../components/loading/CircularLoad";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/actions/creator/user";
import { alertReset, alertSet } from "../redux/actions/creator/alert";
// import SuperEasySelection from "../components/input/SuperEasySelection";
import { coverageFetch } from "../redux/actions/creator/coverage";

const RegisterPage = () => {
	const dispatch = useDispatch();
	const alert = useSelector((state) => state.alert);
	const loading = useSelector((state) => state.loading);
	// const coverage = useSelector((state) => state.coverage);

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [rePassword, setRePassword] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const [address, setAddress] = React.useState("");
	const [isAgent, setIsAgent] = React.useState(0);
	const [bankName, setBankName] = React.useState("");
	const [bankAccount, setBankAccount] = React.useState("");
	const [bankOwner, setBankOwner] = React.useState("");
	// const [coverageArea, setCoverageArea] = React.useState(-1);
	// const [area, setArea] = React.useState("");
	const [imageSelf, setImageSelf] = React.useState(null);
	const [imageKTP, setImageKTP] = React.useState(null);

	const handleClick = () => {
		if (!!password && !!rePassword && password === rePassword) {
			const data = new FormData();
			data.set("email", email);
			data.set("password", password);
			data.set("address", address);
			data.set("first_name", firstName);
			data.set("last_name", lastName);
			data.set("phone_number", phoneNumber);
			data.set("is_agent", isAgent);
			if (isAgent) {
				data.set("bank_account_number", bankAccount);
				data.set("bank_account_name", bankName);
				data.set("bank_account_owner", bankOwner);
				data.set("image_self", imageSelf);
				data.set("image_ktp", imageKTP);
				// if (coverageArea === -1) data.set("area", area);
				// else data.set("coverage_area_id", coverageArea);
			}
			dispatch(userRegister(data));
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
		dispatch(coverageFetch());
	}, []);
	return (
		<div className="w-4/5 p-4 max-w-screen-sm bg-white rounded shadow-lg my-4">
			<FlexibleAlert {...alert}></FlexibleAlert>
			<form className="flex flex-wrap items-center justify-center">
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
				<EasyRadio
					label="Peran"
					name="is_agent"
					value={isAgent}
					onChange={(e) => setIsAgent(parseInt(e.target.value, 10))}
					data={[
						{ value: 0, label: "Pelanggan" },
						{ value: 1, label: "Agen" },
					]}
				></EasyRadio>
				{isAgent === 1 && (
					<React.Fragment>
						<EasyTextfield
							label="Nomor Rekening"
							type="text"
							name="bank_accont"
							placeholder="123-XXX-XXXXX"
							onChange={(e) => setBankAccount(e.target.value)}
						></EasyTextfield>
						<EasyTextfield
							label="Nama Bank"
							type="text"
							name="bank_name"
							placeholder="BRI / BNI / yang lainnya"
							onChange={(e) => setBankName(e.target.value)}
						></EasyTextfield>

						<EasyTextfield
							label="Nama Pemilik rekening"
							type="text"
							name="bank_owner"
							placeholder="Ani Budi Candra"
							onChange={(e) => setBankOwner(e.target.value)}
						></EasyTextfield>
						<EasyInputImage
							title="Gambar Diri"
							desc="Pilih gambar diri anda (bisa wajah atau seluruh badan)"
							onChange={(f) => setImageSelf(f)}
						></EasyInputImage>
						<EasyInputImage
							title="Gambar KTP"
							desc="Pilih gambar KTP anda (bagian depan saja)"
							onChange={(f) => setImageKTP(f)}
						></EasyInputImage>
						{/* <SuperEasySelection
							label="Coverage Area"
							value={coverageArea}
							notChoosenText="Tidak dipilih"
							onChange={(e) => setCoverageArea(e)}
						></SuperEasySelection> */}

						{/* {coverageArea === -1 && (
							<EasyTextfield
								label="Area"
								type="text"
								name="area"
								placeholder="Bukit Royal 1"
								onChange={(e) => setArea(e.target.value)}
							></EasyTextfield>
						)} */}
					</React.Fragment>
				)}
				{loading ? (
					<CircularLoad></CircularLoad>
				) : (
					<React.Fragment>
						<EasyButton
							text="daftar"
							onClick={() => handleClick()}
						></EasyButton>
						<div className="text-center text-xs text-gray-600 pt-2 w-full">
							<p>
								{"Sudah punya akun? "}
								<Link href="/login">
									<span className="text-blue-500 cursor-pointer">
										Pergi ke sini
									</span>
								</Link>
							</p>
							<p>
								{"Lupa password? "}
								<Link href="/forgot">
									<span className="text-blue-500 cursor-pointer">
										Klik di sini
									</span>
								</Link>
							</p>
						</div>
					</React.Fragment>
				)}
			</form>
		</div>
	);
};

RegisterPage.Layout = GuestLayout;

export default RegisterPage;
