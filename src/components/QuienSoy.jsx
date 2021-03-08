import React from "react";
import ReactPlayer from "react-player/youtube";
import Thumbnail from "./../imgs/quienSoy.jpg";
import "./../styles/reactPlayer.css";

function QuienSoy() {
  return (
    <div className="quienSoy" id="quienSoy">
      <div className="quienSoy__container">
        <h1 className="quienSoy__title">¿QUIÉN SOY?</h1>
        <p className="quienSoy__description">
          ¡Hola, soy Kike! Soy de Las Palmas de Gran Canaria. Ayudo a personas
          con estrés y ansiedad a entrenar su mente para recuperar su sensación
          de paz y bienestar.
        </p>
        <ReactPlayer
          className="quienSoy__video"
          width={640}
          height={360}
          controls={true}
          playing={true}
          light={Thumbnail}
          url="https://www.youtube.com/watch?v=r5pXw5jmf64"
        />
      </div>
    </div>
  );
}

export default QuienSoy;
