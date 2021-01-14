import { Link } from "react-router-dom";
import "./navbar.css";
import {
  faHome,
  faCameraRetro,
  faLocationArrow,
  faSearch,
  faImages,
  faPersonBooth,
  faTools,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <>
      <div className="beehive">
        <div className="beehive3">
          <Link to="/">
            <h2>
              <FontAwesomeIcon icon={faHome} style={{ color: "white" }} />
            </h2>
          <p>Home</p>
          </Link>
        </div>
        <div className="beehive1">
          <h2>
            <FontAwesomeIcon icon={faCameraRetro} style={{ color: "white" }} />
          </h2>
          <p>Wedding Gallary</p>
        </div>
        <div className="beehive2">
          <h2>
            <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
          </h2>
          <p>Engagement Gallary</p>
        </div>

        <div className="beehive1">
          <h2>
            <FontAwesomeIcon icon={faImages} style={{ color: "white" }} />
          </h2>
          <p>Storybook</p>
        </div>
        <div className="beehive3">
          <Link to="coupleloginpage">
            <h2>
              <FontAwesomeIcon
                icon={faPersonBooth}
                style={{ color: "white" }}
              />
            </h2>
            <p>Couple Login Page</p>
          </Link>
        </div>
        <div className="beehive1">
          <h2>
            <FontAwesomeIcon icon={faProductHunt} style={{ color: "white" }} />
          </h2>
          <p>Packages</p>
        </div>
        <div className="beehive1">
          <Link to="about" >

          <h2>
            <FontAwesomeIcon
              icon={faLocationArrow}
              style={{ color: "white" }}
              />
          </h2>
          <p>About Us</p>
              </Link>
        </div>
        <div className="beehive1">
          <Link to="adminpanel">
            <h2>
              <FontAwesomeIcon icon={faTools} style={{ color: "white" }} />
            </h2>
            <p>Photographer Admin Panel</p>
          </Link>
        </div>
        <div className="beehive3">
          <Link to="/couplegallary">
            <h2>
              <FontAwesomeIcon icon={faHeart} style={{ color: "white" }} />
            </h2>
            <p>Couple Gallary</p>
          </Link>
        </div>
        <div className="beehive1">
          <h2>
            <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
          </h2>
          <p>Social Media page</p>
        </div>
        <div className="beehive1">
          <h2>
            <FontAwesomeIcon icon={faShare} style={{ color: "white" }} />
          </h2>
          <p>Share</p>
        </div>
      </div>
    </>
  );
}

export default Header;
