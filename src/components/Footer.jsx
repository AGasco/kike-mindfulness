import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons/";
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
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__nav">
          <ul>
            <li>HOME</li>
            <li>QUIÉN SOY</li>
            <li>PROGRAMAS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
