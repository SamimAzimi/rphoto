import "./App.css";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import couple from './images/couple.jpeg'
import groom from './images/groom.jpeg'
import bride from './images/bride.jpeg'
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
function App() {
  const [isActive, setIsActive] = useState(false);
  const [offsetY, setOffsetY] = useState(0)

const handlescroll=()=>{

  setOffsetY(window.pageYOffset)
  console.log(offsetY)
}
  useEffect(()=>{
    window.addEventListener("scroll",handlescroll)
    console.log(offsetY)

    return ()=> window.removeEventListener("scroll",handlescroll)
   
   
  })
  return (
    <>
    
      <button
       
        type="button"
        onClick={() => setIsActive(!isActive)}
      >
        <FontAwesomeIcon icon={faBars}/>
      </button>

    <div className="mainphotos" >
      <div className="couplephoto">
      <Controller vertical="false" >
        <Scene duration={1008} triggerElement="#calltwo" classToggle="#callone">
      <img src={couple} alt="pictureone" />
      </Scene>
      </Controller>
      </div>



      <div className="bridephoto" >

      <img src={bride} alt="pictureone" />

      </div >
      <div className="groomphoto" >
      <img src={groom} alt="pictureone" />

      </div>



    </div>

      <h1 className="rphotographyheadingone"
      style={{
        position: "absolute",
        left: `${setOffsetY}px`
      }}>R Photography</h1>
    </>
  );
}

export default App;
