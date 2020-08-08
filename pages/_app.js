import "../styles/main.css";
import "fontsource-roboto";
import store from "../redux/store";
import { Provider } from "react-redux";
import { GlobalProvider } from "../contexts/global";

const Noop = ({ children }) => children;

function App({ Component, pageProps }) {
	const Layout = Component.Layout || Noop;
	return (
		<Provider store={store}>
			<GlobalProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</GlobalProvider>
		</Provider>
	);
}

export default App;
