import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    faHome,
    faCameraRetro,
    faLocationArrow,
    faPersonBooth,
  
  } from "@fortawesome/free-solid-svg-icons";
  import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Menu () {

    return (
<>
      <div className="homeContinaer">
        <h1 className="companyName"> Rphotography </h1>
        <nav className="homeNav"> 
          <ul className="homeList">
            <NavLink to="/">
            <li>
            <FontAwesomeIcon className="navicon" icon={faHome} />
              Home 
            </li>
            </NavLink>
            <NavLink to='Gallary'>
              
            <li>
            <FontAwesomeIcon icon={faCameraRetro} className="navicon" />
              Wedding Gallary
            </li>
            </NavLink>
            <NavLink to="/coupleloginpage">

            <li>
            <FontAwesomeIcon icon={faPersonBooth} className="navicon" />
              Couple Gallary
            </li>
            </NavLink>
            <NavLink to='/AboutUs'>
              
            <li>
            <FontAwesomeIcon icon={faLocationArrow} className="navicon" />
              About Us
            </li>
            </NavLink>
            <NavLink to="/Packages">

            <li>
            <FontAwesomeIcon icon={faProductHunt} className="navicon" />
              Packages
            </li>
            </NavLink>
          </ul>
        </nav>
       
      </div>
    </>
    )
}


export default Menu