import "../style/gallary.css";
import { useState } from "react";
import useFirestore from "../hooks/useFirestore";
function Gallary() {
  // const { image, setImages } = useState();
  const { docs } = useFirestore("public");
  console.log("gallary", docs[0]);
  return (
    <>
      <div className="gallaryMain">
        <h1>Moments Captured</h1>
      </div>
    </>
  );
}

export default Gallary;
