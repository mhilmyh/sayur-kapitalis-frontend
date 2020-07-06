import Head from "next/head";
import BottomNavigation from "../components/navigation/BottomNavigation";

export default function Layout(props) {
	return (
		<React.Fragment>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>{props.children}</main>
			<BottomNavigation></BottomNavigation>
		</React.Fragment>
	);
}
