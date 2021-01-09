import "./App.css";
import {motion} from 'framer-motion'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from './components/Home'
import Navbar from './components/navbar'
import React ,{useState} from 'react';


function App() {
  const [isActive, setIsActive] = useState(true);
  const toggleMenu=()=>{
    setIsActive((state)=>!state)
  }
  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
      >
      <FontAwesomeIcon icon={faBars}  />
      </button>
      {isActive ? (<Home />) : (<Navbar />)}
    </>
  );
}

export default App;
