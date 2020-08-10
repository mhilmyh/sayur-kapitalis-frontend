import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../contexts/theme";
import Head from "next/head";
import { Fab } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const GuestLayout = ({ children }) => {
	const scrollTop = () => {
		if (!!window) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};
	return (
		<React.Fragment>
			<Head>
				<title>Bukit Royal App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider theme={theme}>
				<main className="w-full min-h-screen flex justify-center items-center bg-green-500">
					{children}
					<div className="fixed bottom-0 right-0 m-5">
						<Fab
							size="small"
							className="bg-yellow-400"
							onClick={() => scrollTop()}
						>
							<ExpandLessIcon></ExpandLessIcon>
						</Fab>
					</div>
				</main>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default GuestLayout;
