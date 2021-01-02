import "./header.css";
import navbarimage from "./original.jpg";
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
          <a href="/home">
            <h2>Home</h2>
          </a>
        </li>
        <li>
          <a href="/gallary">
            <h2>Gallary</h2>
          </a>
        </li>
        <li>
          <a href="/clientgallary">
            <h2>Couple Gallary (your Gallary)</h2>
          </a>
        </li>
        <li>
          <a href="/contactus">
            <h2>Contact Us</h2>
          </a>
        </li>
        <li>
          <a href="/aboutus">
            <h2>About Us</h2>
          </a>
        </li>
      </ul>
      <div className="container">
        <img src={navbarimage} className="coupleimages" alt="coupleimage"></img>
      </div>
    </>
  );
}

export default Header;
