import "./home.css";
import couple from "../images/couple.jpeg";
import groom from "../images/groom.jpeg";
import bride from "../images/bride.jpeg";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { EasePack } from "gsap/all";
function Home() {
  return (
    <>
      <Controller>
        <Scene
          spacerClass="scrollmagic"
          duration={1300}
          indicators="true"
          triggerHook="onLeave"
          pin={{ pushFollowers: true, spacerClass: "firstpagecontainer" }}
          reverse={true}
          triggerElement="#pin"
          loglevel={3}
        >
          {(progress) => (
            <div className="firstpagecontainer">
              <div className="firstpagetitle">
                <h1 className="titleitself"> R Photo Graphy</h1>
              </div>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ x: "100%", opacity: "0" }}
                  to={{
                    x: "20%",
                    opacity: "1",
                    transform: "ease.in",
                    delay: "5",
                    duration: "8",
                    ease: EasePack,
                  }}
                >
                  <div className="firstbridephoto">
                    <img src={bride} alt="bride" />
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween from={{}} to={{ scale: "0.7" }}>
                  <div className="firstmainphoto">
                    <img src={couple} alt="couple" />
                  </div>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ x: "-100%", opacity: "0" }}
                  to={{
                    x: "-16%",
                    opacity: "1",
                    delay: "5",
                    duration: "8",
                    ease: EasePack,
                  }}
                >
                  <div className="firstgroomphoto">
                    <img src={groom} alt="groom" />
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

export default Home;
