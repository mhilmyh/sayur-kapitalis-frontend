import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../contexts/theme";
import Head from "next/head";

const DefaultLayout = ({ children }) => {
	return (
		<React.Fragment>
			<Head>
				<title>Bukit Royal App</title>
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
			<ThemeProvider theme={theme}>
				<main className="w-full flex justify-center items-center">
					{children}
				</main>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default DefaultLayout;
