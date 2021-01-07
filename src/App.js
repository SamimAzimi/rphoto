import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import CoupleGallary from "./components/CoupleGallary";
import Gallary from "./components/Gallary";
import NotFound from "./components/PageNotFound";
import Home from "./components/Home";
import Upload from './components/upload'

function App() {
  return (
    <>
      <h1 className="rphotographyheadingone">Welcome To Rphotography </h1>
      <h3 className="rphotographyheadingthree">Wedding Photography</h3>
      <Router>
        <Navbar />
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
            <Contact />
          </Route>
          <Route path="/couplegallary">
            <CoupleGallary />
          </Route>
          <Route path="/upload">
            <Upload />
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
