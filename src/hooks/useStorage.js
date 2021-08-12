import React, { useState, useEffect } from "react";
import fire from "../firebase.config";

export default function useStorage(ref, albumName, file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references

    const storageRef = fire.storage().ref(`${ref}/${albumName}/${file}`);
    storageRef.put(file).on(
      "state_change",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
}
