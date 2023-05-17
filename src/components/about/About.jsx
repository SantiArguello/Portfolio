import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faServer,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/1485287.png";
import "./about.css";

const About = () => {
  return (
    <div className="container-about">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            Soy un desarrollador Full Stack con experiencia en diversas
            tecnologías de programación. En el frontend, he trabajado con&nbsp;
            <FontAwesomeIcon icon={faReact} /> React, &nbsp;
            <FontAwesomeIcon icon={faJs} /> JavaScript, &nbsp;
            <FontAwesomeIcon icon={faHtml5} /> HTML, &nbsp;
            <FontAwesomeIcon icon={faCss3Alt} /> CSS y &nbsp;
            <FontAwesomeIcon icon={faBootstrap} /> Bootstrap para crear
            interfaces de usuario atractivas y adaptativas.
          </p>
          <p>
            Por otro lado, en el backend, cuento con habilidades en &nbsp;
            <FontAwesomeIcon icon={faNodeJs} /> Node.js, &nbsp;
            <FontAwesomeIcon icon={faServer} /> Express, &nbsp;
            <FontAwesomeIcon icon={faCode} /> Hapi, &nbsp;
            <FontAwesomeIcon icon={faDatabase} /> MongoDB y &nbsp;
            <FontAwesomeIcon icon={faDatabase} /> PostgreSQL para el desarrollo
            de servidores robustos y eficientes.
          </p>
          <p>
            Como profesional de la programación, siempre estoy en busca de
            nuevos desafíos y oportunidades para seguir creciendo en mi carrera.
            Me encanta aprender nuevas tecnologías y aplicarlas en proyectos
            innovadores y desafiantes.
          </p>
          <p>
            Si buscas un desarrollador Full Stack con experiencia y dispuesto a
            asumir nuevos desafíos, no dudes en contactarme. Estoy emocionado
            por trabajar en equipo para crear soluciones tecnológicas de alta
            calidad que satisfagan las necesidades de los usuarios.
          </p>

          <div className="technologies">
            <h3>Tecnologías que utilizo:</h3>
            <div className="tech-icons">
              <a href="https://es.react.dev/">
                <FontAwesomeIcon icon={faReact} /> React
              </a>
              <a href="https://www.javascript.com/">
                <FontAwesomeIcon icon={faJs} /> JavaScript
              </a>
              <a href="https://html.spec.whatwg.org/">
                <FontAwesomeIcon icon={faHtml5} /> HTML5
              </a>
              <a href="https://developer.mozilla.org/es/docs/Web/CSS">
                <FontAwesomeIcon icon={faCss3Alt} /> CSS
              </a>
              <a href="https://getbootstrap.com/">
                <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
              </a>
              <a href="https://nodejs.org/es">
                <FontAwesomeIcon icon={faNodeJs} /> Node.js,
              </a>
              <a href="https://expressjs.com/">
                <FontAwesomeIcon icon={faServer} /> Express
              </a>
              <a href="https://hapi.dev/">
                <FontAwesomeIcon icon={faCode} /> Hapi
              </a>
              <a href="https://www.mongodb.com/">
                <FontAwesomeIcon icon={faDatabase} /> MongoDb
              </a>
              <a href="https://www.postgresql.org/">
                <FontAwesomeIcon icon={faDatabase} /> PostgresSQL
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src={image} alt="imagen" />
      </div>
    </div>
  );
};

export default About;
