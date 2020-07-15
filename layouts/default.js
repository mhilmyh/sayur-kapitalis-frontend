import Head from "next/head";
import BottomNavigation from "../components/navigation/BottomNav";

export default function Layout(props) {
	return (
		<React.Fragment>
			<Head>
				<title>Sayurmayur App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
			</Head>
			<main>{props.children}</main>
			<div className="spacing-small"></div>
			<BottomNavigation pathname={props.pathname}></BottomNavigation>
		</React.Fragment>
	);
}
