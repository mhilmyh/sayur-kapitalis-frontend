import Layout from "../layouts/guest";
import Link from "next/link";
import CircularLoading from "../components/loading/CircularLoading";
import FlexibleAlert from "../components/alert/FlexibleAlert";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/creator/user";

const LoginPage = () => {
	const loading = useSelector((state) => state.loading);
	const alert = useSelector((state) => state.alert);
	const dispatch = useDispatch();

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleChange = (event) => {
		const [name, value] = event.target;
		switch (name) {
			case "email":
				setEmail(value);
			case "password":
				setPassword(value);
			default:
				break;
		}
	};

	const handleClick = () => {
		dispatch(userLogin(email, password));
	};
	return (
		<Layout>
			<form className="w-4/5 max-w-screen-sm shadow-lg p-5 rounded-lg bg-white">
				<FlexibleAlert status={alert}></FlexibleAlert>
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
						<CircularLoading></CircularLoading>
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
					<div>
						<p>
							{"Belum punya akun? "}
							<Link href="/register">
								<span className="text-blue-500 cursor-pointer">
									Daftar di sini
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
				</div>
			</form>
		</Layout>
	);
};

export default React.memo(LoginPage);
