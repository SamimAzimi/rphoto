import "./home.css";
import { Controller, Scene } from "react-scrollmagic";
import { useEffect } from "react";
import couple from "../images/couple.jpeg";
import groom from "../images/groom.jpeg";
import bride from "../images/bride.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  // const [offsetY, setOffsetY] = useState(0);
  // const [MsetX, setMsetX] = useState(0);
  // // const [MsetY, setMsetY] = useState(0);
  // const handlescroll = () => {
  //   setOffsetY(window.pageYOffset);
  // };
  // const handlemousemove = (e) => {
  //   // setMsetX(window.innerWidth / 2 - e.screenX);
  //   // setMsetY(window.innerWidth / 2 - e.screenY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handlescroll);
  //   window.addEventListener("mousemove", handlemousemove);
  //   return () => {
  //     window.removeEventListener("scroll", handlescroll);
  //     window.removeEventListener("mousemove", handlemousemove);
  //   };
  // });

  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <>
      <Controller>
        <Scene
          spacerClass="scrollmagic"
          duration={1200}
          indicators="true"
          triggerHook="onLeave"
          pin={{ pushFollowers: true, spacerClass: "firstpagecontainer" }}
          reverse={true}
          triggerElement="#menubarid"
        >
          <div className="firstpagecontainer">
            <div className="firstpagetitle">
              <h1 className="titleitself"> R Photo Graphy</h1>
            </div>

            <div
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-top"
              className="firstbridephoto"
            >
              <img src={bride} alt="bride" />
            </div>
            <div
              data-aos="zoom-out"
              data-aos-anchor-placement="bottom-top"
              className="firstmainphoto"
            >
              <img src={couple} alt="couple" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-top"
              className="firstgroomphoto"
            >
              <img src={groom} alt="groom" />
            </div>
          </div>
        </Scene>
      </Controller>
    </>

    /* <Controller>
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
      <Secondhome /> */
  );
}

export default Home;
