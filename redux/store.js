import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
