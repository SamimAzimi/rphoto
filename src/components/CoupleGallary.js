import React from "react";
import fire from "../firebase.config";
import "../style/coupleGallary.css";
import photo from "../images/bride.jpeg";

// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import Couple from "../images/gardenCouple.jpeg";

function CoupleGallary() {
  const handleSignOut = () => {
    fire.auth().signOut();
  };

  return (
    <>
      <div className="coupleGallaryContainer ">
        <div className="customerPanel">
          <p className="congratsMessage">
            Heartiest <b className="congrats">congratulations</b> on your
            special day! <br />I feel immensely honored to be part of your
            special day and witness the blooming love between two of my dear
            friends beginning a new journey of their lives together.
            <br />
            May your love deepen and your joy grow with each passing day you
            spend together.
            <br />
            simply Click on Download Button will download all images for you,
            <br />
            <span className="thanks">Thanks for choosing our Services</span>
          </p>
          <button className="buttonCG" onClick={handleSignOut}>
            Sign Out
          </button>
          <button className="buttonCG" type="submit">
            Download Images
          </button>
        </div>
        <div className="coupleImagesContainer">
          <div className="coupleImageSlider">
            <img src={photo} alt="couple" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CoupleGallary;
