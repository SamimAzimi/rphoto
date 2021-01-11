import "./home.css";
import { Controller, Scene } from "react-scrollmagic";
import { useEffect } from "react";
import SecondPage from "./secondhome";
import ThirdPage from "./ThirdHome";
import couple from "../images/couple.jpeg";
import groom from "../images/groom.jpeg";
import bride from "../images/bride.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
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
          duration={1000}
          indicators="true"
          triggerHook="onLeave"
          pin={{ pushFollowers: true, spacerClass: "firstpagecontainer" }}
          reverse={true}
          triggerElement="#pin"
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
            <div data-aos="zoom-out" className="firstmainphoto">
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
      <SecondPage />
      <ThirdPage />
    </>
  );
}

export default Home;
