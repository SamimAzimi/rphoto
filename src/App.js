import "./App.css";
// import { motion } from "framer-motion";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/navbar";
import Langingpage from "./components/Landingpage";
import CoupleloginPage from "./components/CoupleloginPage";
import React from "react";
import { Route, useHistory } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Couplegallary from "./components/CoupleGallary";
import Adminpanel from "./components/AdminPanel";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firebaseauth } from "./firebase.config";
function App() {
  // const [isActive, setIsActive] = useState(true);

  const history = useHistory();
  const toggleMenu = () => {
    history.push("/navbar");
    window.location.reload();
  };
  return (
    <>
      <div className="pin" id="pin"></div>
      <div className="menubar" id="menubarid">
        <div className="icons">
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="fanavbar"
            style={{ color: "#bf8faa" }}
            icon={faBars}
          />
        </div>
      </div>
      <div className="signoutButton" onClick={() => firebaseauth.signOut()}>
        <FontAwesomeIcon
          className="fa-lg"
          style={{ color: "#bf8faa" }}
          icon={faSignOutAlt}
        />
      </div>
      <Route exact path="/" component={Langingpage} />
      <Route exact path="/navbar" component={Navbar} />
      <Route exact path="/coupleloginpage" component={CoupleloginPage} />
      <PrivateRoute exact path="/adminpanel" component={Adminpanel} />
      <PrivateRoute exact path="/couplegallary" component={Couplegallary} />
    </>
  );
}

export default App;
