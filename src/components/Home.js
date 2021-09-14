import "../style/home.css";
import HomeSlider from './HomeSlider'
import img from '../images/bride.jpeg'
import EgnagePic from '../images/engagementcoupleblack.jpeg'
import WeddingPic from '../images/brightcouplephotos.jpg'

function Home() {
  return (
    <>
    <div className="slidercont">
      <HomeSlider />
    </div>
    <div className="HomeContainer"> 
        <div className="DetailHome">
        <h1><span className="bold">Wedding</span> PhotoGraphy</h1>
   
        </div>
  
        <div className="ContainerImage gridOne">
          <img src={WeddingPic} alt="Wedding" />
        </div>
   
    
        <div className="DetailHome">
      <h1 className="gridH"><span className="bold">Engagement </span>PhotoGraphy</h1>
      </div>
        <div className="ContainerImage gridTwo">
          <img src={EgnagePic} alt="Wedding" />
        </div>
  
      <div className="DetailHome">
      <h1><span className="bold">Gathering</span> PhotoGraphy</h1>
      </div>
        <div className="ContainerImage gridThree">
          <img src={img} alt="Wedding" />

        </div>


    </div>
    </>
  );
}

export default Home;
