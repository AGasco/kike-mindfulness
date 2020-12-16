import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="navbar__icon">
          <RouterLink to="/">KIKE MINDFULNESS </RouterLink>
        </h1>

        {!this.props.hidden && (
          <nav>
            <ul>
              <li>
                <ScrollLink to="quienSoy" smooth={true} duration={600}>
                  ¿QUIÉN SOY?
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="programas" smooth={true} duration={800}>
                  PROGRAMAS
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contacto" smooth={true} duration={1000}>
                  CONTÁCTAME
                </ScrollLink>
              </li>
            </ul>
            <ScrollLink
              className="navbar__cta"
              to="programas"
              smooth={true}
              duration={800}
            >
              <button>RESERVA AHORA</button>
            </ScrollLink>
          </nav>
        )}
      </div>
    );
  }
}

export default Navbar;
