import "./App.css";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import couple from './images/couple.jpeg'
import groom from './images/groom.jpeg'
import bride from './images/bride.jpeg'
import React from 'react';
// import Heading from './components/heading'
import { Tween, Timeline } from 'react-gsap';
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
      <Controller>
      <Scene duration={100}
         indicators="true"
          triggerHook="onLeave"
          pin="true"
          reverse="true" 
          triggerElement="#mainPhoto"
          >

            <Timeline target={
      <div id="mainPhoto" className="mainphotos" >

    




      <Controller >
        <Scene duration={100}
         indicators="true"
          triggerHook="onLeave"
          reverse="true" 
          triggerElement="#mainPhoto"
          >
    <Timeline target={ 
      <div className="couplephoto">
      <img src={couple} alt="pictureone" />
      </div> }>
      <Tween 
        from={{Y:"0"}}
        to={{y:"90",
        delay:"0.4",ease: "easeOut",transform:"scale(0.8)"}} >

</Tween>
         </Timeline>
          </Scene>
          </Controller>


      <Controller  vertical="false" >
        <Scene duration={100}
         indicators="true"
          triggerHook="onLeave"
          reverse="true" 
          triggerElement="#mainPhoto"
          classToggle="bridephotoanimation"
          >
        
<Timeline 
target={
  <div className="bridephoto" >

  <img src={bride} alt="pictureone" />

  </div >
} > 
<Tween 

    to={{x:'70%', top:"30%",visibility:"visible",
    delay:"0.4",ease: "easeOut",transform:"scale(0.8)"}} >

</Tween>
</Timeline>
</Scene>
</Controller>
<Controller >
<Scene duration={100}
         indicators="true"
          triggerHook="onLeave"
          reverse="true" 
          triggerElement="#mainPhoto"
          classToggle="bridephotoanimation"
          >
<Timeline 
target={
  <div className="groomphoto" >
  <img src={groom} alt="pictureone" />
  </div>
} > 
<Tween 

    to={{x:'-70%', top:"30%",visibility:"visible",
    delay:"0.4",ease: "easeOut",transform:"scale(0.8)"}} >

</Tween>
</Timeline>
</Scene>
</Controller>
    </div> }>
      
    </Timeline>
  </Scene>
    </Controller>
      <h1 className="rphotographyheadingone"
      style={{
        position: "absolute",
        left: `${setOffsetY}px`,
      }}>R Photography</h1>
    </>
  );
}

export default App;
