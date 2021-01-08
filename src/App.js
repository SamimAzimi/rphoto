import "./App.css";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Home from './components/Home'
import React ,{useState} from 'react';


function App() {


  const [isActive, setIsActive] = useState(true);
  const toggleMenu=()=>{

    setIsActive(!isActive)
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
      >
      <FontAwesomeIcon icon={faBars}  />
      </button>
      {isActive ? ( <Home /> ) : ( <Home /> )}
    </>
  );
}

export default App;
