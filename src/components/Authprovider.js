import React, { useState, useEffect } from "react";

import { firebaseauth } from "../firebase.config";

export const Authcontext = React.createContext();

export const Authprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebaseauth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return <>loading</>;
  }
  return (
    <Authcontext.Provider value={{ currentUser }}>
      {children}
    </Authcontext.Provider>
  );
};
