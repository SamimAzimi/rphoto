import React from "react";
import "./thirdhome.css";
import { Controller, Scene } from "react-scrollmagic";
// import { Tween, Timeline } from "react-gsap";

const ThirdHome = () => (
  <>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration={1200}
        indicators="true"
        pin={{ pushFollowers: true, spacerClass: "firstpagecontainer" }}
      >
        <div className="ThirdPageContainer">
          <div className="leftsideanimation">
            <div>
              <img src="" alt="leftsidebaranimation"></img>
            </div>
            <div>
              <img src="" alt="leftsidebaranimation"></img>
            </div>
            <div>
              <img src="" alt="leftsidebaranimation"></img>
            </div>
          </div>
          <div className="centersideanimation">
            <div>
              <img src="" alt="centerimage"></img>
            </div>
          </div>
          <div className="rightsideanimation">
            <div>
              <img src="" alt="rightidebaranimation"></img>
            </div>
            <div>
              <img src="" alt="rightsidebaranimation"></img>
            </div>
            <div>
              <img src="" alt="rightsidebaranimation"></img>
            </div>
          </div>
        </div>
      </Scene>
    </Controller>
  </>
);

export default ThirdHome;
