import "./App.css";
// import { motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/navbar";
import Langingpage from "./components/Landingpage";
import CoupleloginPage from "./components/CoupleloginPage";
import React from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
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
    <Redirect to={"/navbar"} />;
  };
  return (
    <>
      <div className="pin" id="pin"></div>
      <div className="menubar" id="menubarid">
        {/* <Link to="/navbar"> */}
        <div className="icons">
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="fanavbar"
            style={{ color: "#bf8faa" }}
            icon={faBars}
          />
        </div>
        {/* </Link> */}
      </div>
      <div className="signoutButton">
        <button onClick={() => firebaseauth.signOut()}>Sign Out</button>
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
