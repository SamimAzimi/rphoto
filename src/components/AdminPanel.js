import React, { useCallback } from "react";
import { firebaseauth } from "../firebase.config";

function Adminpanel({ history }) {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDevault();
      const { email, password } = event.target.elements;
      try {
        await firebaseauth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );
  return (
    <>
      <form onSubmit={handleSignUp}>
        <label htmlFor="Email">Email</label>
        <input type="text" name="signupemail" />
        <label htmlFor="password"> Password</label>
        <input type="text" name="signupemailpassword" />
        <button type="submit">Sign Up With Email</button>
      </form>
    </>
  );
}
export default Adminpanel;
