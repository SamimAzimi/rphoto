import Contact from "./Contact";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About() {
  return (
    <>
      <h1>“MY MISSION STATEMENT TO ONE & ALL”</h1>
      <p>
        For you “ALL” are the love of my life in putting your dreams together
        and I am always here and there for you! ​ I would like to take this time
        to introduce myself to, “You, Love Ones & Friends”. I am Ramin . My
        profession as a photography for the past fifteen years, has allow to me
        the opportunity to express and bring out the very best in me and to one
        and all. To present myself to you, in a professional manner of which I
        will be able to deliver your dream come through for you both, in a time
        that cannot be replace, I “Ramin”, will do. My passion for life in
        photography helps me, to tell a story of a real and true adventure, that
        belongs to both of you. I approach your event as an artistic, editorial
        eye. I capture stunning moments, making them portraits, which carries
        with it all the little details, for all that it is, your wedding day, a
        day to remember…!
      </p>
      <h4>Form my heart, to you both!</h4>
      <div className="location">
        <ul>
          <li>
            <FontAwesomeIcon icon={faMapMarker} />
            Pickering Ontario
          </li>
          <li>
            <FontAwesomeIcon icon={faWhatsapp} /> Phone
          </li>
          <ul>
            <li>647-268-3001</li>
            <li>416-456-1558</li>
          </ul>
        </ul>
      </div>
      <Contact />
    </>
  );
}

export default About;
