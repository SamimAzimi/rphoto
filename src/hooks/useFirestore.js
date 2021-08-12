import { useState, useEffect } from "react";
import fire from "../firebase.config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  const collects = [];
  useEffect(() => {
    const unsub = fire.database().ref(collection);

    unsub.on("value", (snapshot) => {
      const data = snapshot.val();

      const imagelist = [];
      for (let id in data) {
        imagelist.push(data[id]);
      }
      setDocs(imagelist[1]);
      console.log("imaglist", imagelist[0]);
    });
  }, [collection]);
  return { docs };
};

export default useFirestore;
