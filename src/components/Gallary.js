import "../style/gallary.css";
import { useState } from "react";
import useFirestore from "../hooks/useFirestore";
function Gallary() {
  // const { image, setImages } = useState();
  const { docs } = useFirestore("public");

  const [model, setModel] = useState(false);
  const [tempImgsrc, setTempImgsrc] = useState("");
  const getImage = (image) => {
    setTempImgsrc(image);
    setModel(true);
  };

  return (
    <>
      <div
        onClick={() => setModel(false)}
        className={model ? "model open" : "model"}
      >
        <img src={tempImgsrc} alt="co" />
      </div>
      <h1 className="gallaryHeading">Moments Captured</h1>
      <div className="gallaries">
        {docs ? (
          docs.map((url) => {
            return (
              <div onClick={() => getImage(url)} className="pictures">
                <img src={url} alt="couple" style={{ width: "100%  " }} />
              </div>
            );
          })
        ) : (
          <div className="loading">
            <h1>Welcome To Our Gallary</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Gallary;
