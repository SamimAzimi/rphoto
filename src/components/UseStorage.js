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
