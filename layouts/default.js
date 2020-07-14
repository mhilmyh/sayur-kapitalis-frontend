import Head from "next/head";
import BottomNavigation from "../components/navigation/BottomNav";

export default function Layout(props) {
	return (
		<React.Fragment>
			<Head>
				<title>Sayurmayur App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>{props.children}</main>
			<div className="spacing-small"></div>
			<BottomNavigation pathname={props.pathname}></BottomNavigation>
		</React.Fragment>
	);
}
