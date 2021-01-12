import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons/";
import "./../styles/Landing.css";

function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="landing__mainSide">
        <p>kikemindfulness@gmail.com - 620648806</p>
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
      <div className="landing__container">
        <h1>KIKE MINDFULNESS</h1>
        <div className="landing__claim">
          <h3>APRENDE A MEDITAR</h3>
          <h6>RECUPERA TU SENSACIÓN DE PAZ Y BIENESTAR</h6>
        </div>
      </div>
    </div>
  );
}

export default Landing;
