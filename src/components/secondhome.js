
import "./secondhome.css"
import purposeImage from '../images/sittingcouple.jpeg'
import engagementcoupleblack from '../images/engagementcoupleblack.jpeg'
import nearkissImage from '../images/nearkiss.jpeg'
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import ThirdHome from './ThirdHome'
function SecondHome() {
  return (
    <>
    <Controller >
        <div id="startanimation"></div>
    <Scene duration={1200}
         indicators="true"
          triggerHook="onLeave"
          pin={true}
          reverse="true" 
          triggerElement="#startanimation"
          >
     <div id="engagementpage" className="engagmentpage">

     <Controller >
    <Scene duration={120}
         indicators="true"
          triggerHook="onLeave"
          reverse="true" 
          triggerElement="#startanimation"
          >
        <Timeline target={
        <h4 className="pageName">Wedding Photography</h4> }>
        <Tween 
        from={
            { x:"1%", top:"0%",
                opacity:0.
            }
            } 
            to={
                {opacity:0.9,
                    x:"10%",
                    top:"50%",
                    duration:"10",
                    delay:0.5,ease: "back.out(0.-10)"}
                } >
            </Tween>
            </Timeline>
        </Scene>
        </Controller>
          
    <div className="engagmentphotos"> 

        <div className="engagmentcouple">
        <img src={purposeImage} alt="purpose" />
        </div>

        <Controller >
    <Scene duration={460}
         indicators="true"
          triggerHook="onLeave"
          reverse="true" 
          triggerElement="#startanimation"
          classToggle="sideimagesanimations"
          >
        <Timeline target={
    <div>
        <div className="fiance">
        <img src={engagementcoupleblack} alt="purpose" /> 
        </div>
        <div className="fiancee">
        <img src={nearkissImage} alt="purpose" />
        </div>

    </div>}>
    <Tween 
        from={
            { opacity:"0.0",
            }
            }
            
            to={
                {opacity:0.9,
                    delay:0.5,ease: "back.out(0.-10)"}
                } >
            </Tween>
    </Timeline>
        </Scene>
        </Controller>
    </div>

    </div>
        </Scene>
    </Controller>
    <ThirdHome />
</>
  );
}

export default SecondHome;
