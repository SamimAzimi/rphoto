import FirstPage from "./Home";
import SecondPage from "./secondhome";
import ThirdPage from "./ThirdHome";
import { withRouter } from "react-router";
function Landingpage() {
  return (
    <>
    <div>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      </div>
    </>
  );
}

export default withRouter(Landingpage);
