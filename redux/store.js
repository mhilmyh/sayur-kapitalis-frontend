import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";

const persistConfig = {
	key: "X-APP-STATE",
	storage,
	whitelist: [
		"user",
		"categories",
		"orders",
		"shipmentTimes",
		"accounts",
		"carts",
	],
	stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
);

export const persistor = persistStore(store);

export default store;
