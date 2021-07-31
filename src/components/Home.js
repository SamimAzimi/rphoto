import "../style/home.css";
import "../style/secondhome.css";
import "../style/thirdhome.css";
import couple from "../images/couple.jpeg";
import groom from "../images/groom.jpeg";
import bride from "../images/bride.jpeg";
import purposeImage from "../images/sittingcouple.jpeg";
import engagementcoupleblack from "../images/engagementcoupleblack.jpeg";
import nearkissImage from "../images/nearkiss.jpeg";
import LeftUp from "../images/brideboqute.jpeg";
import LeftDown from "../images/weddingrings.jpeg";
import LeftCenter from "../images/groomtieing.jpeg";
import RightUp from "../images/brideboqute.jpeg";
import RightDown from "../images/brightcouplephotos.jpg";
import RightCenter from "../images/flowerandshoes.jpg";
import Center from "../images/brightcouplephotos3.jpg";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { EasePack } from "gsap/all";
import { withRouter } from "react-router";
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

        {/* second scene  */}
        <Scene
          spacerClass="scrollmagic"
          duration={1300}
          indicators="true"
          triggerHook="onLeave"
          pin={{ pushFollowers: true, spacerClass: "firstpagecontainer" }}
          reverse={true}
        >
          {(progress) => (
            <div className="secondpagecontainer">
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

        {/* third scene  */}
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
}

export default withRouter(Home);
