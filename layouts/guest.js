import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../contexts/theme";
import Head from "next/head";

const GuestLayout = ({ children }) => {
	return (
		<React.Fragment>
			<Head>
				<title>Bukit Royal App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider theme={theme}>
				<main className="w-full min-h-screen flex justify-center items-center">
					{children}
				</main>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default GuestLayout;
