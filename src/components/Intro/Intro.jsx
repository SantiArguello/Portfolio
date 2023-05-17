import React from "react";
import profileImage from "../../assets/fondo violeta imagen perfil.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <img className="profile-image" src={profileImage} alt="" />
        <div className="intro-text">
          <h1>Santiago Arguello</h1>
          <h2>Desarrolador FullStack</h2>
          <div className="intro-social">
            <a
              href="https://www.facebook.com/saanti.arguello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/saanti_arguello/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/SantiArguello"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-arguello-00b996263/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
