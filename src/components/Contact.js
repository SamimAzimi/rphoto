import {
  faEnvelope,
  faUser,
  faPaperPlane,
  faComment,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/contact.css";
import fire from "../firebase.config.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
function Contact() {
  function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return true;
    } else {
      toast.info("kindly enter correct mail address");
    }
  }

  const [person, setPerson] = useState({
    fname: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (person.fname && person.email && person.subject && person.message) {
      if (ValidateEmail(person.email)) {
        const contactmessageRef = fire.database().ref("messages");
        contactmessageRef.push(person, (error) => {
          if (error) {
            console.log(error);
            toast.info("kindly submit the form again");
          } else {
            toast.info("Your Message has been sent to rphoto successfully");
            toast.info("Thank You for your message , we will contact you shortly");
            setPerson({ fname: "", email: "", subject: "", message: "" });
          }
        });
      }
    } else {
      toast.info("Please Fill The Form");
    }
  };

  return (
    <>
      <form onSubmit={handlesubmit} className="contactform">
        <label htmlFor="name">
          <FontAwesomeIcon className="formIcons" icon={faUser} />
          <input
            value={person.fname}
            onChange={handleChange}
            name="fname"
            id="fname"
            type="text"
            placeholder="Name"
            />
            </label>

        <label htmlFor="email">
          <FontAwesomeIcon className="formIcons" icon={faEnvelope} />
          <input
            value={person.email}
            name="email"
            onChange={handleChange}
            id="email"
            required
            type="text"
            placeholder="Email Address:"
          />
        </label>

        <label htmlFor="Subject">
          <FontAwesomeIcon className="formIcons" icon={faTag} />
          <input
            value={person.subject}
            onChange={handleChange}
            name="subject"
            id="subject"
            type="text"
            placeholder="Subject"
          />
        </label>
      
        <label htmlFor="Message">
          <FontAwesomeIcon className="formIcons" icon={faComment} />
          < textarea rows="4" cols="70"
            type="text"
            value={person.message}
            onChange={handleChange}
            name="message"
            id="message"
            placeholder="Message"
          />
        </label>

        <button type="submit" className="sendContactFormButton">
          <FontAwesomeIcon icon={faPaperPlane} /> Send
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Contact;
