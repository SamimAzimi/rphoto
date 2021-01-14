import "./coupleloginpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext, useCallback } from "react";
import { withRouter, Redirect } from "react-router";
import { firebaseauth } from "../firebase.config";
import { Authcontext } from "./Authprovider";

function CoupleloginPage({ history }) {
  const [show, setShow] = useState(false);

  const handleloginsubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, confirm } = event.target.elements;
      try {
        if (confirm.value === password.value) {
          firebaseauth.signInWithEmailAndPassword(email.value, password.value);
          history.push("/couplegallary");
        } else alert("password doesnt match but you found your life match");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );
  const { currentUser } = useContext(Authcontext);
  if (currentUser) {
    console.log(currentUser);
    return <Redirect to="/couplegallary" />;
  }
  return (
    <>
      <div className="clogincontainer">
        <div className="glassmorph">
          <div className="socialmediaButtons">
            {/* 
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon className="twitter" icon={faTwitter} />
            
            <FontAwesomeIcon className="google" icon={faGoogle} />
             */}
            <FontAwesomeIcon
              className="phone"
              onClick={() => setShow(true)}
              icon={faPhone}
            />
            <FontAwesomeIcon
              className="email"
              onClick={() => setShow(false)}
              icon={faEnvelope}
            />
          </div>
          {show && (
            <form className="phonedisplay">
              <lable htmlFor="PhoneNumber">Phone Number</lable>
              <input name="phonenumberlogin" type="text" />
              <button type="submit" className="socialmediabutton">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </button>
              <button type="reset" className="socialmediabutton">
                <FontAwesomeIcon icon={faSignOutAlt} /> Cancel
              </button>
            </form>
          )}
          {!show && (
            <form className="emaildispaly" onSubmit={handleloginsubmit}>
              <lable htmlFor="email">Email :</lable>
              <input name="email" type="text" placeholder="Type your Email" />
              <lable htmlFor="password">Password :</lable>
              <input
                name="password"
                type="text"
                placeholder="Type your Password"
              />
              <lable htmlFor="confirm">Confirm Password</lable>
              <input
                name="confirm"
                type="text"
                placeholder="Type your Password Again"
              />
              <button type="submit" className="socialmediabutton">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </button>
              <button type="reset" className="socialmediabutton">
                <FontAwesomeIcon icon={faSignOutAlt} /> Cancel
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
export default withRouter(CoupleloginPage);
