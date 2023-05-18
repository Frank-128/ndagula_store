import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContext } from "./contexts/AuthContext";
import {UserAuthContext} from "./contexts/UserAuthContext";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider store={store}>

    <UserAuthContext>
      <AuthContext>
        <App />
      </AuthContext>
    </UserAuthContext>
  </Provider>
  </React.StrictMode>
);
