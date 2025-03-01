import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; // Use named import
import { combineReducers } from "redux";
import chatReducer from "./reducers/chatReducer";
import streamReducer from "./reducers/streamReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  livestream: streamReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
