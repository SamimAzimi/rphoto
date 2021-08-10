import React, { useState } from "react";
import firebase from "../firebase.config";
import "../style/adminPanel.css";
import { withRouter } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Adminpanel() {
  const [images, setImages] = useState([]);
  const [albumName, setAlbumName] = useState();
  const [progress, setProgress] = useState(0);
  const [oneImage, setOneImage] = useState();
  const [email, setEmail] = useState();
  const [passwd, setPasswd] = useState();
  const [newPasswd, setnewPasswd] = useState();

  const changeadminPassword = (e) => {
    e.preventDefault();
    let user = firebase.auth().currentUser;
    user.updatePassword(newPasswd).then(
      () => {
        toast.info("Password has been changed successfully");
      },
      (error) => {
        toast.info(error);
      }
    );
  };
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };
  const createUser = (e) => {
    e.preventDefault();
    if (email || passwd) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, passwd)
        .then((userCredential) => {
          var user = userCredential.user;
          if (user) {
            toast.info("User Has Been Created");
          }
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          toast.info(errorCode, errorMessage);
          // ..
        });
    } else {
      alert("fill user name and password");
    }
  };
  const seeAlbums = () => {
    toast.info("comming soon");
  };
  const handleUpload = (e) => {
    e.preventDefault();
    if (albumName) {
      if (images.length > 0) {
        const promises = [];
        // eslint-disable-next-line
        images.map((image) => {
          const uploadTask = firebase
            .storage()
            .ref(`${albumName}/${image.name}`)
            .put(image);
          promises.push(uploadTask);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
              setOneImage(image.name);
              // eslint-disable-next-line
              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  toast.info("Upload is paused");
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  // toast.info("Upload is running");
                  break;
              }
            },
            (error) => {
              // eslint-disable-next-line
              switch (error.code) {
                case "storage/unauthorized":
                  toast.info(
                    "User doesn't have permission to access the object"
                  );
                  break;
                case "storage/canceled":
                  toast.info(" User canceled the upload");
                  // User canceled the upload
                  break;

                // ...

                case "storage/unknown":
                  toast.info("Inspect error.serverResponse");
                  // Unknown error occurred, inspect error.serverResponse
                  break;
              }
            },
            async () => {
              await uploadTask.snapshot.ref.getDownloadURL().then((urls) => {
                // console.log("image Available on " + urls);
              });
            }
          );
        });

        Promise.all(promises)
          .then(() => {
            toast.info("All images uploaded");
            setOneImage("All Images Uploaded");
          })
          .catch((err) => console.log(err));
      } else {
        toast.warn("Please Select Images");
      }
    } else {
      toast.warn("Please Type Album Name");
    }
  };

  return (
    <>
      <div className="AdminPanelContainer">
        <form className="AdminPanelForm">
          <label htmlFor="bucketName" className="AdminPanelFormLabel">
            Album Name:
          </label>
          <input
            type="text"
            value={albumName}
            className="AdminPanelFormInput"
            onChange={(event) => setAlbumName(event.target.value)}
          />
          <label className="AdminPanelFormLabel" htmlFor="fileName">
            Choose Images:
          </label>
          <input
            type="file"
            className="AdminPanelFormFile"
            multiple
            onChange={handleChange}
          />
          <label className="AdminPanelFormLabel">{oneImage}</label>
          <Progress percent={progress} status="success" />
          <button className="submitImage" onClick={handleUpload}>
            Upload
          </button>
        </form>
        <div className="AlbumInformation">
          <h1 className="ablumH">Albums</h1>
          <button type="submit" onClick={seeAlbums} className="submitImage">
            See All Albums
          </button>
          <div className="SingleAlbum">
            <h5 className="ablumH">Album Name</h5>
            <input className="AdminPanelFormInput" type="text" />
            <button type="submit" className="submitImage">
              Permit Downloads
            </button>
            <button type="submit" className="submitImage">
              List Images
            </button>
          </div>
        </div>
        <form className="adminStaff">
          <fieldset>
            <legend>Customer Section</legend>
            <input
              type="email"
              name="email"
              class="createEmail"
              value={email}
              placeholder="Create Email Address for Customer"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={passwd}
              placeholder="Type Password for Email"
              class="createEmail"
              onChange={(e) => setPasswd(e.target.value)}
            />
            <button className="CreateEmail" onClick={createUser}>
              Create Email
            </button>
          </fieldset>
          <fieldset>
            <legend>Admin Section</legend>
            <input
              value={newPasswd}
              onChange={(e) => setnewPasswd(e.target.value)}
              type="text"
              class="createEmail"
              placeholder="change Admin Password"
            />
            <button className="ChangePasswd" onClick={changeadminPassword}>
              Change Password
            </button>
          </fieldset>
          <button
            className="signoutbtn"
            onClick={() => firebase.auth().signOut()}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            Sign Out
          </button>
        </form>
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

export default withRouter(Adminpanel);
// export default Adminpanel;
