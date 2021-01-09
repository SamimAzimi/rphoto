import "./App.css";
import { motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState(true);
  const toggleMenu = () => {
    setIsActive((state) => !state);
  };
  return (
    <>
      <button type="button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isActive ? <Home /> : <Navbar />}

      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallary">
            <Gallary />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <About />
          </Route>
          <Route path="/couplegallary">
            <CoupleGallary />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/packages">
            <Packages />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
