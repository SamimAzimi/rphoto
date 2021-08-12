service firebase.storage {
  match /b/{bucket}/o {
    // Files look like: "user/<UID>/path/to/file.txt"
    match /user/{userId}/{allPaths=**} {
      allow read;
      allow write: if request.auth.uid == userId;
    }
  }
}
///////
const handleUpload = (e) => {
    e.preventDefault();
    if (albumName) {
      if (images.length > 0) {
        const promises = [];
        // eslint-disable-next-line
        images.map((image) => {
          const uploadTask = firebase
            .storage()
            .ref(`user/${albumName}/${image.name}`)
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