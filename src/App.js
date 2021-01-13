import "./App.css";
// import { motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/navbar";
import Langingpage from "./components/Landingpage";
import CoupleloginPage from "./components/CoupleloginPage";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Authprovider } from "./components/Authprovider";
import Couplegallary from "./components/CoupleGallary";
import Adminpanel from "./components/AdminPanel";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // const [isActive, setIsActive] = useState(true);
  // const toggleMenu = () => {
  //   history.pushState("newdaa", "Navbar", "/navbar");
  // };

  return (
    <>
      <div className="pin" id="pin"></div>
      <div className="menubar" id="menubarid">
        <Link to="/navbar">
          <div className="icons">
            <FontAwesomeIcon
              // onClick={toggleMenu}
              className="fanavbar"
              style={{ color: "#bf8faa" }}
              icon={faBars}
            />
          </div>
        </Link>
      </div>
      <Authprovider>
        <Switch>
          <Route exact path="/" render={() => <Langingpage />} />
          <Route exact path="/navbar" render={() => <Navbar />} />
          <Route
            exact
            path="/coupleloginpage"
            render={() => <CoupleloginPage />}
          />
          <PrivateRoute
            exact
            path="/adminpanel"
            render={() => <Adminpanel />}
          />
          <PrivateRoute
            exact
            path="/couplegallary"
            render={() => <Couplegallary />}
          />
        </Switch>
      </Authprovider>
    </>
  );
}

export default App;
