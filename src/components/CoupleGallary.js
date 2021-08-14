import React, { useState, useEffect, useContext } from "react";
import fire from "../firebase.config";
// import "../style/coupleGallary.css";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import Couple from "../images/gardenCouple.jpeg";
import { Authcontext } from "./Authcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CoupleGallary() {
  const { currentUser } = useContext(Authcontext);
  const [userimages, setUserImages] = useState([]);
  const [wait,setWait] = useState(true);
  const handleSignOut = () => {
    fire.auth().signOut();
  };
  useEffect(() => {
    var storageRef = fire.storage().ref("users");
    

    const userImages = [];
    storageRef
    .child(currentUser.uid)
    .listAll()
    .then(function (result) {
    result.items.forEach(function (imagref) {
      imagref.getDownloadURL().then(function (url) {
        userImages.push(url);            
        
      })
      setUserImages(userImages)
      setWait(true)
    });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    toast.info(errorCode, errorMessage);
  })

    
    }, []);


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
          <button className="buttonCG" onClick={()=>{}} type="submit">
            Download Images
          </button>
        </div>
        <div className="coupleImagesContainer">
        <div className="coupleImageSlider">
            {wait?(userimages.map((img, index) => {
                          console.log('DOM',img)
                          return (
                            <div key={index}>
                              <img  src={img} alt="couple" />;
                              </div>
                          )
                        })):(
                          <div>
                            <h1>Loading...</h1>
                            </div>
                        )}
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
