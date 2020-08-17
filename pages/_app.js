import "../styles/main.css";
import "fontsource-roboto";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store";
import { Provider } from "react-redux";
import { GlobalProvider } from "../contexts/global";
import CircularLoad from "../components/loading/CircularLoad";

const Noop = ({ children }) => children;

function App({ Component, pageProps }) {
	const Layout = Component.Layout || Noop;
	return (
		<Provider store={store}>
			<PersistGate
				loading={<CircularLoad fullWidth={true}></CircularLoad>}
				persistor={persistor}
			>
				<GlobalProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</GlobalProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
