import { firebaseauth } from "./firebase.config";

<div className="signoutButton" onClick={() => firebaseauth.signOut()}>
  <FontAwesomeIcon
    className="fa-lg"
    style={{ color: "#bf8faa" }}
    icon={faSignOutAlt}
  />
</div>;
