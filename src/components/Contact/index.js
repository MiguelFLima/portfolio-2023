import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/index";
import { useEffect, useRef, useState } from "react";
import "./index.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [lettersClass, setLettersClass] = useState("text-animate");
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cxkyrbs",
        "template_mee0pma",
        refForm.current,
        "w1Tc2XrH6jB73H1Lr"
      )
      .then(() => {
        alert("Message successfully sent!");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Sorry, looks like something went wrong, please try again.");
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setLettersClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
              letterClass={lettersClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities and full time jobs,
            remote or hybrid. However, if you have other request or question,
            don't hesitate to contact me using the below form either.
          </p>
          <div>
            <form ref={refForm} onSubmit={sendEmail} className="contact-form">
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email_id"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
