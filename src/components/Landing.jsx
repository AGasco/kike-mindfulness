import React from "react";
import "./../styles/Landing.css";

function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="landing__mainSide">
        <p>kikemindfulness@gmail.com - 620648806</p>
      </div>
      <div className="landing__container">
        <h1>KIKE MINDFULNESS</h1>
        <div className="landing__claim">
          <h3>APRENDE A MEDITAR</h3>
          <h6>Y RECUPERA TU SENSACIÓN DE BIENESTAR</h6>
        </div>
      </div>
    </div>
  );
}

export default Landing;
