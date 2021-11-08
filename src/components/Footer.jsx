import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faInstagram,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons/';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons/';
import { Link as ScrollLink } from 'react-scroll';
import logo from './../imgs/logo.png';

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
          <em>
            "La calidad de tus pensamientos determinan la calidad de tu vida"
          </em>
        </div>

        <p className="footer__socialMediaTitle">
          Sígueme en las redes sociales
        </p>

        <div className="footer__socialMedia">
          <a
            href="https://www.youtube.com/channel/UC0a7E4KP0wkQzjn-dnp6dZQ?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
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
        <div className="footer__designedBy">
          <a href="https://antoniofgasco.com" target="_blank" rel="noreferrer">
            Diseño y Web - <span>antoniofgasco</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
