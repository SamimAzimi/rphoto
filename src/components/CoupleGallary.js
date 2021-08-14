import React, { useState, useEffect, useContext } from "react";
import fire from "../firebase.config";
import "../style/coupleGallary.css";
import { Authcontext } from "./Authcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CoupleGallary() {
  const { currentUser } = useContext(Authcontext);
  const [userimages, setUserImages] = useState([]);

  const handleSignOut = () => {
    fire.auth().signOut();
  };
  const userImages = [];
  useEffect(() => {
    var storageRef = fire.storage().ref("users");
    function function1(param, callback) {
      return new Promise(function (fulfill, reject) {
        // storage function
        storageRef
          .child(currentUser.uid)
          .listAll()
          .then(function (result) {
            result.items.forEach(function (imagref) {
              imagref.getDownloadURL().then(function (url) {
                userImages.push(url);

                setUserImages(userImages);
              });
            });
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            toast.info(errorCode, errorMessage);
          });
        //
        fulfill("finished"); //if the action succeeded
        reject("error"); //if the action did not succeed
      });
    }

    function1()
      .then((res) => {
        return res;
      })
      .then((res) => {
        console.log("res1", res);
      });
  }, []);
  const handleDownload = () => {
    userImages.map((res) => {
      var link = document.createElement("a");
      link.href = res;
      link.download = "true";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
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
          <button className="buttonCG" onClick={handleDownload} type="submit">
            Download Images
          </button>
        </div>
        <div className="coupleImagesContainer">
          <div className="coupleImageSlider">
            {userimages.map((img, index) => {
              console.log("DOM", img);
              return (
                <div key={index}>
                  <img src={img} alt="couple" />
                </div>
              );
            })}
          </div>
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
