import React, { useState, useEffect } from "react";

import { firebaseauth } from "../firebase.config";

export const Authcontext = React.createContext();

export const Authprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebaseauth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <Authcontext.Provider value={{ currentUser }}>
      {children}
    </Authcontext.Provider>
  );
};
