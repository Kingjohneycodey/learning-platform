import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";
import chatReducer from "./reducers/chatReducer";
import livestreamReducer from "./reducers/livestreamReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  livestream: livestreamReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
