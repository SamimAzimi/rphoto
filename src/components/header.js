import "./header.css";
import navbarimage from "./original.jpg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

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
          <h2>Home</h2>
        </li>
        <li>
          <h2>Gallary</h2>
        </li>
        <li>
          <h2>Couple Gallary (your Gallary)</h2>
        </li>
        <li>
          <h2>Contact Us</h2>
        </li>
        <li>
          <h2>About Us</h2>
        </li>
      </ul>
      <div className="container">
        <img src={navbarimage} className="coupleimages" alt="coupleimage"></img>
      </div>
    </>
  );
}

export default Header;
