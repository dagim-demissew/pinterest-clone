import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./roorReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
});

export { store };
