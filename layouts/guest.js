import Head from "next/head";

export default function Layout(props) {
	return (
		<React.Fragment>
			<Head>
				<title>Sayurmayur App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="min-h-screen w-full bg-green-500 flex justify-center content-center items-center">
				<div className="flex justify-center items-center content-center h-full w-full">
					{props.children}
				</div>
			</main>
		</React.Fragment>
	);
}
