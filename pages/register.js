import Layout from "../layouts/guest";
import Link from "next/link";
import API from "../services/axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import { green } from "@material-ui/core/colors";

const RegisterPage = () => {
	const [user, setUser] = React.useState({
		first_name: "",
		last_name: "",
		phone_number: "",
		password: "",
		email: "",
		password_confirm: "",
	});
	const [alert, setAlert] = React.useState({
		value: false,
		error: false,
		listErr: null,
		message: "",
	});
	const [loading, setLoading] = React.useState(false);

	const handleClick = () => {
		setLoading((prev) => !prev);
		setAlert({ value: false });
		API.post("/auth/register", user)
			.then((res) => {
				console.log(res);
				setAlert({
					value: true,
					error: false,
					message: "Berhasil membuat akun",
				});
			})
			.catch((err) => {
				console.log(err.response);
				setAlert({
					value: true,
					error: true,
					message: err.response.data.message,
					listErr: err.response.data.errors,
				});
			})
			.finally(() => setLoading((prev) => !prev));
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prev) => ({ ...prev, [name]: value }));
	};

	const style = {
		color: green[500],
	};

	return (
		<Layout>
			<form className="w-4/5 max-w-screen-sm shadow-lg p-5 rounded-lg bg-white flex flex-wrap justify-center">
				{alert.value && (
					<div className="relative w-full mb-3">
						<Alert severity={alert.error ? "error" : "success"}>
							<span>{alert.message}</span>
							{alert.error &&
								Object.keys(alert.listErr).map((k, i) => (
									<li key={"err" + i}>{k + ": " + alert.listErr[k][0]}</li>
								))}
						</Alert>
					</div>
				)}
				<div className="relative w-1/2 mb-3">
					<div className="pr-2">
						<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
							Nama Depan
						</label>
						<input
							type="text"
							name="first_name"
							onChange={(e) => handleChange(e)}
							className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
							placeholder="Nama Lengkap"
						></input>
					</div>
				</div>
				<div className="relative w-1/2 mb-3">
					<div className="pl-2">
						<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
							Nama Belakang
						</label>
						<input
							type="text"
							name="last_name"
							onChange={(e) => handleChange(e)}
							className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
							placeholder="Nama Lengkap"
						></input>
					</div>
				</div>
				<div className="relative w-full mb-3">
					<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
						Telepon
					</label>
					<input
						type="text"
						name="phone_number"
						onChange={(e) => handleChange(e)}
						className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
						placeholder="Nomor Telepon"
					></input>
				</div>
				<div className="relative w-full mb-3">
					<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
						Email
					</label>
					<input
						type="email"
						name="email"
						onChange={(e) => handleChange(e)}
						className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
						placeholder="Email"
					></input>
				</div>
				<div className="relative w-full mb-3">
					<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
						Password
					</label>
					<input
						type="password"
						name="password"
						onChange={(e) => handleChange(e)}
						className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
						placeholder="Password"
					></input>
				</div>
				<div className="relative w-full mb-3">
					<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
						Confirm Password
					</label>
					<input
						type="password"
						name="password_confirm"
						onChange={(e) => handleChange(e)}
						className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
						placeholder="Tulis ulang Password"
					></input>
				</div>
				<div className="relative w-full mb-3">
					<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
						Alamat
					</label>
					<input
						type="text"
						name="address"
						onChange={(e) => handleChange(e)}
						className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
						placeholder="Tulis ulang Password"
					></input>
				</div>
				<div className="text-center w-full mt-6">
					{loading ? (
						<CircularProgress
							size={40}
							thickness={6}
							disableShrink
							style={style}
						></CircularProgress>
					) : (
						<button
							className="bg-green-500 text-gray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow-lg mb-1 w-full"
							onClick={() => handleClick()}
							type="button"
						>
							Daftar
						</button>
					)}
				</div>
				<div className="text-center text-xs text-gray-600 pt-2">
					{!loading && (
						<p>
							Sudah punya akun ?{" "}
							<Link href="/login">
								<span className="text-blue-500 cursor-pointer">
									Masuk di sini
								</span>
							</Link>
						</p>
					)}
				</div>
			</form>
		</Layout>
	);
};

export default RegisterPage;
