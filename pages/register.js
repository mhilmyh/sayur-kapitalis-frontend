import Layout from "../layouts/guest";
import TextFieldCustom from "../components/form/TextFieldCustom";
import CircularLoading from "../components/loading/CircularLoading";
import ImageWrapper from "../components/image/simpleWrapper";
import FlexibleAlert from "../components/alert/FlexibleAlert";
import { userRegister } from "../redux/actions/creator/user";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const RegisterPage = () => {
	const loading = useSelector((state) => state.loading);
	const alert = useSelector((state) => state.alert);
	const dispatch = useDispatch();

	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [address, setAddress] = React.useState("");
	const [isAgent, setIsAgent] = React.useState(0);
	const [imageSelf, setImageSelf] = React.useState(null);
	const [showImageSelf, setShowImageSelf] = React.useState("");
	const [imageKTP, setImageKTP] = React.useState(null);
	const [showImageKTP, setShowImageKTP] = React.useState("");

	const handleShowImageKTP = (event) => {
		const file = event.target.files[0];
		setImageKTP(file);
		const reader = new FileReader();
		reader.onload = function (event) {
			setShowImageKTP(event.target.result);
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleShowImageSelf = (event) => {
		const file = event.target.files[0];
		setImageSelf(file);
		const reader = new FileReader();
		reader.onload = function (event) {
			setShowImageSelf(event.target.result);
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const matchPassword = () => {
		return password === confirmPassword;
	};

	const handleClickRegister = () => {
		const data = new FormData();
		data.set("first_name", firstName);
		data.set("last_name", lastName);
		data.set("email", email);
		data.set("password", password);
		data.set("phoneNumber", phone);
		data.set("address", address);
		data.set("is_agent", isAgent);
		if (matchPassword()) dispatch(userRegister(data));
		else
			dispatch(
				alertSet({
					show: true,
					error: true,
					message: "Password tidak sama dengan yang ditulis ulang",
				})
			);
	};

	return (
		<Layout>
			<form
				id="form-register"
				className="w-4/5 max-w-screen-sm shadow-lg p-5 rounded-lg bg-white flex flex-wrap justify-center my-5"
			>
				<FlexibleAlert status={alert}></FlexibleAlert>
				<TextFieldCustom
					label="Nama Depan"
					type="text"
					name="firstName"
					onChange={(e) => setFirstName(e.target.value)}
					placeholder="Ani"
				></TextFieldCustom>
				<TextFieldCustom
					label="Nama Belakang"
					type="text"
					name="lastName"
					onChange={(e) => setLastName(e.target.value)}
					placeholder="Budi"
				></TextFieldCustom>
				<TextFieldCustom
					label="Email"
					type="email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					placeholder="orang@mail.com"
				></TextFieldCustom>
				<TextFieldCustom
					label="Telepon"
					type="text"
					name="phone"
					onChange={(e) => setPhone(e.target.value)}
					placeholder="08123xxxxxxx"
				></TextFieldCustom>
				<TextFieldCustom
					label="Password"
					type="password"
					name="password"
					onChange={(e) => setPassword(e.target.value)}
				></TextFieldCustom>
				<TextFieldCustom
					label="Ulangi Password"
					type="password"
					name="confirmPassword"
					onChange={(e) => setConfirmPassword(e.target.value)}
				></TextFieldCustom>
				<TextFieldCustom
					label="Alamat"
					type="text"
					name="address"
					onChange={(e) => setAddress(e.target.value)}
				></TextFieldCustom>
				<div className="relative w-full mb-3">
					<FormControl component="fieldset">
						<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
							Sebagai
						</label>
						<RadioGroup
							name="is_agent"
							value={isAgent}
							onChange={(e) => setIsAgent(parseInt(e.target.value, 10))}
							className="text-gray-600"
						>
							<FormControlLabel
								value={0}
								control={
									<Radio size="small" className="text-green-500"></Radio>
								}
								label={
									<Typography variant="body2" color="textSecondary">
										Pelanggan
									</Typography>
								}
							/>
							<FormControlLabel
								value={1}
								control={
									<Radio size="small" className="text-green-500"></Radio>
								}
								label={
									<Typography variant="body2" color="textSecondary">
										Agen
									</Typography>
								}
							/>
						</RadioGroup>
					</FormControl>
				</div>
				{isAgent === 1 && (
					<React.Fragment>
						<TextFieldCustom
							label="Foto Wajah"
							type="file"
							name="imageSelf"
							onChange={(e) => handleShowImageSelf(e)}
							accept="image/*"
						></TextFieldCustom>
						{showImageSelf != null && (
							<ImageWrapper src={showImageSelf}></ImageWrapper>
						)}
						<TextFieldCustom
							label="Foto KTP"
							type="file"
							name="imageKTP"
							onChange={(e) => handleShowImageKTP(e)}
							accept="image/*"
						></TextFieldCustom>
						{showImageKTP != null && (
							<ImageWrapper src={showImageKTP}></ImageWrapper>
						)}
					</React.Fragment>
				)}
				<div className="text-center w-full mt-6">
					{loading ? (
						<CircularLoading></CircularLoading>
					) : (
						<button
							className="bg-green-500 text-gray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow-lg mb-1 w-full"
							onClick={() => handleClickRegister()}
							type="button"
						>
							Daftar
						</button>
					)}
				</div>
				<div className="text-center text-xs text-gray-600 pt-2">
					<p>
						Sudah punya akun ?{" "}
						<Link href="/login">
							<span className="text-blue-500 cursor-pointer">
								Masuk di sini
							</span>
						</Link>
					</p>
				</div>
			</form>
		</Layout>
	);
};

export default RegisterPage;
