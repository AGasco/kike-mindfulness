import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/";
import Logo from "./../imgs/logo_black.png";
import NavbarLogo from "./../imgs/logo_navbar.jpg";
import "./../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {this.props.hidden ? (
          <div>
            <h1 className="navbar__icon hidden">
              <RouterLink to="/">
                <img className="navbar__logo" src={Logo} alt="logo" />
              </RouterLink>
            </h1>
          </div>
        ) : (
          <div>
            <h1 className="navbar__icon">
              {/* <RouterLink to="/">KIKE MINDFULNESS </RouterLink> */}
              <RouterLink to="/">
                <img className="navbar__logo" src={NavbarLogo} alt="" />
              </RouterLink>
            </h1>
            <nav>
              <div className="navbar__left">
                <ul className="navbar__list">
                  <li className="navbar__li">
                    <ScrollLink to="programas" smooth={true} duration={800}>
                      PROGRAMAS
                    </ScrollLink>
                  </li>
                  <li className="navbar__li">
                    <ScrollLink to="contacto" smooth={true} duration={1000}>
                      CONTÁCTAME
                    </ScrollLink>
                  </li>
                </ul>
                <div className="navbar__phoneContainer">
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <p className="navbar__phone">620 648 806</p>
                </div>
              </div>
              <div className="navbar__right">
                <ScrollLink
                  className="navbar__cta"
                  to="programas"
                  smooth={true}
                  duration={800}
                >
                  <button>¡ RESERVA AHORA !</button>
                </ScrollLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
