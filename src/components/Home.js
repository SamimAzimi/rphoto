import "./home.css";
import { Tween, Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { useState, useEffect } from "react";
import couple from "../images/couple.jpeg";
import groom from "../images/groom.jpeg";
import bride from "../images/bride.jpeg";
import Secondhome from "./secondhome";
function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [MsetX, setMsetX] = useState(0);
  // const [MsetY, setMsetY] = useState(0);
  const handlescroll = () => {
    setOffsetY(window.pageYOffset);
  };
  const handlemousemove = (e) => {
    // setMsetX(window.innerWidth / 2 - e.screenX);
    // setMsetY(window.innerWidth / 2 - e.screenY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    window.addEventListener("mousemove", handlemousemove);
    return () => {
      window.removeEventListener("scroll", handlescroll);
      window.removeEventListener("mousemove", handlemousemove);
    };
  });
  //   // style={{position: "fixed",right: `${setOffsetY}px`,}}
  return (
    <>
      <Controller>
        <Scene
          duration={1000}
          indicators="true"
          triggerHook="onLeave"
          pin={true}
          reverse={true}
          triggerElement="#mainPhoto"
          classToggle="mainheader"
        >
          <div id="mainPhoto" className="mainphotos">
            <h1 className="rphotographyheadingone">R Photography</h1>

            <Controller>
              <Scene
                duration={800}
                indicators="true"
                triggerHook="onLeave"
                reverse="true"
                triggerElement="#mainPhoto"
              >
                <Timeline
                  target={
                    <div className="couplephoto">
                      <img src={couple} alt="pictureone" />
                    </div>
                  }
                >
                  <Tween
                    to={{
                      delay: "0.7",
                      ease: "back.out(0.-10)",
                      transform: "scale(0.6)",
                    }}
                  ></Tween>
                </Timeline>
              </Scene>
            </Controller>

            <Controller vertical="false">
              <Scene
                duration={800}
                indicators="true"
                triggerHook="onLeave"
                reverse="true"
                triggerElement="#mainPhoto"
                classToggle="bridephotoanimation"
              >
                <Timeline
                  target={
                    <div className="bridephoto">
                      <img src={bride} alt="pictureone" />
                    </div>
                  }
                >
                  <Tween
                    from={{}}
                    to={{
                      x: "70%",
                      top: "10%",
                      visibility: "visible",
                      delay: "2.8",
                      ease: "back.out(0.-10)",
                      transform: "scale(0.8)",
                    }}
                  ></Tween>
                </Timeline>
              </Scene>
            </Controller>
            <Controller>
              <Scene
                duration={800}
                indicators="true"
                triggerHook="onLeave"
                reverse="true"
                triggerElement="#mainPhoto"
                classToggle="bridephotoanimation"
              >
                <Timeline
                  target={
                    <div id="groomphoto" className="groomphoto">
                      <img src={groom} alt="pictureone" />
                    </div>
                  }
                >
                  <Tween
                    to={{
                      x: "-70%",
                      top: "20%",
                      visibility: "visible",
                      delay: "1.8",
                      ease: "back.out(0.-10)",
                      transform: "scale(0.8)",
                    }}
                  ></Tween>
                </Timeline>
              </Scene>
            </Controller>
          </div>
        </Scene>
      </Controller>
      <Secondhome />
    </>
  );
}

export default Home;
