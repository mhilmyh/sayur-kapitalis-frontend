import { ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { theme } from "../contexts/theme";
import BottomNav from "../components/navigation/BottomNav";
import CartFAB from "../components/button/CartFAB";
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
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<main className="w-full flex justify-center items-center">
					{children}
				</main>
				<div className="w-full h-40"></div>
				<CartFAB></CartFAB>
				<Box
					component={(props) => (
						<div
							{...props}
							className="fixed bottom-0 w-full py-2 lg:py-4 bg-white border-t-2 border-gray-200"
						></div>
					)}
				>
					<BottomNav></BottomNav>
				</Box>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default DefaultLayout;
