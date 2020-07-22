import "../styles/main.css";
import "fontsource-roboto";
import { GlobalProvider } from "../contexts/global";

function App({ Component, pageProps }) {
	return (
		<GlobalProvider>
			<Component {...pageProps} />
		</GlobalProvider>
	);
}

export default App;
