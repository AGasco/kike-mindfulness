import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./../styles/Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__mainSide">
        <p>kike@gmail.com - 642042042</p>
      </div>
      <h1>KIKE MINDFULNESS</h1>
      <h6>Aprende a meditar y recupera tu sensación de paz y bienestar</h6>
      <Link to="/programas">
        <button>RESERVA AHORA</button>
      </Link>
    </div>
  );
}

export default Landing;
