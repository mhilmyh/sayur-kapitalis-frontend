import EasyCard from "../card/EasyCard";
import FlexibleAlert from "../../components/alert/FlexibleAlert";
import CircularLoad from "../../components/loading/CircularLoad";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/actions/creator/user";
import { useRouter } from "next/router";
import { alertReset } from "../../redux/actions/creator/alert";
const ProfileSection = ({ currentUser = {} }) => {
	const dispatch = useDispatch();
	const alert = useSelector((state) => state.alert);
	const loading = useSelector((state) => state.loading);
	const router = useRouter();

	const [user, setUser] = React.useState(currentUser);

	const handleClickLogout = () => {
		dispatch(userLogout(router));
	};
	const handleClickUpdate = () => {};

	React.useEffect(() => {
		dispatch(alertReset());
	}, []);
	return (
		<EasyCard>
			<FlexibleAlert {...alert}></FlexibleAlert>
			<form noValidate>
				<div className="w-full mb-4 mt-2">
					<TextField
						label="Nama Depan"
						fullWidth={true}
						InputLabelProps={{ shrink: true }}
					/>
				</div>
				<div className="w-full mb-4 mt-2">
					<TextField
						label="Nama Belakang"
						fullWidth={true}
						InputLabelProps={{ shrink: true }}
					/>
				</div>
				<div className="w-full mb-4 mt-2">
					<TextField
						label="Alamat"
						fullWidth={true}
						InputLabelProps={{ shrink: true }}
					/>
				</div>
				<div className="w-full mb-4 mt-2 flex justify-center items-center">
					{loading ? (
						<CircularProgress></CircularProgress>
					) : (
						<React.Fragment>
							<div
								className="cursor-pointer w-1/2 rounded text-center bg-gray-300 text-gray-700 text-sm font-semibold px-2 py-1 mr-2"
								onClick={() => handleClickLogout()}
							>
								Logout
							</div>
							<div
								className="cursor-pointer w-1/2 rounded text-center bg-green-500 text-gray-100 text-sm font-semibold px-2 py-1 ml-2"
								onClick={() => handleClickUpdate()}
							>
								Update
							</div>
						</React.Fragment>
					)}
				</div>
			</form>
		</EasyCard>
	);
};

export default React.memo(ProfileSection);
