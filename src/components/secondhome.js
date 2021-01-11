import "./secondhome.css";
import purposeImage from "../images/sittingcouple.jpeg";
import engagementcoupleblack from "../images/engagementcoupleblack.jpeg";
import nearkissImage from "../images/nearkiss.jpeg";
import { useEffect } from "react";
import Aos from "aos";
function SecondHome() {
  useEffect(() => {
    Aos.refresh();
    Aos.init({
      duration: 150,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-down" className="secondpagecontainer">
        <div className="secondpagetitle">
          <h1 className="secondtitleitself">Wedding PhotoGraphy</h1>
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="900"
          className="firstbridephoto"
        >
          <img src={purposeImage} alt="bride" />
        </div>
        <div data-aos="zoom-out" className="secondmainphoto">
          <img src={engagementcoupleblack} alt="couple" />
        </div>
        <div
          data-aos-offset="200"
          data-aos="fade-right"
          data-aos-delay="900"
          data-aos-anchor-placement="top-bottom"
          className="secondgroomphoto"
        >
          <img src={nearkissImage} alt="groom" />
        </div>
      </div>
    </>
  );
}

export default SecondHome;
