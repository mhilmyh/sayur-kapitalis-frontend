import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { persistStore, persistReducer, createMigrate } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const migrations = {
  0: (state) => {
    // migration clear out x state
    return {
      ...state,
    };
  },
  1: (state) => {
    // migration to keep only x state
    return {
      x: state.x,
    };
  },
};

const persistConfig = {
  key: "X-APP-STATE",
  storage,
  version: 0,
  blacklist: [
    "loading",
    "alert",
    "coverageArea",
    "informations",
    "headings",
    "customers",
    "provinces",
    "cities",
    "districts",
  ],
  migrate: createMigrate(migrations, { debug: false }),
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
