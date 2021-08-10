import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  const menue = (path) => {
    history.push(path);
    window.location.reload();
  };

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
            <li onClick={() => menue("/")}>
              <FontAwesomeIcon className="navicon" icon={faHome} />
              Home
            </li>
            <li onClick={() => menue("/Gallary")}>
              <FontAwesomeIcon icon={faCameraRetro} className="navicon" />
              Wedding Gallary
            </li>
            <li onClick={() => menue("/coupleloginpage")}>
              <FontAwesomeIcon icon={faPersonBooth} className="navicon" />
              Couple Gallary
            </li>
            <li onClick={() => menue("/AboutUs")}>
              <FontAwesomeIcon icon={faLocationArrow} className="navicon" />
              About Us
            </li>
            <li onClick={() => menue("/Packages")}>
              <FontAwesomeIcon icon={faProductHunt} className="navicon" />
              Packages
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
