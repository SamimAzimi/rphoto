import "./App.css";

import React from "react";
import { Route } from "react-router-dom";
import AboutPage from "./components/About";
import Home from "./components/Home";
import Packages from "./components/Package";
import Gallary from "./components/Gallary";
import Adminpanel from "./components/AdminPanel";
import CoupleloginPage from "./components/CoupleloginPage";
import AdminLogin from "./components/AdminLogin";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import Couplegallary from "./components/CoupleGallary";
import Menu from './components/Menu'
function App() {
  return (
    <>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/AboutUs" component={AboutPage} />
      <Route exact path="/Packages" component={Packages} />
      <Route exact path="/Gallary" component={Gallary} />
      <Route exact path="/AdminLogin" component={AdminLogin} />
      <Route exact path="/coupleloginpage" component={CoupleloginPage} />
      <PrivateRouteAdmin exact path="/AdminPanel" component={Adminpanel} />
      <PrivateRoute exact path="/couplegallary" component={Couplegallary} />
    </>
  );
}

export default App;
