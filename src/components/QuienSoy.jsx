import React from "react";
import ReactPlayer from "react-player";
import "./../styles/QuienSoy.css";

function QuienSoy() {
  return (
    <div className="quienSoy">
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
        url="https://www.youtube.com/watch?v=r5pXw5jmf64"
      />
    </div>
  );
}

export default QuienSoy;
