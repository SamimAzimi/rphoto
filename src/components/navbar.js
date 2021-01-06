import "./header.css";
import navbarimage from "./original.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div>
          <h1>Simply The Best</h1>
        </div>
      </header>

      <ul className="navbar">
        <li>
          <Link to="/">
          <h2>Home</h2>
          </Link>
        </li>
        <li>
          <Link to="/gallary">
          <h2>Gallary</h2>
          </Link>
        </li>
        <li>
          <Link to="/couplegallary">
          <h2>Couple Gallary (your Gallary)</h2>
          </Link>
        </li>
        <li>
          <Link to="contact">
          <h2>Contact Us</h2>
          </Link>
        </li>
        <li>
          <Link to="about">
          <h2>About Us</h2>
          </Link>
        </li>
      </ul>
      <div className="container">
        <img src={navbarimage} className="coupleimages" alt="coupleimage"></img>
      </div>
    </>
  );
}

export default Header;
