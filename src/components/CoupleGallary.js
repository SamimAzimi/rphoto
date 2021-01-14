import React from "react";
import { firebaseauth } from "../firebase.config";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import Couple from "../images/gardenCouple.jpeg";

function CoupleGallary() {
  return (
    <>
      <h1>nothing special going on here</h1>
      <button onClick={() => firebaseauth.signOut()}>Sign Out</button>
    </>
  );
}

export default CoupleGallary;
