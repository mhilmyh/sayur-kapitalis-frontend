import Layout from "../layouts/guest";
import Link from "next/link";

const LoginPage = () => {
	return (
		<Layout>
			<form className="w-3/4 max-w-screen-sm shadow-lg p-5 rounded-lg bg-white">
				<div className="relative w-full mb-3">
					<label
						className="block uppercase text-gray-700 text-xs font-bold mb-2"
						for="grid-password"
					>
						Telepon
					</label>
					<input
						type="text"
						name="telp"
						className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
						placeholder="Nomor Telepon"
					></input>
				</div>
				<div className="relative w-full mb-3">
					<label
						className="block uppercase text-gray-700 text-xs font-bold mb-2"
						for="grid-password"
					>
						Password
					</label>
					<input
						type="password"
						name="pass"
						className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
						placeholder="Password"
					></input>
				</div>
				<div className="text-center mt-6">
					<button
						className="bg-green-500 text-gray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow-lg mb-1 w-full"
						type="button"
					>
						Masuk
					</button>
				</div>
				<div className="text-center text-xs text-gray-600 pt-2">
					<p>
						Belum punya akun ?{" "}
						<Link href="/register">
							<span className="text-blue-500 cursor-pointer">
								Daftar di sini
							</span>
						</Link>
					</p>
				</div>
			</form>
		</Layout>
	);
};

export default LoginPage;
