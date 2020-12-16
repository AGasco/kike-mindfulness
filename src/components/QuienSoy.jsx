import React from "react";
import ReactPlayer from "react-player/youtube";
import Thumbnail from "./../imgs/landing2.jpg";
import "./../styles/QuienSoy.css";
import "./../styles/reactPlayer.css";

function QuienSoy() {
  return (
    <div className="quienSoy" id="quienSoy">
      <div className="quienSoy__container">
        <h1 className="quienSoy__title">¿QUIÉN SOY?</h1>
        <p className="quienSoy__description">
          Hola, soy Kike. Me dedico a ayudar a personas con estrés y ansiedad a
          entrenar su mente y así recuperar su sensación de paz y bienestar
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
