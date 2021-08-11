import "../style/coupleloginpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useContext, useCallback } from "react";
import { withRouter, Redirect } from "react-router";
import fire from "../firebase.config";
import { Authcontext } from "./Authcontext";

function CoupleloginPage({ history }) {
  const [show, setShow] = useState(false);

  const handleloginsubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, confirm } = event.target.elements;
      try {
        if (confirm.value === password.value) {
          fire
            .auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
              // Signed in
              // ...
            })
            .catch((error) => {
              var errorMessage = error.message;
              toast.info(errorMessage);
            });
          history.push("/adminPanel");
        } else {
          toast.info("password doesnt match but you found your life match");
        }
      } catch (err) {
        toast.info(err);
      }
    },
    [history]
  );
  const { currentUser } = useContext(Authcontext);
  if (currentUser) {
    return <Redirect to="/adminPanel" />;
  }
  return (
    <>
      <div className="clogincontainer">
        <h1>Admin</h1>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
export default withRouter(CoupleloginPage);
