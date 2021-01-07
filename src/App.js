import "./App.css";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import CoupleGallary from "./components/CoupleGallary";
import Gallary from "./components/Gallary";
import NotFound from "./components/PageNotFound";
import Home from "./components/Home";
import Upload from "./components/upload";
import Packages from "./components/Package";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        classname="menubar"
        type="button"
        onClick={() => setIsActive(!isActive)}
      >
        <FontAwesomeIcon icon={faBars} />{" "}
      </button>
      <h1 className="rphotographyheadingone">R Photography</h1>
      <h3 className="rphotographyheadingthree">Wedding Photography</h3>
      {isActive ? <Gallary /> : <About />}
      <Router>
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
      </Router>
    </>
  );
}

export default App;
