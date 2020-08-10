import EasyCard from "../card/EasyCard";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../../redux/actions/creator/user";
import CircularLoad from "../loading/CircularLoad";
const ChangePassSection = () => {
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();

	const [oldPass, setOldPass] = React.useState("");
	const [newPass, setNewPass] = React.useState("");

	const scrollTop = () => {
		if (!!window) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const handleClickResetPass = () => {
		const data = new FormData();
		data.set("old_password", oldPass);
		data.set("new_password", newPass);
		dispatch(userUpdate(data));
		scrollTop();
	};

	return (
		<EasyCard>
			<form noValidate>
				<div className="mb-4 mt-2">
					<TextField
						label="Password Lama"
						type="password"
						value={oldPass}
						onChange={(e) => setOldPass(e.target.value)}
						fullWidth={true}
						InputLabelProps={{ shrink: true }}
					/>
				</div>
				<div className="mb-4 mt-2">
					<TextField
						label="Password Baru"
						type="password"
						value={newPass}
						onChange={(e) => setNewPass(e.target.value)}
						fullWidth={true}
						InputLabelProps={{ shrink: true }}
					/>
				</div>
				<div className="w-full flex justify-end">
					{loading ? (
						<CircularLoad></CircularLoad>
					) : (
						<div
							className="cursor-pointer w-1/2 rounded text-center bg-green-500 text-gray-100 text-sm font-semibold px-2 py-1 ml-2"
							onClick={() => handleClickResetPass()}
						>
							Reset Password
						</div>
					)}
				</div>
			</form>
		</EasyCard>
	);
};

export default React.memo(ChangePassSection);
