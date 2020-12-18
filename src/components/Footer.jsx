import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faYoutube,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons/";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons/";
import { Link as ScrollLink } from "react-scroll";
import logo from "./../imgs/logo.png";
import "./../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <ScrollLink to="root" smooth={true} duration={1000}>
          <img className="footer__logo" src={logo} alt="KikeMindfulness Logo" />
        </ScrollLink>
      </div>
      <div className="footer__center">
        <div className="footer__quote">
          <em>"El dolor es inevitable, el sufrimiento es opcional" -</em> Buddha
        </div>

        <p className="footer__socialMediaTitle">
          Sígueme en las redes sociales
        </p>

        <div className="footer__socialMedia">
          <a
            href="https://www.instagram.com/kikemindfulness/?hl=es"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/kikemindfulness-114745383634570/?ref=py_c&__xts__"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          {/* 
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a> */}
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__nav">
          <ul>
            <li>
              <ScrollLink to="root" smooth={true} duration={1000}>
                HOME
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="quienSoy" smooth={true} duration={800}>
                QUIÉN SOY
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="programas" smooth={true} duraction={600}>
                PROGRAMAS
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="footer__contactContainer">
          <div className="footer__contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>kikemindfulness@gmail.com</p>
          </div>
          <div className="footer__contact">
            <FontAwesomeIcon icon={faPhone} />
            <p>620 648 806</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
