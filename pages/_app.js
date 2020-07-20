import "../styles/main.css";
import { GlobalProvider } from "../contexts/global";

function App({ Component, pageProps }) {
	return (
		<GlobalProvider>
			<Component {...pageProps} />
		</GlobalProvider>
	);
}

export default App;
