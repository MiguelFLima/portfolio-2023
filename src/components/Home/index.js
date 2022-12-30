import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import Me from "../../assets/images/Avatar.JPG";
import Loader from "react-loaders";

const Home = () => {
  const [lettersClass, setLettersClass] = useState("text-animate");
  const nameArray = [
    "A",
    "n",
    "t",
    "o",
    "n",
    "i",
    "o",
    " ",
    "M",
    "i",
    "g",
    "u",
    "e",
    "l",
  ];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLettersClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={lettersClass}>H</span>
            <span className={`${lettersClass} _12`}>i,</span>
            <br />
            <span className={`${lettersClass} _13`}>I</span>
            <span className={`${lettersClass} _14`}>'m</span>{" "}
            <AnimatedLetters
              letterClass={lettersClass}
              strArray={nameArray}
              idx={15}
            />{" "}
            <br />
            <AnimatedLetters
              letterClass={lettersClass}
              strArray={jobArray}
              idx={22}
            />{" "}
          </h1>
          <h2>Frontend Developer (Future &lt;Full Stack /&gt;)</h2>
          <Link to="/contact" className="flat-button">
            Contact Me!
          </Link>
        </div>
        <img className="solid-logo" src={Me} alt="Logo" />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
