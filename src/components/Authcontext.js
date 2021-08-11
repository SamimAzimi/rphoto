import React, { useState, useEffect } from "react";
import "../style/authprovider.css";
import fire from "../firebase.config";

export const Authcontext = React.createContext();

export const Authprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, [currentUser]);
  if (pending) {
    return (
      <>
        <div className="loadinganimation">
          <div className="heart-loader"></div>
          <div className="heart-loader"></div>
        </div>
      </>
    );
  }
  return (
    <Authcontext.Provider value={{ currentUser }}>
      {children}
    </Authcontext.Provider>
  );
};
