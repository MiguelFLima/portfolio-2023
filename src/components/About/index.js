import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
  const [lettersClass, setLettersClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLettersClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
              letterClass={lettersClass}
            />
          </h1>
          <p className="pAbout">
            Hi, guys, my name is Antonio Miguel, I'm 21 years old, born in
            Brazil, Salvador. When I left High School my wish was to become a
            mechanical enginner beacuse of my likes for cars. Over college, I
            realized that, despite my taste, the profession was not for me.
          </p>
          <p className="pAbout">
            In the mean time, a friend already had talked to me about the area
            he was studying to get in: Web Developing, Frontend. He said it was
            a good area and that I should search about it to see if I would
            like.
          </p>
          <p className="pAbout">
            And that's it.. I'm about 2 years now studying all about Frontend,
            HTML, CSS, JS, ReactJS, NextJS, CSS frameworks and more. And about 1
            year ago, as everyone always said that no matter what stack you work
            with, you gotta understand the other side, I decided to study about
            Backend with NodeJS.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#28a4d9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#5ed4f4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#f52301" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#09a30f" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
