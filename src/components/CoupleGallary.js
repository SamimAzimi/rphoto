import React, { useState, useEffect, useContext } from "react";
import fire from "../firebase.config";
import "../style/coupleGallary.css";

// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import Couple from "../images/gardenCouple.jpeg";
import { Authcontext } from "./Authcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CoupleGallary() {
  const { currentUser } = useContext(Authcontext);
  const [wait, setWait] = useState(true);
  const [userimages, setUserImages] = useState([]);
  const handleSignOut = () => {
    fire.auth().signOut();
  };
  useEffect(() => {
    const userImages = [];
    var storageRef = fire.storage().ref("user");
    storageRef
      .child(currentUser.uid)
      .listAll()
      .then(function (result) {
        result.items.forEach(function (imagref) {
          imagref.getDownloadURL().then(function (url) {
            userImages.push(url);
            console.log(url);
          });
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        toast.info(errorCode, errorMessage);
      });
    setUserImages(userImages);
  }, [currentUser.uid]);
  const DownloadImages = () => {
    if (userimages) {
      setWait(!wait);
    }
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
          {wait ? (
            <div>Loading.....</div>
          ) : (
            <div className="coupleImageSlider">
              {userimages.map((img, index) => {
                return <img key={index} src={img} alt="couple" />;
              })}
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default CoupleGallary;
