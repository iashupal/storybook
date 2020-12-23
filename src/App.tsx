import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-calendar/dist/Calendar.css";
import "pretty-checkbox/src/pretty-checkbox.scss";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SecurePage } from "./pages/SecurePage";
import Login from "./components/auth/Login";
import LoginCallback from "./components/auth/LoginCallback";
import { ToastContainer, Zoom } from "react-toastify";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "../src/config/global_styles.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <React.StrictMode>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/login-callback" component={LoginCallback} />
            <Route path="/" component={SecurePage} />
          </Switch>
        </React.StrictMode>
      </BrowserRouter>
      <ToastContainer transition={Zoom} />
    </Fragment>
  );
}

export default App;
