import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Authprovider } from "./components/Authcontext";
ReactDOM.render(
  <Router>
    <Authprovider>
      <App />
    </Authprovider>
  </Router>,

  document.getElementById("root")
);
