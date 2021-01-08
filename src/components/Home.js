
import "../App.css"
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { useState, useEffect } from "react";
import Heading from './heading'
import couple from '../images/couple.jpeg'
import groom from '../images/groom.jpeg'
import bride from '../images/bride.jpeg'
function Home() {
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
      <Controller>
      <Scene duration={1200}
         indicators="true"
          triggerHook="onLeave"
          pin={true}
          reverse="true" 
          triggerElement="#mainPhoto"
          classToggle="mainheader"
          >
            {/* main photo and company name */}
     <div id="mainPhoto" className="mainphotos" >
      <h1 className="rphotographyheadingone" style={{position: "fixed",right: `${setOffsetY}px`,
      }}>R Photography</h1>




      <Controller >
        <Scene duration={1000}
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
        to={{
        delay:"0.7",ease: "back.out(0.-10)",transform:"scale(0.6)"}} >

</Tween>
         </Timeline>
          </Scene>
          </Controller>


      <Controller  vertical="false" >
        <Scene duration={1000}
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
    to={{x:'70%', top:"20%",visibility:"visible",
    delay:"1.8",ease: "back.out(0.-10)",transform:"scale(0.8)"}} >

</Tween>
</Timeline>
</Scene>
</Controller>
<Controller >
<Scene duration={1000}
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

    to={{x:'-70%', top:"20%",visibility:"visible",
    delay:"1.8",ease: "back.out(0.-10)",transform:"scale(0.8)"}} >

</Tween>
</Timeline>
</Scene>
</Controller>
    </div> 


  </Scene>
    </Controller> 
    <Heading />
    </>
  );
}

export default Home;
