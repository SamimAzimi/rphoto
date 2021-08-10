import React from "react";
import fire from "../firebase.config";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import Couple from "../images/gardenCouple.jpeg";

function CoupleGallary() {
  const handleSignOut = () => {
    fire.auth().signOut();
  };
  return (
    <>
      <h1>nothing special going on here</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
}

export default CoupleGallary;
