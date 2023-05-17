import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo2.png";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link
            to="/proyects"
            className={`nav-link ${
              location.pathname === "/proyects" ? "active" : ""
            }`}
          >
            Proyectos
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            Sobre mí
          </Link>
          <Link
            to="/education"
            className={`nav-link ${
              location.pathname === "/education" ? "active" : ""
            }`}
          >
            Educación
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contacto
          </Link>
        </nav>
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
