import React from "react";
import "./thirdhome.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

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
          <div className="imageone">image</div>
          <div className="imageone">image</div>
          <div className="imageone">image</div>
          <div className="imageone">image</div>
        </div>
      </Scene>
    </Controller>
  </>
);

export default ThirdHome;
