import "../styles/main.css";
import "fontsource-roboto";
import store from "../redux/store";
import { Provider } from "react-redux";
import { GlobalProvider } from "../contexts/global";

function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<GlobalProvider>
				<Component {...pageProps} />
			</GlobalProvider>
		</Provider>
	);
}

export default App;
