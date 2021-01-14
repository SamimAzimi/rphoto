import React from "react";
import "./thirdhome.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import LeftUp from "../images/brideboqute.jpeg";
import LeftDown from "../images/weddingrings.jpeg";
import LeftCenter from "../images/groomtieing.jpeg";
import RightUp from "../images/brideboqute.jpeg";
import RightDown from "../images/brightcouplephotos.jpg";
import RightCenter from "../images/flowerandshoes.jpg";
import Center from "../images/brightcouplephotos3.jpg";
import { withRouter } from "react-router";
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
            <Timeline totalProgress={progress} paused>
              <Tween from={{ opacity: "1" }} to={{ y: "1000%" }}>
                <div className="header">
                  <h1>Engagement PhotoGraphy</h1>
                </div>
              </Tween>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ opacity: "0", y: "700%" }}
                  to={{ y: "1%", opacity: "1" }}
                >
                  <div className="lefttopimage">
                    <img src={LeftUp} alt="Up One"></img>
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ opacity: "0", y: "1000%" }}
                  to={{ y: "1%", opacity: "1" }}
                >
                  <div className="leftcenterimage">
                    <img src={LeftCenter} alt="Center One"></img>
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ opacity: "0", y: "1000%" }}
                  to={{ y: "1%", opacity: "1" }}
                >
                  <div className="leftbotoomimage">
                    <img src={LeftDown} alt="downOne"></img>
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween from={{}} to={{ scale: "0.7" }}>
                  <div className="thirdpagecenterimage">
                    <img src={Center} alt="centerimage"></img>
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ opacity: "0", y: "-1000%", duration: "2" }}
                  to={{ y: "1%", opacity: "1" }}
                >
                  <div className="righttopimage">
                    <img src={RightUp} alt="rightidebaranimation"></img>
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ opacity: "0", y: "-900%" }}
                  to={{ y: "1%", opacity: "1" }}
                >
                  <div className="rightcenterimage">
                    <img src={RightDown} alt="rightsidebaranimation"></img>
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ y: "-1000%", opacity: "0" }}
                  to={{ y: "1%", opacity: "1" }}
                >
                  <div className="rightbottomimage">
                    <img src={RightCenter} alt="rightsidebaranimation"></img>
                  </div>
                </Tween>
              </Timeline>
              <Tween from={{ opacity: "0" }} to={{ x: "400%", opacity: "1" }}>
                <div className="footer">
                  <h1>Professional Wedding PhotoGraphy</h1>
                </div>
              </Tween>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
  </>
);

export default withRouter(ThirdHome);
