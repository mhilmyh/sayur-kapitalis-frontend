import GuestLayout from "../layouts/guest";
import EasyTextfield from "../components/input/EasyTextField";
import EasyButton from "../components/button/EasyButton";
import FlexibleAlert from "../components/alert/FlexibleAlert";
import CircularLoad from "../components/loading/CircularLoad";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { userLogin } from "../redux/actions/creator/user";
import { alertReset } from "../redux/actions/creator/alert";
import { useRouter } from "next/router";

const LoginPage = () => {
	const dispatch = useDispatch();
	const alert = useSelector((state) => state.alert);
	const loading = useSelector((state) => state.loading);

	const router = useRouter();

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const handleClick = () => {
		dispatch(userLogin(email, password, router));
	};
	React.useEffect(() => {
		dispatch(alertReset());
	}, []);
	return (
		<div className="w-4/5 p-4 max-w-screen-sm bg-white rounded shadow-lg">
			<FlexibleAlert {...alert}></FlexibleAlert>
			<form>
				<EasyTextfield
					label="Email"
					type="email"
					name="email"
					placeholder="test@mail.com"
					onChange={(e) => setEmail(e.target.value)}
				></EasyTextfield>
				<EasyTextfield
					label="Password"
					type="password"
					name="password"
					placeholder="******"
					onChange={(e) => setPassword(e.target.value)}
				></EasyTextfield>
				{loading ? (
					<CircularLoad></CircularLoad>
				) : (
					<React.Fragment>
						<EasyButton text="masuk" onClick={() => handleClick()}></EasyButton>
						<div className="text-center text-xs text-gray-600 pt-2">
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
					</React.Fragment>
				)}
			</form>
		</div>
	);
};

LoginPage.Layout = GuestLayout;

export default LoginPage;
