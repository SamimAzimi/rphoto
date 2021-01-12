import { useState, useEffect } from "react";
import {
  ProjectStorage,
  ProjectFirestore,
  timeStamp,
} from "../firebase.config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references

    const storageRef = ProjectStorage.ref(file.name);
    const collectionRef = ProjectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const Createdat = timeStamp();
        collectionRef.add({ url, Createdat });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;

/*
      <header className="navbarcontainer">
        <Router>
          <div className="navbardiv">
            <ul className="navbar">
              <li>
                <Link to="/">
                  <h2>
                    <FontAwesomeIcon
                      icon={faHome}
                      style={{ color: "#65586e" }}
                    ></FontAwesomeIcon>{" "}
                    Home
                  </h2>
                </Link>
              </li>
              <li>
                <Link to="/gallary">
                  <h2>
                    <FontAwesomeIcon
                      icon={faCameraRetro}
                      style={{ color: "#65586e" }}
                    />{" "}
                    Storybook
                  </h2>
                </Link>
              </li>
              <li>
                <Link to="/couplegallary">
                  <h2>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "#65586e" }}
                    />{" "}
                    Couple Gallary (your Gallary)
                  </h2>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <h2>
                    {" "}
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="iconstyles"
                    />{" "}
                    Contact Us
                  </h2>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <h2>
                    <FontAwesomeIcon
                      icon={faLocationArrow}
                      style={{ color: "#65586e" }}
                    />
                    About Us
                  </h2>
                </Link>
              </li>
              <li>
                <Link to="/package">
                  <h2>
                    <FontAwesomeIcon
                      icon={faProductHunt}
                      style={{ color: "#65586e" }}
                    />
                    Packages
                  </h2>
                </Link>
              </li>
            </ul>
          </div>
        </Router>
      </header>

      */
