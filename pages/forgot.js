import GuestLayout from "../layouts/guest";
import EasyTextfield from "../components/input/EasyTextField";
import EasyButton from "../components/button/EasyButton";
import FlexibleAlert from "../components/alert/FlexibleAlert";
import CircularLoad from "../components/loading/CircularLoad";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { userForgotPassword } from "../redux/actions/creator/user";
import { alertReset } from "../redux/actions/creator/alert";

const ForgotPage = () => {
	const dispatch = useDispatch();
	const alert = useSelector((state) => state.alert);
	const loading = useSelector((state) => state.loading);

	const [email, setEmail] = React.useState("");

	const handleClick = () => {
		dispatch(userForgotPassword(email));
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
				{loading ? (
					<CircularLoad></CircularLoad>
				) : (
					<React.Fragment>
						<EasyButton
							text="kirim reset password"
							onClick={() => handleClick()}
						></EasyButton>
						<div className="text-center text-xs text-gray-600 pt-2">
							<p>
								{"Sudah punya akun? "}
								<Link href="/login">
									<span className="text-blue-500 cursor-pointer">
										Pergi ke sini
									</span>
								</Link>
							</p>
							<p>
								{"Belum punya akun? "}
								<Link href="/register">
									<span className="text-blue-500 cursor-pointer">
										Daftar di sini
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

ForgotPage.Layout = GuestLayout;

export default ForgotPage;
