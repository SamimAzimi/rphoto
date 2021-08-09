import React, { useState } from "react";
import firebase from "../firebase.config";
import '../style/adminPanel.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Adminpanel() {
  const [images, setImages] = useState([]);
  const [albumName,setAlbumName] = useState()
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    const promises = [];
     // eslint-disable-next-line
    images.map((image) => {
      const uploadTask = firebase.storage().ref(`${albumName}/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
          // eslint-disable-next-line
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              toast.info('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              toast.info('Upload is running');
              break;
          }

        },
        (error) => {
           // eslint-disable-next-line
          switch (error.code) {
            case 'storage/unauthorized':
              toast.info("User doesn't have permission to access the object");
              break;
            case 'storage/canceled':
              toast.info(" User canceled the upload")
              // User canceled the upload
              break;
      
            // ...
      
            case 'storage/unknown':
              toast.info("Inspect error.serverResponse")
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        async () => {
          await uploadTask.snapshot.ref
            .getDownloadURL()
            .then((urls) => {
              setUrls((prevState) => [...prevState, urls]);
            });
        }
      );
    });

    Promise.all(promises)
      .then(() => toast.info("All images uploaded"))
      .catch((err) => console.log(err));
  };


  return (
    <>
    <div>
      <input type="text" onChange={(event)=>setAlbumName(event.target.value)} />
      <input type="file" multiple onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <progress value={progress} max="100" />

      {urls.map((url, i) => {

        return(
          <div key={i}>
          <a href={url} target="_blank" rel="noreferrer" >
            {url}
          </a>
        </div>
        )
})}
      <br />
      
      {urls.map((url, i) => {
  return  (       <img
          key={i}
          style={{ width: "500px" }}
          src={url || "http://via.placeholder.com/300"}
          alt="placeHolder"
        />)
})}
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
};
export default Adminpanel;
