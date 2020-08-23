import EasyCard from "../card/EasyCard";
import FlexibleAlert from "../../components/alert/FlexibleAlert";
import CircularLoad from "../../components/loading/CircularLoad";
import Selection from "../../components/input/Selection";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { userLogout, userUpdate } from "../../redux/actions/creator/user";
import { alertReset } from "../../redux/actions/creator/alert";
import { useRouter } from "next/router";
import { coverageFetch } from "../../redux/actions/creator/coverage";

const ProfileSection = ({ user = {} }) => {
	const dispatch = useDispatch();
	const alert = useSelector((state) => state.alert);
	const coverageArea = useSelector((state) => state.coverageArea);
	const loading = useSelector((state) => state.loading);
	const router = useRouter();

	const [firstName, setFirstName] = React.useState(user.first_name);
	const [lastName, setLastName] = React.useState(user.last_name);
	const [address, setAddress] = React.useState(user.address);
	const [coverageID, setCoverageID] = React.useState(user.coverage_area_id);

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "first_name":
				setFirstName(value);
				break;
			case "last_name":
				setLastName(value);
				break;
			case "address":
				setAddress(value);
				break;
			default:
				break;
		}
	};
	const handleClickLogout = () => {
		dispatch(userLogout(router));
	};
	const handleClickUpdate = () => {
		const data = new FormData();
		data.set("first_name", firstName);
		data.set("last_name", lastName);
		data.set("address", address);
		data.set("coverage_area_id", coverageID);
		dispatch(userUpdate(data));
	};

	React.useEffect(() => {
		dispatch(alertReset());
		dispatch(coverageFetch());
	}, []);

	return (
		<EasyCard>
			<FlexibleAlert {...alert}></FlexibleAlert>
			<form noValidate>
				<div className="w-full mb-4 mt-2">
					<TextField
						name="first_name"
						label="Nama Depan"
						fullWidth={true}
						value={firstName}
						onChange={(e) => handleChange(e)}
						InputLabelProps={{ shrink: true }}
					/>
				</div>
				<div className="w-full mb-4 mt-2">
					<TextField
						name="last_name"
						label="Nama Belakang"
						fullWidth={true}
						value={lastName}
						onChange={(e) => handleChange(e)}
						InputLabelProps={{ shrink: true }}
					/>
				</div>
				<div className="w-full mb-4 mt-2">
					<TextField
						name="address"
						label="Alamat"
						fullWidth={true}
						value={address}
						onChange={(e) => handleChange(e)}
						InputLabelProps={{ shrink: true }}
					/>
				</div>
				{/* <div className="w-full mb-4 mt-2">
					<Selection
						entity="Coverage Area"
						dataLabel="area"
						value={coverageID}
						data={coverageArea}
						onChange={(e) => setCoverageID(e.target.value)}
					/>
				</div> */}
				<div className="w-full mb-4 mt-2 flex justify-center items-center">
					{loading ? (
						<CircularLoad></CircularLoad>
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
