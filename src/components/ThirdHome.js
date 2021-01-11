import React from "react";
import "./thirdhome.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import LeftUp from "../images/weddingcake.jpeg";
import LeftDown from "../images/weddingrings.jpeg";
import LeftCenter from "../images/groomtieing.jpeg";
import RightUp from "../images/brideboqute.jpeg";
import RightDown from "../images/brightcouplephotos.jpg";
import RightCenter from "../images/flowerandshoes.jpg";
import Center from "../images/brightcouplephotos3.jpg";
const ThirdHome = () => (
  <>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration={1200}
        reverse={true}
        indicators="true"
        pin={{ pushFollowers: true, spacerClass: "firstpagecontainer" }}
      >
        {(progress) => (
          <div className="ThirdPageContainer">
            <div className="leftsideanimation">
              <Timeline totalProgress={progress} paused>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  <div>
                    <img src={LeftUp} alt="Up One"></img>
                  </div>
                </Tween>
                <Tween
                  from={{ opacity: 0, y: "-100%" }}
                  to={{ opacity: 1, y: "100%" }}
                >
                  <div className="centerOne">
                    <img src={LeftCenter} alt="Center One"></img>
                  </div>
                </Tween>
                <Tween
                  from={{ opacity: 0, y: "-400%" }}
                  to={{ opacity: 1, y: "-100%" }}
                >
                  <div>
                    <img src={LeftDown} alt="downOne"></img>
                  </div>
                </Tween>
              </Timeline>
            </div>

            <div className="centersideanimation">
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1, scale: "0.5" }}
                ></Tween>
                <div>
                  <img src={Center} alt="centerimage"></img>
                </div>
              </Timeline>
            </div>
            <div className="rightsideanimation">
              <Timeline totalProgress={progress} paused>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  <div>
                    <img src={RightUp} alt="rightidebaranimation"></img>
                  </div>
                </Tween>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  <div>
                    <img src={RightCenter} alt="rightsidebaranimation"></img>
                  </div>
                </Tween>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  <div>
                    <img src={RightDown} alt="rightsidebaranimation"></img>
                  </div>
                </Tween>
              </Timeline>
            </div>
          </div>
        )}
      </Scene>
    </Controller>
  </>
);

export default ThirdHome;
