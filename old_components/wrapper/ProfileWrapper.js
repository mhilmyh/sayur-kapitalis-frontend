import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import DialogUpdateDataDiri from "../modal/DialogUpdateDataDiri";
import DialogRegistCust from "../modal/DialogRegistCust";
import DialogHapusAgen from "../modal/DialogHapusAgen";
import { useSelector } from "react-redux";
import CircularLoading from "../loading/CircularLoading";

export default React.memo(() => {
	const loading = useSelector((state) => state.loading);

	const [openRegist, setOpenRegist] = React.useState(false);
	const [openHapusAgen, setOpenHapusAgen] = React.useState(false);
	const [openUpdate, setOpenUpdate] = React.useState(false);

	const handleCloseRegist = () => {
		setOpenRegist(!openRegist);
	};
	const handleCloseHapusAgen = () => {
		setOpenHapusAgen(!openHapusAgen);
	};
	const handleCloseUpdate = () => {
		setOpenUpdate(!openUpdate);
	};

	return (
		<React.Fragment>
			<div className="w-full flex justify-end px-5 pt-5">
				{loading ? (
					<CircularLoading></CircularLoading>
				) : (
					<Button
						className="bg-green-500 text-gray-100"
						size="small"
						onClick={() => handleClickLogout()}
					>
						Keluar
					</Button>
				)}
			</div>
			<div className="flex flex-wrap mb-4 justify-center">
				<div className="flex-1 p-5 max-w-screen-md">
					<Card className="shadow-lg">
						<CardHeader
							title="Data Diri"
							className="bg-green-500 text-gray-200"
						></CardHeader>
						<CardContent>
							<div className="flex bg-gray-200 content-center rounded p-2 m-2">
								<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
									Email
								</div>
								<div className="flex-1 text-gray-600 font-light text-xs antialiased">
									...
								</div>
							</div>
							<div className="flex bg-gray-200 content-center rounded p-2 m-2">
								<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
									Tipe Akun
								</div>
								<div className="flex-1 text-gray-600 font-light text-xs antialiased">
									...
								</div>
							</div>
							<div className="flex bg-gray-200 content-center rounded p-2 m-2">
								<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
									Nama
								</div>
								<div className="flex-1 text-gray-600 font-light text-xs antialiased">
									...
								</div>
							</div>
							<div className="flex bg-gray-200 content-center rounded p-2 m-2">
								<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
									Nomor Telepon
								</div>
								<div className="flex-1 text-gray-600 font-light text-xs antialiased">
									...
								</div>
							</div>
							<div className="flex bg-gray-200 content-center rounded p-2 m-2">
								<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
									Alamat
								</div>
								<div className="flex-1 text-gray-600 font-light text-xs antialiased">
									...
								</div>
							</div>
						</CardContent>
						<CardActions className="flex justify-center pb-5">
							<Button
								size="large"
								className="bg-green-500 shadow-lg text-gray-100 rounded"
								onClick={() => handleClickUpdate()}
							>
								Update Data
							</Button>
						</CardActions>
					</Card>
				</div>
				<DialogUpdateDataDiri
					onClose={handleCloseUpdate}
					open={openUpdate}
					initData={
						user.is_agent
							? user.agent != null && user.agent
							: user.customer != null && user.customer
					}
				></DialogUpdateDataDiri>
				<DialogRegistCust
					onClose={handleCloseRegist}
					open={openRegist}
				></DialogRegistCust>
				<DialogHapusAgen
					onClose={handleCloseHapusAgen}
					open={openHapusAgen}
				></DialogHapusAgen>
			</div>
		</React.Fragment>
	);
});
