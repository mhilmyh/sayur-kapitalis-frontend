import Layout from "../layouts/guest";
import Link from "next/link";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import { green } from "@material-ui/core/colors";
import { useGlobal } from "../contexts/global";

const LoginPage = () => {
	const ctx = useGlobal();
	const [user, setUser] = React.useState({
		email: "",
		password: "",
	});
	const handleClick = () => {
		ctx.doLogin(user.email, user.password);
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
			<form className="w-4/5 max-w-screen-sm shadow-lg p-5 rounded-lg bg-white">
				{ctx.alert.value && (
					<div className="relative w-full mb-3">
						<Alert severity={ctx.alert.error ? "error" : "success"}>
							<span>{ctx.alert.message}</span>
							{/* {alert.error &&
								Object.keys(alert.listErr).map((k, i) => (
									<li key={"err" + i}>{k + ": " + alert.listErr[k][0]}</li>
								))} */}
						</Alert>
					</div>
				)}
				<div className="relative w-full mb-3">
					<p className="py-2 mb-2 text-gray-700 text-xs">
						Kirim link untuk mereset password anda melalui email di bawah ini.
						Masukan email dari akun anda yang passwordnya ingin direset :{" "}
					</p>
					<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
						Email
					</label>
					<input
						type="text"
						name="email"
						onChange={(e) => handleChange(e)}
						className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
						placeholder="test@mail.com"
					></input>
				</div>
				<div className="text-center mt-6">
					{ctx.loading ? (
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
							Kirim
						</button>
					)}
				</div>
				<div className="text-center text-xs text-gray-600 pt-2">
					{!ctx.loading && (
						<div>
							<p>
								{"Masuk akun? "}
								<Link href="/login">
									<span className="text-blue-500 cursor-pointer">
										Klik di sini
									</span>
								</Link>
							</p>
						</div>
					)}
				</div>
			</form>
		</Layout>
	);
};

export default React.memo(LoginPage);
