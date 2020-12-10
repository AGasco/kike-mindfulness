import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons/";
import { Link } from "react-router-dom";
import logo from "./../imgs/logo.png";
import "./../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__logo" src={logo} alt="KikeMindfulness Logo" />
      </div>
      <div className="footer__center">
        <div className="footer__quote">
          <em>
            "Cada mañana nacemos de nuevo. Lo que hacemos hoy es lo que más
            importa" -
          </em>{" "}
          Siddharta 'Buddha' Gautama
        </div>

        <p>Sígueme en las redes sociales</p>

        <div className="footer__socialMedia">
          <a href="https://google.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://google.com" target="_blank">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>

          <a href="https://google.com" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__nav">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/quien-soy">QUIÉN SOY</Link>
            </li>
            <li>
              <Link to="/programas">PROGRAMAS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
