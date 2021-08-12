import React, { useState } from "react";
import firebase from "../firebase.config";
import "../style/adminPanel.css";
import { withRouter } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import {
  faSignOutAlt,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Adminpanel() {
  const urlarray = [];
  const [urlarrays, setUrlarrays] = useState([]);
  const [refer, setRefer] = useState();
  const [clicked, setClicked] = useState(true);
  const [images, setImages] = useState([]);
  const [userlists, setUserLists] = useState([]);
  const [albumName, setAlbumName] = useState();
  const [progress, setProgress] = useState(0);
  const [oneImage, setOneImage] = useState();
  const [email, setEmail] = useState();
  const [passwd, setPasswd] = useState();
  const [newPasswd, setnewPasswd] = useState();
  const [messages, setMessages] = useState([]);
  const readData = () => {
    const messagesRef = firebase.database().ref("messages");
    messagesRef.on("value", (snapshot) => {
      const msgonDb = snapshot.val();
      const messagelist = [];
      for (let id in msgonDb) {
        messagelist.push({ id, ...msgonDb[id] });
      }
      setMessages(messagelist);
    });
  };
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
          var userd = userCredential.user;

          if (userd) {
            const userProfile = {
              userEmail: userd.email,
              userID: userd.uid,
            };
            console.log(userd.email, userd.uid);
            const customerProfile = firebase.database().ref("users");
            customerProfile.push(userProfile, (error) => {
              if (error) {
                toast.info(error.code, error.message);
              } else {
                toast.info("User Has Been Created");
              }
            });
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
  const deleteData = (id) => {
    firebase
      .database()
      .ref("messages/" + id)
      .remove();
  };
  const seeAlbums = () => {
    if (clicked) {
      const userRef = firebase.database().ref("users");
      userRef.on("value", (snapshot) => {
        const useronDb = snapshot.val();
        const userlist = [];
        for (let id in useronDb) {
          userlist.push({ id, ...useronDb[id] });
        }
        setUserLists(userlist);
        setClicked(!clicked);
      });
    } else {
      setClicked(!clicked);
    }
  };
  const handleDelete = (e) => {
    e.preventDefault();
    const collections = firebase.firestore().collection();
    collections
      .doc(albumName)
      .delete()
      .then(() => {
        toast.info(albumName, "sucessfully Deleted");
      })
      .catch((error) => toast.info(error.code, error.message));
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
            .ref(`${refer}/${albumName}/${image.name}`)
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
              const url = await uploadTask.snapshot.ref.getDownloadURL();
              urlarray.push(url);
            }
          );
        });

        Promise.all(promises)
          .then(() => {
            toast.info("All images uploaded");
            setOneImage("All Images Uploaded");
            setUrlarrays(urlarray);
          })
          .then(() => {
            console.log(urlarrays);
            const collection = firebase.database().ref(`${refer}/`);

            collection.update({ urlarrays });
          })
          .catch((err) => console.log(err));
      } else {
        toast.warn("Please Select Images");
      }
    } else {
      toast.warn("Please Type Album Name");
    }
  };
  console.log(urlarrays);
  return (
    <>
      <div className="AdminPanelContainer">
        <form className="AdminPanelForm">
          <label htmlFor="bucketName" className="AdminPanelFormLabel">
            Refer:
          </label>
          <input
            type="text"
            value={refer}
            className="AdminPanelFormInput"
            onChange={(event) => setRefer(event.target.value)}
          />
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
          <button className="submitImage" onClick={handleDelete}>
            Delete
          </button>
        </form>
        <div className="AlbumInformation">
          <h1 className="ablumH">Albums</h1>
          <button
            type="submit"
            onClick={seeAlbums}
            className="submitImage seeAlbum"
          >
            Users
            <span>
              {" "}
              {clicked ? (
                <FontAwesomeIcon icon={faPlus} />
              ) : (
                <FontAwesomeIcon icon={faMinus} />
              )}
            </span>
          </button>
          {!clicked ? (
            <div>
              {userlists.map((users) => {
                return (
                  <div className="userProfiles" key={users.id}>
                    <div>
                      {" "}
                      <span className="heading">User Email: </span>{" "}
                      {users.userEmail}
                    </div>
                    <div>
                      {" "}
                      <span className="heading">Album Name: </span>
                      {users.userID}
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          ) : null}
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
              className="createEmail"
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
              className="createEmail"
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

        <div className="Messages">
          <button className="RetrieveMessage" onClick={readData}>
            Show Messages
          </button>
          <div className="CustomerMessages">
            {messages.map((msg) => {
              return (
                <div className="CustomerMessage" key={msg.id}>
                  <h6>
                    <span className="heading">Name:</span> {msg.fname}
                  </h6>
                  <h6>
                    <span className="heading">Email:</span> {msg.email}
                  </h6>
                  <h6>
                    <span className="heading">Subject:</span> {msg.subject}
                  </h6>

                  <p className="msgCustomer">
                    <span className="heading">Messages: </span>
                    <br />
                    {msg.message}
                  </p>
                  <button
                    className="EmailDelBtn"
                    onClick={() => deleteData(msg.id)}
                    type="submit"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
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

export default withRouter(Adminpanel);
// export default Adminpanel;
