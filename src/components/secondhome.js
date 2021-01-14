import "./secondhome.css";
import purposeImage from "../images/sittingcouple.jpeg";
import engagementcoupleblack from "../images/engagementcoupleblack.jpeg";
import nearkissImage from "../images/nearkiss.jpeg";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { EasePack } from "gsap/all";
import {withRouter} from 'react-router'
function SecondHome() {
  return (
    <>
      <Controller >
        <Scene
          spacerClass="scrollmagic"
          duration={1300}
          indicators="true"
          triggerHook="onLeave"
          pin={{ pushFollowers: true, spacerClass: "firstpagecontainer" }}
          reverse={true}
        >
          {(progress) => (
            <div data-aos="fade-down" className="secondpagecontainer">
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ y: "-100%", opacity: "0" }}
                  to={{
                    y: "500%",
                    opacity: "1",
                    duration: "3",
                    ease: EasePack,
                  }}
                >
                  <div className="secondpagetitle">
                    <h1 className="secondtitleitself">Wedding PhotoGraphy</h1>
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ x: "100%", opacity: "0" }}
                  to={{
                    x: "20%",
                    opacity: "1",
                    delay: "5",
                    duration: "8",
                    ease: EasePack,
                  }}
                >
                  <div className="firstbridephoto">
                    <img src={purposeImage} alt="bride" />
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween from={{}} to={{ scale: "0.7" }}>
                  <div className="secondmainphoto">
                    <img src={engagementcoupleblack} alt="couple" />
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ x: "-100%", opacity: "0" }}
                  to={{
                    x: "-16%",
                    opacity: "1",

                    duration: "8",
                    delay: "5",
                    ease: EasePack,
                  }}
                >
                  <div className="secondgroomphoto">
                    <img src={nearkissImage} alt="groom" />
                  </div>
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
    </>
  );
}

export default withRouter(SecondHome);
