import "./App.css";
// import { motion } from "framer-motion";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/navbar";
import CoupleloginPage from "./components/CoupleloginPage";
import React from "react";
import { Route, useHistory } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Couplegallary from "./components/CoupleGallary";
import Adminpanel from "./components/AdminPanel";
import AboutPage from './components/About'
import { firebaseauth } from "./firebase.config";
import Landingpage from "./components/Landingpage";
function App() {
  // const [isActive, setIsActive] = useState(true);

  const history = useHistory();


    const toggleMenu = () => {
      history.push("/navbar");
      
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
      <Route exact path="/navbar" component={Navbar} />
      <Route exact path="/" component={Landingpage} />
      <Route exact path="/coupleloginpage" component={CoupleloginPage} />
      <PrivateRoute exact path="/adminpanel" component={Adminpanel} />
      <PrivateRoute exact path="/couplegallary" component={Couplegallary} />
      <Route exact path="/about" component={AboutPage} />
    </>
  );
}

export default App;
