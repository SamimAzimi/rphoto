import "./navbar.css";
import { Link } from "react-router-dom";
import {
  faHome,
  faCameraRetro,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <>
      <header>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/">
                <h2>
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ color: "#65586e" }}
                  ></FontAwesomeIcon>{" "}
                  Home
                </h2>
              </Link>
            </li>
            <li>
              <Link to="/gallary">
                <h2>
                  <FontAwesomeIcon
                    icon={faCameraRetro}
                    style={{ color: "#65586e" }}
                  />{" "}
                  Storybook
                </h2>
              </Link>
            </li>
            <li>
              <Link to="/couplegallary">
                <h2>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#65586e" }}
                  />{" "}
                  Couple Gallary (your Gallary)
                </h2>
              </Link>
            </li>
            <li>
              <Link to="contact">
                <h2>
                  {" "}
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="iconstyles"
                  />{" "}
                  Contact Us
                </h2>
              </Link>
            </li>
            <li>
              <Link to="about">
                <h2>
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    style={{ color: "#65586e" }}
                  />
                  About Us
                </h2>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
