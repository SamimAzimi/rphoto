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
    const img = new Image();
    img.crossOrigin = 'anonymous';  // This tells the browser to request cross-origin access when trying to download the image data.
    // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
    img.onload = (srcofImage) => {
      // create Canvas
      img.src = srcofImage;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // create a tag
      const a = document.createElement('a');
      a.download = srcofImage;
      a.href = canvas.toDataURL('image/png');
      a.click();
    };

    userimages.map(srcofimage=>{
      const img = new Image();
    img.crossOrigin = 'anonymous'; 
        // create Canvas
        img.src = srcofimage;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        // create a tag
        const a = document.createElement('a');
        a.download = srcofimage;
        a.href = canvas.toDataURL('image/png');
        a.click();
      
    })
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
