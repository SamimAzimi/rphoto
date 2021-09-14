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






  {wait ? (
    <div className="coupleImageSlider">
    {userimages.map((img, index) => {
      return <img key={index} src={img} alt="couple" />;
    })}
  </div>

) : (
<div>Loading.....</div>
)}
</div>


var link = document.createElement("a");
link.download = "true";
userimages.map((res) => {
  link.href = res;
  console.log('download url clicked',res)
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


//////////////////
packages 
//////////////////

const [clicked, setClicked] = useState(true);

const [buttonText, setButtonText] = useState(true);

const toggle = (index) => {
  if (clicked === index) {
    setButtonText(false);
    return setClicked(null);
  }
  setClicked(index);
  setButtonText(true);
};







///body ///
<ul class="tilesWrap">
<li>
  <h2>01</h2>
  <h3>Lovers</h3>
  {clicked === 1 ? (
    <ContactUs />
  ) : (
    <div key="1" className="packageDetails">
      <h4>40 . 10 x 10 Prints for Bride & Groom</h4>
      <h4>100. 5 x 7 Prints for Bride's parents(with Album)</h4>
      <h4>100. 5 x 7 Prints for Groom's Parents (with Album)</h4>
      <h4>01 .20x 24 Wall Portrait</h4>
      <h4>50 . Thank you card.</h4>
      <h4>UNLIMITED PHOTO taken</h4>
      <h4>Covers up to 4 locations</h4>
      <h4>
        High resolution,unwatermaked,ready to print files on DVD or
        Blu-ray Disc
      </h4>
      <h4>indiviually edited and retoouched images</h4>
      <h4>On-line Photo Gallery with Client Login</h4>
    </div>
  )}
  <button
    type="submit"
    className="SelectButton"
    onClick={() => toggle(1)}
  >
    {buttonText && clicked === 1 ? "Back" : "Select"}
  </button>
</li>
<li>
  <h2>02</h2>
  <h3>Life Partner</h3>
  {clicked === 2 ? (
    <ContactUs />
  ) : (
    <div key="2" className="packageDetails">
      <h4>
        01. 11 x 14 Story Book (Cofee Table Book )for Bride & groom
      </h4>
      <h4>20. 10 x 10 Prints for Bride & Groom</h4>
      <h4>100. 5 x 7 Prints for Bride's parents</h4>
      <h4>100. 5 x 7 Prints for Groom's Parents</h4>
      <h4>01. 11 x 14 Wall Portrait</h4>
      <h4>50. Thank you card.</h4>
      <h4>UNLIMITED PHOTO taken</h4>
      <h4>Covers up to 4 locations</h4>
      <h4>
        High resolution,unwatermaked,ready to print files on DVD or
        Blu-ray Disc
      </h4>
      <h4>indiviually edited and retoouched images</h4>
      <h4>On-line Photo Gallery with Client Login</h4>
    </div>
  )}
  <button
    type="submit"
    className="SelectButton"
    onClick={() => toggle(2)}
  >
    {buttonText && clicked === 2 ? "Back" : "Select"}
  </button>
</li>
<li>
  <h2>03</h2>
  <h3>Soulmate</h3>
  {clicked === 3 ? (
    <ContactUs />
  ) : (
    <div key="3" className="packageDetails">
      <h4>01. 22 x 14 Cofee Table Book for Bride & groom</h4>
      <h4>20. 10 x 10 Prints for Bride's parents</h4>
      <h4>20. 10 x 10 Prints for Groom's Parents</h4>
      <h4>01. 16 x 20 Portrait with Frame for Reception</h4>
      <h4>01. 20 x 24 Wall Portraits(after Wedding)</h4>
      <h4>100. Thank you card.</h4>
      <h4>UNLIMITED PHOTO taken</h4>
      <h4>Covers up to 4 locations</h4>
      <h4>
        High resolution,unwatermaked,ready to print files on DVD or
        Blu-ray Disc
      </h4>
      <h4>indiviually edited and retoouched images</h4>
      <h4>On-line Photo Gallery with Client Login</h4>
    </div>
  )}
  <button
    type="submit"
    onClick={() => toggle(3)}
    className="SelectButton"
  >
    {buttonText && clicked === 3 ? "Back" : "Select"}
  </button>
</li>
<li>
  <h2>04</h2>
  <h3>Basic Package</h3>
  {clicked === 4 ? (
    <ContactUs />
  ) : (
    <div key="4" className="packageDetails">
      <h4>UNLIMITED PHOTO taken</h4>
      <h4>4 Location Photo Shoot</h4>
      <h4>
        High resolution,unwatermaked, ready to print files on DVD or
        Blu-ray Disc
      </h4>
      <h4>indiviually edited and retoouched image</h4>
    </div>
  )}
  <button
    type="submit"
    onClick={() => toggle(4)}
    className="SelectButton"
  >
    {buttonText && clicked === 4 ? "Back" : "Select"}
  </button>
</li>
</ul>