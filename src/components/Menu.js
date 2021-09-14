import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {
    faHome,
    faCameraRetro,
    faLocationArrow,
    faPersonBooth,
    faArrowCircleUp,
    faBars
  
  } from "@fortawesome/free-solid-svg-icons";
  import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Menu () {
  const [navOpen, setNavOpen] = useState(false);
  const handletoggle = () => {
    setNavOpen(!navOpen);
  };
  const renderClasses = () => {
    let cleasses = "homeNav";
    if (navOpen) {
      cleasses += " actives";
    }
    return cleasses;
  };
    return (
      <>
      <div className="homeContinaer">
        <h1 className="companyName"> Rphotography </h1>

        <div onClick={handletoggle} className="humbergar">
         {
           navOpen?(<FontAwesomeIcon className="navicon" icon={faArrowCircleUp} />)  : 
           (<FontAwesomeIcon className="navicon" icon={faBars} />)
         }
        </div>
        <nav className={renderClasses()} > 
          <ul className="homeList">
            <NavLink to="/">
            <li onClick={handletoggle}>
            <FontAwesomeIcon className="navicon" icon={faHome} />
              Home 
            </li>
            </NavLink>
            <NavLink to='Gallary'>
              
            <li onClick={handletoggle}>
            <FontAwesomeIcon icon={faCameraRetro} className="navicon" />
              Wedding Gallary
            </li>
            </NavLink>
            <NavLink to="/coupleloginpage">

            <li onClick={handletoggle}>
            <FontAwesomeIcon icon={faPersonBooth} className="navicon" />
              Couple Gallary
            </li>
            </NavLink>
            <NavLink to='/AboutUs'>
              
            <li onClick={handletoggle}>
            <FontAwesomeIcon icon={faLocationArrow} className="navicon" />
              About Us
            </li>
            </NavLink>
            <NavLink to="/Packages">

            <li onClick={handletoggle}>
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