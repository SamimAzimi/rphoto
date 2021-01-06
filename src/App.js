import "./App.css";
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import CoupleGallary from './components/CoupleGallary'
import Gallary from './components/Gallary'
import NotFound from './components/PageNotFound'
import { useState } from "react";

function App() {

  const [isActive, setIsActive] =useState(true)

  return (
    <>

         <Router>
      {isActive ? (<div>>></div>):(<Navbar/>)}
         <Switch>
           <Route exact path='/'></Route>
           <Route  path="/gallary">
             <Gallary/>
           </Route>
           <Route  path="/about">
             <About/>
           </Route>
           <Route path="/contact">
             <Contact/>
           </Route>
           <Route path="/couplegallary">
             <CoupleGallary/>
           </Route>
           <Route path="*">
             <NotFound/>
           </Route>
         </Switch>
        </Router>
        <button type="button" onClick={()=>setIsActive(!isActive)}>
          toggle Button
        </button>
        </>
  );
}

export default App;
