import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./../styles/Landing.css";

function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="landing__mainSide">
        <p>kikemindfulness@gmail.com - 620648806</p>
      </div>
      <h1>KIKE MINDFULNESS</h1>
      <h6>Aprende a meditar y recupera tu sensación de paz y bienestar</h6>
      {/* <ScrollLink to="programas" smooth={true} duration={800}>
        <button>RESERVA AHORA</button>
      </ScrollLink> */}
    </div>
  );
}

export default Landing;
