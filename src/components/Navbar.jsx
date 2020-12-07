import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar__icon">
        <Link to="/">KIKE MINDFULNESS </Link>
      </h1>
      <ul>
        <li>
          <Link to="/quien-soy">¿QUIÉN SOY?</Link>
        </li>
        <li>
          <Link to="/programas">PROGRAMAS</Link>
        </li>
        <li>
          <Link to="/contacto">CONTÁCTAME</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
