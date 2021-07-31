import "./App.css";
import Navbar from "./components/navbar";
import React from "react";
import { Route } from "react-router-dom";
import AboutPage from "./components/About";
import Home from "./components/Home";
import Packages from "./components/Package";
import Gallary from "./components/Gallary";
// import CoupleloginPage from "./components/CoupleloginPage";
// import PrivateRoute from "./components/PrivateRoute";
// import Couplegallary from "./components/CoupleGallary";
// import Adminpanel from "./components/AdminPanel";

function App() {
  return (
    <>
      <div className="pin" id="pin"></div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/AboutUs" component={AboutPage} />
      <Route exact path="/Packages" component={Packages} />
      <Route exact path="/Gallary" component={Gallary} />
      {/* <Route exact path="/coupleloginpage" component={CoupleloginPage} />
      <PrivateRoute exact path="/adminpanel" component={Adminpanel} />
      <PrivateRoute exact path="/couplegallary" component={Couplegallary} /> */}
    </>
  );
}

export default App;
