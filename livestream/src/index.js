import React from "react";
import ReactDOM from "react-dom/client"; // React 18 API
import { Provider } from "react-redux";
import store from "./store"; // Make sure the path is correct
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);