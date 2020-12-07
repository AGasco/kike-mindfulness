import React from "react";
import Navbar from "./Navbar";
import "./../styles/Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__top">
        <h1>KIKE MINDFULNESS</h1>
        <Navbar />
      </div>
      <div className="landing__main">
        <div className="landing__mainSide">
          <p>kike@gmail.com - 642042042</p>
        </div>
        <h1>KIKE MINDFULNESS</h1>
        <h6>Aprende a meditar y recupera tu sensación de paz y bienestar</h6>
        <button>RESERVA AHORA</button>
      </div>
    </div>
  );
}

export default Landing;
