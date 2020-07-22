import useGlobal from "../../contexts/global";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import DialogUpdateDataDiri from "../modal/DialogUpdateDataDiri";
import DialogRegistCust from "../modal/DialogRegistCust";
import { CircularProgress } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export default React.memo(() => {
	const ctx = useGlobal();
	const style = {
		color: green[500],
	};

	const [loading, setLoading] = React.useState(false);
	const [openUpdate, setOpenUpdate] = React.useState(false);
	const [openRegist, setOpenRegist] = React.useState(false);

	const handleCloseUpdate = (value) => {
		setOpenUpdate(value);
	};

	const handleCloseRegist = (value) => {
		setOpenRegist(value);
	};

	const handleClickUpdate = () => {
		setOpenUpdate(true);
	};

	const handleClickRegist = () => {
		setOpenRegist(true);
	};

	const handleClickLogout = async () => {
		await ctx.doLogout();
	};

	React.useEffect(() => {
		ctx.getLastUser();
	}, []);

	return (
		<React.Fragment>
			<div className="w-full flex justify-end px-5 pt-5">
				{ctx.loading ? (
					<CircularProgress
						size={40}
						thickness={6}
						disableShrink
						style={style}
					></CircularProgress>
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
									{ctx.user.email ? ctx.user.email : "Tidak ada data"}
								</div>
							</div>
							<div className="flex bg-gray-200 content-center rounded p-2 m-2">
								<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
									Tipe Akun
								</div>
								<div className="flex-1 text-gray-600 font-light text-xs antialiased">
									{parseInt(ctx.user.is_agent, 10) === 1 ? "Agen" : "Pelanggan"}
								</div>
							</div>
							<div className="flex bg-gray-200 content-center rounded p-2 m-2">
								<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
									Nama
								</div>
								<div className="flex-1 text-gray-600 font-light text-xs antialiased">
									{parseInt(ctx.user.is_agent, 10) === 1
										? ctx.user.agent.first_name + " " + ctx.user.agent.last_name
										: ctx.user.customer.first_name +
										  " " +
										  ctx.user.customer.last_name}
								</div>
							</div>
							<div className="flex bg-gray-200 content-center rounded p-2 m-2">
								<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
									Nomor Telepon
								</div>
								<div className="flex-1 text-gray-600 font-light text-xs antialiased">
									{parseInt(ctx.user.is_agent, 10) === 1
										? ctx.user.agent.phone_number
										: ctx.user.customer.phone_number}
								</div>
							</div>
							<div className="flex bg-gray-200 content-center rounded p-2 m-2">
								<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
									Alamat
								</div>
								<div className="flex-1 text-gray-600 font-light text-xs antialiased">
									{parseInt(ctx.user.is_agent, 10) === 1
										? ctx.user.agent.address
										: ctx.user.customer.address}
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
				<div className="flex-1 p-5 max-w-screen-md">
					<Card className="shadow-lg p-0">
						<CardHeader
							title={
								parseInt(ctx.user.is_agent, 10)
									? "Daftar Pelanggan"
									: "Agen Langganan"
							}
							className="bg-green-500 text-gray-200"
						></CardHeader>
						<CardContent className="p-0">
							{parseInt(ctx.user.is_agent, 10) ? (
								<List dense={true} className="h-64 overflow-y-auto">
									<div className="bg-gray-200 rounded m-5">
										<ListItem className="flex justify-between">
											<div className="bg-green-400 h-2 w-2 mx-3 rounded-full"></div>
											<div className="w-5"></div>
											<ListItemText
												primary="Zulkifli Hasibbuuubuan"
												secondary="08888888888"
											></ListItemText>
											<div>
												<Button size="small" className="text-red-500 rounded">
													Hapus
												</Button>
											</div>
										</ListItem>
									</div>
									<div className="bg-gray-200 rounded m-5">
										<ListItem className="flex justify-between">
											<div className="bg-green-400 h-2 w-2 m-3 rounded-full"></div>
											<div className="w-5"></div>
											<ListItemText
												primary="Zulkifli Hasibbuuubuan"
												secondary="08888888888"
											></ListItemText>
											<div>
												<Button size="small" className="text-red-500 rounded">
													Hapus
												</Button>
											</div>
										</ListItem>
									</div>
								</List>
							) : (
								<div className="pt-4">
									<div className="flex bg-gray-200 content-center rounded p-2 m-2">
										<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
											Email
										</div>
										<div className="flex-1 text-gray-600 font-light text-xs antialiased">
											{ctx.user.email ? ctx.user.email : "Tidak ada data"}
										</div>
									</div>
									<div className="flex bg-gray-200 content-center rounded p-2 m-2">
										<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
											Tipe Akun
										</div>
										<div className="flex-1 text-gray-600 font-light text-xs antialiased">
											{parseInt(ctx.user.is_agent, 10) === 1
												? "Agen"
												: "Pelanggan"}
										</div>
									</div>
									<div className="flex bg-gray-200 content-center rounded p-2 m-2">
										<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
											Nama
										</div>
										<div className="flex-1 text-gray-600 font-light text-xs antialiased">
											{parseInt(ctx.user.is_agent, 10) === 1
												? ctx.user.agent.first_name +
												  " " +
												  ctx.user.agent.last_name
												: ctx.user.customer.first_name +
												  " " +
												  ctx.user.customer.last_name}
										</div>
									</div>
									<div className="flex bg-gray-200 content-center rounded p-2 m-2">
										<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
											Nomor Telepon
										</div>
										<div className="flex-1 text-gray-600 font-light text-xs antialiased">
											{parseInt(ctx.user.is_agent, 10) === 1
												? ctx.user.agent.phone_number
												: ctx.user.customer.phone_number}
										</div>
									</div>
									<div className="flex bg-gray-200 content-center rounded p-2 m-2">
										<div className="flex-1 text-gray-600 font-bold uppercase text-xs ml-4">
											Alamat
										</div>
										<div className="flex-1 text-gray-600 font-light text-xs antialiased">
											{parseInt(ctx.user.is_agent, 10) === 1
												? ctx.user.agent.address
												: ctx.user.customer.address}
										</div>
									</div>
								</div>
							)}
						</CardContent>
						<CardActions className="flex justify-center pb-5">
							{parseInt(ctx.user.is_agent, 10) ? (
								<Button
									size="large"
									className="bg-green-500 shadow-lg text-gray-100 rounded"
									onClick={() => handleClickRegist()}
								>
									Tambah Pelanggan
								</Button>
							) : (
								<Button
									size="large"
									className="bg-green-500 shadow-lg text-gray-100 rounded"
									onClick={() => handleClickRegist()}
								>
									Hapus Agen
								</Button>
							)}
						</CardActions>
					</Card>
				</div>
				<DialogUpdateDataDiri
					onClose={handleCloseUpdate}
					open={openUpdate}
				></DialogUpdateDataDiri>
				<DialogRegistCust
					onClose={handleCloseRegist}
					open={openRegist}
				></DialogRegistCust>
			</div>
		</React.Fragment>
	);
});
