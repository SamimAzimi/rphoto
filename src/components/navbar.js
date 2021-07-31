import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/navbar.css";
import {
  faHome,
  faCameraRetro,
  faLocationArrow,
  faPersonBooth,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const handletoggle = () => {
    setNavOpen(!navOpen);
  };
  const renderClasses = () => {
    let cleasses = "navbar";
    if (navOpen) {
      cleasses += " active";
    }
    return cleasses;
  };
  return (
    <>
      <div onClick={handletoggle} className="menubar" id="menubarid">
        <div className={renderClasses()}>
          <ul className="listNavbar">
            <li>
              <Link to="/">
                <FontAwesomeIcon className="navicon" icon={faHome} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/Gallary">
                <FontAwesomeIcon icon={faCameraRetro} className="navicon" />
                Wedding Gallary
              </Link>
            </li>
            <li>
              <Link to="coupleloginpage">
                <FontAwesomeIcon icon={faPersonBooth} className="navicon" />
                Couple Login Page
              </Link>
            </li>
            <li>
              <Link to="/AboutUs">
                <FontAwesomeIcon icon={faLocationArrow} className="navicon" />
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Packages">
                <FontAwesomeIcon icon={faProductHunt} className="navicon" />
                Packages
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <FontAwesomeIcon
          onClick={handletoggle}
          className="fanavbar"
          style={{ color: "#bf8faa" }}
          icon={faBars}
        />
      </div>
    </>
  );
}

export default Header;
