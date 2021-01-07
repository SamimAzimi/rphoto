import {
  faEnvelope,
  faUser,
  faPaperPlane,
  faComment,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <form className="contactform">
      <label htmlFor="name">
        <FontAwesomeIcon icon={faUser} />
        Name:
      </label>
      <input name="name" id="name" type="text" placeholder="Name" />

      <label htmlFor="email">
        <FontAwesomeIcon icon={faEnvelope} />
        Email:
      </label>
      <input name="email" id="name" type="text" placeholder="Email Address:" />

      <label htmlFor="Subject">
        <FontAwesomeIcon icon={faTag} />
        Subject:
      </label>
      <input name="Subject" id="Subject" type="text" placeholder="Subject" />

      <label htmlFor="Message">
        <FontAwesomeIcon icon={faComment} /> Message:
      </label>
      <input name="Message" id="Message" type="text" placeholder="Message" />

      <button type="submit">
        <FontAwesomeIcon icon={faPaperPlane} /> Send
      </button>
    </form>
  );
}

export default Contact;
