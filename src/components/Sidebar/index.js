import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/antonio-miguel-553a84200/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            href="https://github.com/MiguelFLima"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
