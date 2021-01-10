import "./App.css";
// import { motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState(true);
  const toggleMenu = () => {
    setIsActive((state) => !state);
  };

  return (
    <>
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
      {isActive ? <Home /> : <Navbar />}
    </>
  );
}

export default App;
