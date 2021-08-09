   var storageRef = firebase.storage().ref(bucketName);

    var uploadTask = storageRef.child(imagePath.split('\\').pop().split('/').pop()).put(imagePath);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    // eslint-disable-next-line
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    // eslint-disable-next-line
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);



///



const [imagePath,setImagePath]=useState([]);
  const [bucketName,setBucketName]=useState();

  const handleChange=(e)=>{
   
    for (let i =0; i < e.target.files.lenght; i++){
        const newImage = e.target.files[i]
        newImage["id"]= Math.random();
        setImagePath((prevState)=>[...prevState,newImage]);
      }
      console.log(imagePath);
    
  }

  const uploadImage = (e)=>{
   
  console.log(imagePath)
    // const storageRef = fire.storage().ref(bucketName + imagePath)
    
    
  }
  console.log(imagePath)
  return (
    <>
    <form className="AdminPanelForm">
      <label htmlFor="bucketName" className="AdminPanelFormLabel" >
      Album Name:
      <input className="AdminPanelFormInput" type="text" name="bucketName" onChange={event => setBucketName(event.target.value)} />
      </label>
      <label className="AdminPanelFormLabel" htmlFor="fileName">
        Choose Images:
      <input className="AdminPanelFormInput"  multiple type="file" name="fileName" onChange={handleChange}/>
      </label>
      <button type="submit" className="submitImage" onClick={uploadImage} >
        Upload
        </button>
      </form>
    </>
  );
}