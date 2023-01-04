import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../data/Portfolio.json";
import "./index.scss";

const Portfolio = () => {
  const [letterClass, setLettersClass] = useState("text-animate");

  console.log("portfolioData", portfolioData);
  useEffect(() => {
    setTimeout(() => {
      setLettersClass("text-animate-hover");
    }, 4000);
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((project, idx) => (
          // I know key with idx its  bad practice...
          <div className="image-box" key={idx}>
            <img
              className="portfolio-image"
              src={project.cover}
              alt="project's cover"
            />
            <div className="content">
              <p className="title">{project.title}</p>
              <h4 className="description">{project.description}</h4>
              {project.url === "Private" ? (
                <button className="btn">{project.url}</button>
              ) : (
                <button
                  onClick={() => window.open(project.url)}
                  className="btn"
                >
                  Deploy
                </button>
              )}
              {project.githublink === "Private" ? (
                <button className="btn">Private</button>
              ) : (
                <button
                  onClick={() => window.open(project.githublink)}
                  className="btn"
                >
                  Git Hub
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            idx={15}
            strArray={"Portfólio".split("")}
            letterClass={letterClass}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
