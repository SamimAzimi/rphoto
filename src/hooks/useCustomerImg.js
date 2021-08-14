import React, {useEffect,useState} from 'react'
import fire from '../firebase.config'

function useCustomerImg(albumName,ref){

    const [userimage, setUserImage] = useState([]);
    useEffect(() => {
        const userImages = [];
        var storageRef = fire.storage().ref(albumName);
        storageRef
          .child(ref)
          .listAll()
          .then(function (result) {
            result.items.forEach(function (imagref) {
              imagref.getDownloadURL().then(function (url) {
                userImages.push(url);
    
    
              });
            });
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // toast.info(errorCode, errorMessage);
          });
    
        setUserImage(userImages);
      }, []);



      return {userimage}
}

export default useCustomerImg;