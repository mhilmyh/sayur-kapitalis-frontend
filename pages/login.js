import Layout from "../layouts/guest";
import Link from "next/link";
import API from "../services/axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import { green } from "@material-ui/core/colors";
import Router from "next/router";

const LoginPage = (props) => {
	const [user, setUser] = React.useState({
		email: "",
		password: "",
	});
	const [alert, setAlert] = React.useState({
		value: false,
		error: false,
		listErr: null,
		message: "",
	});
	const [loading, setLoading] = React.useState(false);

	const handleClick = () => {
		console.log(props);
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
				<div className="relative w-full mb-3">
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
				<div className="text-center mt-6">
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
							Masuk
						</button>
					)}
				</div>
				<div className="text-center text-xs text-gray-600 pt-2">
					{!loading && (
						<p>
							Belum punya akun ?{" "}
							<Link href="/register">
								<span className="text-blue-500 cursor-pointer">
									Daftar di sini
								</span>
							</Link>
						</p>
					)}
				</div>
			</form>
		</Layout>
	);
};

export default LoginPage;
