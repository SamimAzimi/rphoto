import "../style/packages.css";
import React, { useState } from "react";
import ContactUs from "./Contact";

function Packages() {
  const [clicked, setClicked] = useState(true);

  const [buttonText, setButtonText] = useState(true);

  const toggle = (index) => {
    if (clicked === index) {
      setButtonText(false);
      return setClicked(null);
    }
    setClicked(index);
    setButtonText(true);
  };

  return (
    <>
      <h1 className="services">Our Services / Packages</h1>
      <ul class="tilesWrap">
        <li>
          <h2>01</h2>
          <h3>Lovers</h3>
          {clicked === 1 ? (
            <ContactUs />
          ) : (
            <div key="1" className="packageDetails">
              <h4>40 . 10 x 10 Prints for Bride & Groom</h4>
              <h4>100. 5 x 7 Prints for Bride's parents(with Album)</h4>
              <h4>100. 5 x 7 Prints for Groom's Parents (with Album)</h4>
              <h4>01 .20x 24 Wall Portrait</h4>
              <h4>50 . Thank you card.</h4>
              <h4>UNLIMITED PHOTO taken</h4>
              <h4>Covers up to 4 locations</h4>
              <h4>
                High resolution,unwatermaked,ready to print files on DVD or
                Blu-ray Disc
              </h4>
              <h4>indiviually edited and retoouched images</h4>
              <h4>On-line Photo Gallery with Client Login</h4>
            </div>
          )}
          <button
            type="submit"
            className="SelectButton"
            onClick={() => toggle(1)}
          >
            {buttonText && clicked === 1 ? "Back" : "Select"}
          </button>
        </li>
        <li>
          <h2>02</h2>
          <h3>Life Partner</h3>
          {clicked === 2 ? (
            <ContactUs />
          ) : (
            <div key="2" className="packageDetails">
              <h4>
                01. 11 x 14 Story Book (Cofee Table Book )for Bride & groom
              </h4>
              <h4>20. 10 x 10 Prints for Bride & Groom</h4>
              <h4>100. 5 x 7 Prints for Bride's parents</h4>
              <h4>100. 5 x 7 Prints for Groom's Parents</h4>
              <h4>01. 11 x 14 Wall Portrait</h4>
              <h4>50. Thank you card.</h4>
              <h4>UNLIMITED PHOTO taken</h4>
              <h4>Covers up to 4 locations</h4>
              <h4>
                High resolution,unwatermaked,ready to print files on DVD or
                Blu-ray Disc
              </h4>
              <h4>indiviually edited and retoouched images</h4>
              <h4>On-line Photo Gallery with Client Login</h4>
            </div>
          )}
          <button
            type="submit"
            className="SelectButton"
            onClick={() => toggle(2)}
          >
            {buttonText && clicked === 2 ? "Back" : "Select"}
          </button>
        </li>
        <li>
          <h2>03</h2>
          <h3>Soulmate</h3>
          {clicked === 3 ? (
            <ContactUs />
          ) : (
            <div key="3" className="packageDetails">
              <h4>01. 22 x 14 Cofee Table Book for Bride & groom</h4>
              <h4>20. 10 x 10 Prints for Bride's parents</h4>
              <h4>20. 10 x 10 Prints for Groom's Parents</h4>
              <h4>01. 16 x 20 Portrait with Frame for Reception</h4>
              <h4>01. 20 x 24 Wall Portraits(after Wedding)</h4>
              <h4>100. Thank you card.</h4>
              <h4>UNLIMITED PHOTO taken</h4>
              <h4>Covers up to 4 locations</h4>
              <h4>
                High resolution,unwatermaked,ready to print files on DVD or
                Blu-ray Disc
              </h4>
              <h4>indiviually edited and retoouched images</h4>
              <h4>On-line Photo Gallery with Client Login</h4>
            </div>
          )}
          <button
            type="submit"
            onClick={() => toggle(3)}
            className="SelectButton"
          >
            {buttonText && clicked === 3 ? "Back" : "Select"}
          </button>
        </li>
        <li>
          <h2>04</h2>
          <h3>Basic Package</h3>
          {clicked === 4 ? (
            <ContactUs />
          ) : (
            <div key="4" className="packageDetails">
              <h4>UNLIMITED PHOTO taken</h4>
              <h4>4 Location Photo Shoot</h4>
              <h4>
                High resolution,unwatermaked, ready to print files on DVD or
                Blu-ray Disc
              </h4>
              <h4>indiviually edited and retoouched image</h4>
            </div>
          )}
          <button
            type="submit"
            onClick={() => toggle(4)}
            className="SelectButton"
          >
            {buttonText && clicked === 4 ? "Back" : "Select"}
          </button>
        </li>
      </ul>
    </>
  );
}

export default Packages;
